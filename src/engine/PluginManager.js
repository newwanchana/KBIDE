import util from "@/engine/utils";
import RealBlockly from "vue-blockly";

const fs = require("fs");
const os = require("os");
const path = require("path");
const request = require("request");
const request_promise = require("request-promise");
const progress = require("request-progress");
let localBoardName = "";
let localPlugins = {};

const decodeArduinoLibraryConfig = function (targetFile) {
  let tmpData = fs.readFileSync(targetFile, "utf8");
  let lines = tmpData.split("\n");
  let tdata = lines.map((l) => l.split("="));
  let res = {};
  tdata.forEach((el) => {
    if (el.length && el.length === 2) {
      res[el[0].trim()] = el[1].trim();
    }
  });
  return res;
};

const listPlugin = function (dir) {
  let plugins = {};
  let blockFiles = fs.readdirSync(dir);
  if (blockFiles.length > 0) {
    blockFiles.forEach((blockFile) => {
      let fblock = `${dir}/${blockFile}`;
      if (
        blockFile.endsWith(".js") &&
        blockFile.startsWith("block") &&
        fs.lstatSync(fblock).isFile()
      ) {
        // extract block definitions
        let blocks = [];
        var Blockly = {
          Blocks: [],
        };
        try {
          if (!document.BlockyPlugin) {
            document.BlocklyPlugin = {};
          }
          let pluginWorkspace = new RealBlockly.Workspace();
          eval(fs.readFileSync(fblock, "utf8"));
          for (let i in Blockly.Blocks) {
            document.BlocklyPlugin[i] = pluginWorkspace;
            blocks.push(i);
          }
        } catch (e) {
          console.log(`plugin "${blockFile}" blocks.js error`);
        } //----------------------//

        // extract block generators
        let fgen = `${dir}/${blockFile.replace("block", "generator")}`;
        var generators = [];
        var Blockly = {
          JavaScript: [],
        };
        try {
          eval(fs.readFileSync(fgen, "utf8"));
          for (let i in Blockly.JavaScript) {
            generators.push(i);
          }
        } catch (e) {
          console.log(`plugin "${plugin}" generator.js error`);
        } //----------------------//
        // TODO : check block and generator must eq
        plugins[blockFile] = {
          dir: dir,
          file: blockFile,
          blocks: blocks,
          generators: generators,
        };
        console.log(
          `plugin "${blockFile}" found ${blocks.length} block${
            blocks.length > 1 ? "s" : ""
          }`
        );
      }
    });
  }
  return plugins;
};

const listKidBrightPlugin = function (dir) {
  let plugins = {};
  let catPlugins = fs.readdirSync(dir);
  if (catPlugins.length > 0) {
    catPlugins.forEach((plugin) => {
      let fdir = `${dir}/${plugin}`;
      if (fs.lstatSync(fdir).isDirectory()) {
        // extract block definitions
        var blocks = [];
        var Blockly = {
          Blocks: [],
        };
        try {
          eval(fs.readFileSync(`${fdir}/blocks.js`, "utf8"));
          for (let i in Blockly.Blocks) {
            blocks.push(i);
          }
        } catch (e) {
          console.log(`plugin "${plugin}" blocks.js error`);
        } //----------------------//

        // extrack block generators
        var generators = [];
        var Blockly = {
          JavaScript: [],
        };
        try {
          eval(fs.readFileSync(`${fdir}/generators.js`, "utf8"));
          for (var i in Blockly.JavaScript) {
            generators.push(i);
          }
        } catch (e) {
          console.log(`plugin "${plugin}" generator.js error`);
        } //----------------------//
        // TODO : check block and generator must eq
        plugins[plugin] = {
          dir: fdir,
          file: "blocks.js",
          name: plugin,
          blocks: blocks,
          generators: generators,
        };
        console.log(
          `plugin "${plugin}" found ${blocks.length} block${
            blocks.length > 1 ? "s" : ""
          }`
        );
      }
    });
  }
  return plugins;
};

