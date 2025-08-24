// preload.js
const { contextBridge } = require("electron");
const path = require("path");
const fs = require("fs");

contextBridge.exposeInMainWorld("api", {
  path,
  fs,
  hello: () => "👋 from preload",
});
