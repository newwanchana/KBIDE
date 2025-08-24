<template>
  <v-tooltip bottom>
    <v-btn color="primary darken-2" slot="activator" icon @click="addBoardZip">
      <v-icon dark>fa fa-file-archive-o</v-icon>
    </v-btn>
    <span>Add Board.zip</span>
  </v-tooltip>
</template>

<script>
const { ipcRenderer } = require("electron");
const AdmZip = require("adm-zip");
const path = require("path");
const fs = require("fs");

// ✅ ใช้ process ปกติได้เลย เพราะ contextIsolation: false
const processPath = process;

export default {
  name: "ActionbarAddBoardZip",
  methods: {
    addBoardZip() {
      // 🟢 เคลียร์ listener เดิมก่อนป้องกันซ้อน (กรณีกดปุ่มหลายรอบ)
      ipcRenderer.removeAllListeners("open-zip-dialog-response");

      // 🔹 ส่งคำสั่งเปิด File Dialog
      ipcRenderer.send("open-zip-dialog");

      // 🔹 รับ path ไฟล์ .zip ที่เลือก
      ipcRenderer.once("open-zip-dialog-response", (event, res) => {
        console.log("📥 ไฟล์ที่เลือก:", res);

        // ✅ ตรวจสอบว่าเลือกไฟล์ถูกต้อง
        if (
          res &&
          Array.isArray(res) &&
          res.length > 0 &&
          res[0].toLowerCase().endsWith(".zip")
        ) {
          const zipPath = res[0];
          console.log("📂 เริ่มติดตั้งบอร์ดจาก:", zipPath);

          try {
            const zip = new AdmZip(zipPath);

            // ✅ ตำแหน่งติดตั้งโปรแกรม
            const appInstallPath = path.dirname(processPath.execPath);
            const extractPath = path.join(appInstallPath, "boards");

            // 📁 สร้างโฟลเดอร์ถ้ายังไม่มี
            if (!fs.existsSync(extractPath)) {
              fs.mkdirSync(extractPath, { recursive: true });
              console.log("📁 สร้างโฟลเดอร์:", extractPath);
            }

            // ✅ แตกไฟล์
            zip.extractAllTo(extractPath, true);
            console.log("✅ แตกไฟล์สำเร็จไปยัง:", extractPath);

            this.$global.ui.snackbar(
              "✅ ติดตั้งบอร์ดสำเร็จ: " + path.basename(zipPath)
            );
          } catch (err) {
            console.error("❌ เกิดข้อผิดพลาดขณะติดตั้งบอร์ด:", err);
            this.$global.ui.snackbar(
              "❌ ติดตั้งบอร์ดล้มเหลว โปรดตรวจสอบไฟล์ .zip"
            );
          }
        }
        // else {
        //   this.$global.ui.snackbar("❌ คุณยังไม่เลือกไฟล์ .zip ที่ถูกต้อง");
        // }
      });
    },
  },
};
</script>