const listExamples = function (exampleDir) {
  let exampleInfo = [];
  if (fs.existsSync(exampleDir)) {
    let exampleFolders = fs.readdirSync(exampleDir);
    exampleFolders.forEach((folder) => {
      let targetDir = `${exampleDir}/${folder}`;
      if (fs.lstatSync(targetDir).isDirectory()) {
        let exampleContent = fs.readdirSync(targetDir);
        exampleInfo.push({
          folder: folder,
          dir: targetDir,
          files: exampleContent,
        });
      }
    });
  }
  return exampleInfo;
};
const listCategoryPlugins = function (pluginDir, boardInfo) {
  let categories = [];
  let allPlugin = {};
  if (fs.existsSync(pluginDir)) {
    let cats = fs.readdirSync(pluginDir);
    cats.forEach((cat) => {
      let dir = `${pluginDir}/${cat}`;
      if (!fs.lstatSync(dir).isDirectory()) {
        return;
      }
      //------- load kidbright plugins -------//
      let pluginContents = fs.readdirSync(dir, { withFileTypes: true });
      let kbPluginInfoFile = pluginContents.find(
        (el) =>
          el.isFile() && el.name.endsWith(".json") && el.name !== "library.json"
      );
      if (kbPluginInfoFile && boardInfo.name === "kidbright") {
        let kbPluginInfoFileFull = `${dir}/${kbPluginInfoFile.name}`;
        let catInfoFile = JSON.parse(
          fs.readFileSync(kbPluginInfoFileFull, "utf8")
        );
        let blockPlugins = listKidBrightPlugin(dir);
        let incDirectory = pluginContents.filter((el) => el.isDirectory());
        categories.push({
          directory: dir,
          dirName: cat,
          plugins: blockPlugins,
          category: catInfoFile,
          sourceIncludeDir: incDirectory,
        });
        Object.assign(allPlugin, blockPlugins);
        //------- load normal plugins ---------//
      } else if (boardInfo.name !== "kidbright") {
        let pluginInfo = null;
        let infoFile = `${dir}/library.json`;
        let arduinoInfoFile = `${dir}/library.properties`;
        if (fs.existsSync(infoFile)) {
          pluginInfo = JSON.parse(fs.readFileSync(infoFile, "utf8"));
          if ("frameworks" in pluginInfo && "platforms" in pluginInfo) {
            //this is platformIO config file
            if (pluginInfo.frameworks === "arduino") {
              if (pluginInfo.platforms === "*") {
                pluginInfo.platform = ["*"];
              }
              if (
                typeof pluginInfo.platforms === "object" &&
                pluginInfo.platforms.includes("espressif32")
              ) {
                pluginInfo.platform = ["arduino-esp32"];
              }
            }
            if (pluginInfo.repository && pluginInfo.repository.type === "git") {
              pluginInfo["git"] = pluginInfo.repository.url
                .replace(".git", "/")
                .trim();
            } else {
              return; //this plugin cannot update
            }
            if (pluginInfo.authors) {
              pluginInfo["author"] = pluginInfo.authors.name;
            }
            pluginInfo["title"] = pluginInfo["name"];
            pluginInfo["name"] = pluginInfo["name"].replace(/\s/g, "-").trim();
          }
        } else if (fs.existsSync(arduinoInfoFile)) {
          pluginInfo = decodeArduinoLibraryConfig(arduinoInfoFile);
          if ("url" in pluginInfo) {
            pluginInfo["git"] = pluginInfo.url;
          } else {
            return; //reject
          }
          pluginInfo.title = pluginInfo.name;
          pluginInfo.name = pluginInfo.name.replace(/\s/g, "-").trim();
          pluginInfo.description = pluginInfo.sentence;
          pluginInfo.platform = pluginInfo.architectures;
        } else {
          return; //there are no info file in this library.
        }
        //---------- rejection other board platform ----------//
        if (boardInfo !== undefined && boardInfo.platform) {
          if (
            typeof pluginInfo.platform === "string" && //single param platform
            !pluginInfo.platform.includes(",") &&
            pluginInfo.platform !== boardInfo.platform &&
            pluginInfo.platform !== "*"
          ) {
            //any platform ? is that real!?
            return;
          } else if (
            typeof pluginInfo.platform === "string" && //string with comma
            pluginInfo.platform.includes(",")
          ) {
            let supportedPlugins = pluginInfo.platform
              .split(",")
              .map((el) => el.trim());
            if (!supportedPlugins.includes(boardInfo.platform)) {
              return;
            }
          } else if (pluginInfo.platform.constructor === Array) {
            //array of platform
            if (!pluginInfo.platform.includes(boardInfo.platform)) {
              return;
            }
          }
        }
        //---------- load plugin ----------//
        let srcDir = `${dir}/src`;
        let blockDir = `${dir}/blocks`;
        let exampleDir = `${dir}/examples`;

        let blockPlugins = {};
        let srcFile = [];
        let srcIncDir = dir;
        if (fs.existsSync(blockDir)) {
          blockPlugins = listPlugin(blockDir);
        }
        if (fs.existsSync(srcDir)) {
          srcFile = fs.readdirSync(srcDir);
          srcIncDir = srcDir;
        } else if (fs.readdirSync(dir).find((el) => el.endsWith(".h"))) {
          srcFile = fs.readdirSync(dir);
          srcIncDir = dir;
        }
        let exampleInfo = [];
        if (fs.existsSync(exampleDir)) {
          exampleInfo = listExamples(exampleDir);
        }
        categories.push({
          directory: dir,
          dirName: cat,
          sourceFile: srcFile,
          sourceIncludeDir: srcIncDir,
          plugins: blockPlugins,
          category: pluginInfo,
          examples: exampleInfo,
        });
        Object.assign(allPlugin, blockPlugins);
      }
    });
  }
  return { categories: categories, plugins: allPlugin };
};
//TODO : look for platform blocks

