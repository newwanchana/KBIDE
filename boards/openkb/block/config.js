let gpio = require("./menu/config.group.gpio");
let display = require("./menu/config.group.display");
let music = require("./menu/config.group.music");
let sensor = require("./menu/config.group.sensor");
let time = require("./menu/config.group.time");

module.exports = {
  blocks: [
    gpio,
    display,
    music,
    sensor,
    time,
  ],
};