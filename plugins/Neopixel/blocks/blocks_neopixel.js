Blockly.Blocks["neopixel_rgb_begin"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("NeoPixel1", null, ["Plugin.NeoPixel"], ["Plugin.NeoPixel"]), "instance")
      .appendField("begin");
    this.appendValueInput("PIN")
      .setCheck("Number")
      .appendField("Pin");
    this.appendValueInput("NUM")
      .setCheck("Number")
      .appendField("Number of Pixels");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["neopixel_rgb_clear"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("NeoPixel1", null, ["Plugin.NeoPixel"], ["Plugin.NeoPixel"]), "instance")
      .appendField("Clear");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Blockly.Blocks["neopixel_rgb_show"] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField(new Blockly.FieldVariable("NeoPixel1", null, ["Plugin.NeoPixel"], ["Plugin.NeoPixel"]), "instance")
//       .appendField("Show");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(65);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

Blockly.Blocks["neopixel_rgb_setBrightness"] = {
  init: function () {
    this.appendValueInput("BRIGHT")
      .appendField(new Blockly.FieldVariable("NeoPixel1", null, ["Plugin.NeoPixel"], ["Plugin.NeoPixel"]), "instance")
      .setCheck("Number")
      .appendField("setBrightness (0-255)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["neopixel_rgb_setPixelColor"] = {
  init: function () {
    this.appendValueInput("NUM")
      .appendField(new Blockly.FieldVariable("NeoPixel1", null, ["Plugin.NeoPixel"], ["Plugin.NeoPixel"]), "instance")
      .setCheck("Number")
      .appendField("set Pixel");
    this.appendDummyInput()
      .appendField("Color")
      .appendField(new Blockly.FieldColour("#FFFFFF"), "COLOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["neopixel_rgb_fillLED"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("NeoPixel1", null, ["Plugin.NeoPixel"], ["Plugin.NeoPixel"]), "instance")
      .appendField("fill all LED color")
      .appendField(new Blockly.FieldColour("#FFFFFF"), "COLOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["neopixel_rgb_colorWipe"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("NeoPixel1", null, ["Plugin.NeoPixel"], ["Plugin.NeoPixel"]), "instance")
      .appendField("colorWipe")
      .appendField(new Blockly.FieldColour("#FFFFFF"), "COLOR");
    this.appendValueInput("TIME")
      .setCheck("Number")
      .appendField("Time(ms)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["neopixel_rgb_theaterChase"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("NeoPixel1", null, ["Plugin.NeoPixel"], ["Plugin.NeoPixel"]), "instance")
      .appendField("theaterChase")
      .appendField(new Blockly.FieldColour("#FFFFFF"), "COLOR");
    this.appendValueInput("TIME")
      .setCheck("Number")
      .appendField("Time(ms)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["neopixel_rgb_rainbow_begin"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("NeoPixel1", null, ["Plugin.NeoPixel"], ["Plugin.NeoPixel"]), "instance")
      .appendField("rainbow Begin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["neopixel_rgb_rainbow"] = {
  init: function () {
    this.appendValueInput("TIME")
      .setCheck("Number")
      .appendField(new Blockly.FieldVariable("NeoPixel1", null, ["Plugin.NeoPixel"], ["Plugin.NeoPixel"]), "instance")
      .appendField("rainbow Time(ms)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["neopixel_rgb_rainbowCycle"] = {
  init: function () {
    this.appendValueInput("TIME")
      .setCheck("Number")
      .appendField(new Blockly.FieldVariable("NeoPixel1", null, ["Plugin.NeoPixel"], ["Plugin.NeoPixel"]), "instance")
      .appendField("rainbowCycle Time(ms)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};