const loadPlugin = function (boardInfo) {
  if (
    (Object.entries(localPlugins).length === 0 &&
      localPlugins.constructor === Object) ||
    boardInfo.name !== localBoardName
  ) {
    // check empty object !!!
    //load mother platform
    //TODO : implement look up in mother of platform again
    //load from platform
    let platformPlugins = listCategoryPlugins(
      `${util.platformDir}/${boardInfo.platform}/plugin`,
      boardInfo
    );
    //load from board
    let boardPlugins = listCategoryPlugins(
      `${util.boardDir}/${boardInfo.name}/plugin`,
      boardInfo
    );
    //load global plugin
    let globalPlugins = listCategoryPlugins(util.pluginDir, boardInfo);
    //join all together
    let allPlugins = {};
    Object.assign(allPlugins, platformPlugins.plugins);
    Object.assign(allPlugins, boardPlugins.plugins);
    Object.assign(allPlugins, globalPlugins.plugins);
    let allPluginsCat = globalPlugins.categories.concat(
      platformPlugins.categories,
      boardPlugins.categories
    );
    localPlugins = {
      categories: allPluginsCat,
      plugins: allPlugins,
    };
  }
  return localPlugins;
};

const clearListedPlugin = function () {
  localPlugins = {};
};

const plugins = function (boardInfo) {
  let lpg = loadPlugin(boardInfo);
  return lpg.categories;
};

