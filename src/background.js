"use strict";
console.log("🧪 background.js loaded");

import { app, protocol, BrowserWindow, ipcMain, dialog } from "electron";
import {
  createProtocol,
  installVueDevtools,
} from "vue-cli-plugin-electron-builder/lib";
const path = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";

// ✅ Register scheme (สำหรับ Electron v4)
protocol.registerStandardSchemes(["app"], { secure: true });

let win;

function createWindow() {
  console.log("🪟 createWindow เรียกแล้ว");

win = new BrowserWindow({
  show: false, // ซ่อนตอนแรก เพื่อไม่ให้แสดงก่อน maximize
  icon: path.join(__static, "icon.png"),
  webPreferences: {
    webSecurity: false,
    allowRunningInsecureContent: true,
    nodeIntegration: true,
    contextIsolation: false,
  },
});

win.once("ready-to-show", () => {
  win.maximize();  // ✅ ขยายหน้าต่างให้เต็มพื้นที่จอ (มี title bar, taskbar)
  win.show();
});



  win.once("ready-to-show", () => {
    console.log("✅ ready-to-show → แสดงหน้าต่าง");
    win.show();
  });

  //win.webContents.openDevTools(); // 👈 บรรทัดนี้คือเปิด DevTools

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    console.log("🌐 Loading Dev URL:", process.env.WEBPACK_DEV_SERVER_URL);
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
  } else {
    createProtocol("app");
    win.loadURL("app://./index.html");
  }

  // ✅ ต้องอยู่ในนี้
  win.on("closed", () => {
    win = null;
  });
}

// ✅ IPC สำหรับเปิด Dialog เลือกไฟล์ .zip (รองรับ Electron v4)
ipcMain.on("open-zip-dialog", async (event) => {
  try {
    const filePaths = await dialog.showOpenDialog({
      title: "Select File.zip",
      filters: [{ name: "Zip Files", extensions: ["zip"] }],
      properties: ["openFile"],
    });

    console.log("📂 [Main] ไฟล์ที่เลือก:", filePaths);

    if (!filePaths || filePaths.length === 0) {
      event.sender.send("open-zip-dialog-response", []);
    } else {
      event.sender.send("open-zip-dialog-response", filePaths);
    }
  } catch (err) {
    console.error("❌ Error opening dialog:", err);
    event.sender.send("open-zip-dialog-response", []);
  }
});

// // 🚀 App Lifecycle
process.on("unhandledRejection", (reason, promise) => {
  console.warn("⚠️ [Handled] Unhandled Rejection:", reason.message);
});

app.on("ready", async () => {
  console.log("🚀 Electron ready");

  if (isDevelopment && !process.env.IS_TEST) {
    console.log("🧪 Installing Vue Devtools...");

    const timeout = (ms) =>
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("Vue Devtools install timed out")),
          ms
        )
      );

    if (isDevelopment && !process.env.IS_TEST) {
      try {
        await Promise.race([
          installVueDevtools(),
          timeout(3000), // ⏱ Timeout ภายใน 3 วินาที
        ]);
        console.log("✅ Vue Devtools installed");
      } catch (err) {
        console.warn("⚠️ Vue Devtools install failed:", err.message);
      }
    }

    console.log("🧪 Calling createWindow...");
    createWindow();
  }

  // ✅ ไม่ว่า install จะสำเร็จหรือไม่ ก็ต้องเรียก
  console.log("🧪 Calling createWindow...");
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

// ♻️ Restart after update
ipcMain.on("update-restart", () => {
  app.relaunch();
  app.exit(0);
});

// 🛑 Graceful Exit (Dev Mode)
if (isDevelopment) {
  const shutdown = () => app.quit();
  process.platform === "win32"
    ? process.on("message", (msg) => msg === "graceful-exit" && shutdown())
    : process.on("SIGTERM", shutdown);
}

// 📂 Load custom menu
require("./menu");