const listOnlinePlugin = function () {
  const jsonUrl = "https://woottinan.github.io/kbide-board-repo/plugins.json";

  return new Promise(function (resolve, reject) {
    fetch(jsonUrl)
      .then(function (res) {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(function (data) {
        function normalizeName(text) {
          return String(text || "")
            .toLowerCase()
            .replace(/[\s_\-]/g, "")
            .trim();
        }

        function normalizeVersion(v) {
          return String(v || "")
            .toLowerCase()
            .replace(/^v/, "") // ตัด v ด้านหน้า
            .replace(/\s/g, "") // ตัดช่องว่าง
            .replace(/\./g, "") // 1.0.0 → 100
            .trim();
        }

        const installedPluginsMap = {};
        const allInstalled =
          localPlugins && localPlugins.plugins
            ? Object.values(localPlugins.plugins)
            : [];

        allInstalled.forEach(function (p) {
          var rawName =
            p.category && p.category.name
              ? p.category.name
              : p.name
              ? p.name
              : p.title
              ? p.title
              : "";

          var rawVersion =
            p.category && p.category.version
              ? p.category.version
              : p.version
              ? p.version
              : "";

          const name = normalizeName(rawName);
          const version = normalizeVersion(rawVersion);

          if (name && version) {
            installedPluginsMap[name] = version;
          }
        });

        // ✅ DEBUG: แสดง plugins ที่ตรงกัน (จะไม่โชว์ใน online)
        console.log("✅ Matched plugins (not shown):", installedPluginsMap);

        const filtered = data.filter(function (op) {
          const name = normalizeName(op.name);
          const version = normalizeVersion(op.version);
          if (!name || !version) return true;

          const localVersion = installedPluginsMap[name];
          return !localVersion || localVersion !== version;
        });

        resolve({ plugins: filtered, meta: {} });
      })
      .catch(function (err) {
        console.error("❌ list online plugin error:", err.message || err);
        reject(err);
      });
  });
};

const installOnlinePlugin = function (info, cb) {
  let targetDir = util.pluginDir;

  return new Promise((resolve, reject) => {
    let zipUrl = "";

    // ✅ ลองใช้ download_url ก่อน
    if (info.download_url && /^https?:\/\//.test(info.download_url)) {
      zipUrl = info.download_url;
    } else if (info.git && /^https?:\/\//.test(info.git)) {
      zipUrl = `${info.git.replace(/\/$/, "")}/archive/master.zip`;
    } else {
      return reject("❌ No valid download URL or git URL provided");
    }

    console.log("📥 Downloading plugin from:", zipUrl);

    const zipFile = os.tmpdir() + "/" + util.randomString(10) + ".zip";
    const file = fs.createWriteStream(zipFile);

    progress(request(zipUrl), {
      throttle: 2000,
      delay: 1000,
      followAllRedirects: true,
      follow: true,
    })
      .on("progress", (state) => {
        cb && cb({ process: "plugin", status: "DOWNLOAD", state: state });
      })
      .on("error", (err) => {
        reject(err);
      })
      .on("end", () => {
        file.end();
        resolve(zipFile);
      })
      .pipe(file);
  })
    .then((zipFile) => {
      return util.unzip(zipFile, { dir: targetDir }, (p) => {
        cb && cb({ process: "plugin", status: "UNZIP", state: p });
      });
    })
    .then(() => true);
};

const removePlugin = function (pluginInfo, isBackupRemove = false) {
  return new Promise((resolve, reject) => {
    let target = pluginInfo.directory;
    if (isBackupRemove) {
      target += "-backup-plugin";
    }
    if (fs.existsSync(target)) {
      util.rmdirf(target);
      resolve();
    } else {
      reject("no directory");
    }
  });
};

const backupPlugin = function (pluginInfo) {
  return new Promise((resolve, reject) => {
    let target = pluginInfo.directory;
    if (target.endsWith("/")) {
      target = target.substring(0, target.length - 1);
    }
    let newer = `${target}-backup-plugin`;
    if (!fs.existsSync(target)) {
      reject("no directory");
    } else {
      fs.renameSync(target, newer);
      resolve();
    }
  });
};

const restorePlugin = function (pluginInfo) {
  let target = pluginInfo.directory;
  if (target.endsWith("/")) {
    target = target.substring(0, target.length - 1);
  }
  let newer = `${target}-backup-plugin`;
  fs.renameSync(newer, target);
  resolve();
};

const publishPlugin = function (url) {
  return new Promise((resolve, reject) => {
    let json = null;
    if (!util.regex.isValidGithubUrl(url)) {
      reject("wrong github url format");
      return;
    }
    request_promise(
      url + "raw/master/library.json?random=" + util.randomString()
    ) //add randomstring prevent cached response
      .then((res) => {
        json = JSON.parse(res);
        if (json.name) {
          //search if existing
          let query = { filter: { name: { eq: json.name } } };
          return Vue.prototype.$db2
            .getItems("plugins", query)
            .then((data, meta) => {
              return data.data && data.data.length === 1 && data.data[0];
            })
            .catch((err) => {
              console.error("list online plugin error : " + err);
              return false;
            });
        } else {
          return false;
        }
      })
      .then((res) => {
        if (res && res.version) {
          return json.version > res.version;
        } else {
          return true;
        }
      })
      .then((res) => {
        if (res) {
          delete json.homepage; //please use URL instead.
          json.status = "draft";
          json.board =
            json.board && json.board.includes(",")
              ? json.board.split(",").map((el) => el.toLowerCase().trim())
              : null;
          json.keywords =
            json.keywords && json.keywords.includes(",")
              ? json.keywords.split(",").map((el) => el.toLowerCase().trim())
              : [""];
          if (!json.category) {
            json.category = "Uncategorized";
          }
          Vue.prototype.$db_dev
            .createItem("plugins", json)
            .then((res) => {
              console.log(res);
              if (res) {
                resolve("submit your plugin success, please refresh again");
              } else {
                reject(
                  "Fail to add new plugin, please open console log to review."
                );
              }
            })
            .catch((err) => {
              console.log("Publish data failed : ");
              console.log(err);
              reject(err);
            });
        } else {
          reject("Existing plugin name or is not newest version");
        }
      })
      .catch((err) => {
        console.log("Plugin Publishing Error : ");
        console.log(err);
        reject(err);
      });
  });
};

export default {
  listPlugin,
  loadPlugin,
  plugins,
  listOnlinePlugin,
  installOnlinePlugin,
  clearListedPlugin,
  removePlugin,
  backupPlugin,
  restorePlugin,
  publishPlugin,
};
