module.exports = function(Blockly){
  'use strict';

Blockly.Blocks['button_1_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/sw12x12.png", 20, 20, "*"))
        .appendField("Switch 25 is pressed");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(90);
 this.setTooltip("get button A pressed or not");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['Relay_module'] = {
  init: function() {
    this.appendValueInput("pin")
        .appendField("Relay_module pin:");
    this.appendValueInput("status")
        .appendField("  Status:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("Relay_module");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['LED_module'] = {
  init: function() {
    this.appendValueInput("pin")
        .appendField("LED_module pin:");
    this.appendValueInput("status")
        .appendField("  Status:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("Relay_module");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['soil_Read_analog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read Soil (Analog)")
        .appendField(" pin:")
        .appendField(new Blockly.FieldDropdown([["39", "39"],["36", "36"],["35", "35"],["34", "34"],
                                              ["32", "32"],
                                              ["33", "33"],
                                              ["27", "27"],
                                              ["26", "26"],
                                              ["25", "25"],
                                              ["23", "23"],
                                              ["22", "22"],
                                              ["21", "21"],
                                              ["19", "19"],
                                              ["18", "18"],
                                              ["17", "17"],
                                              ["16", "16"],
                                              ["15", "15"],
                                              ["14", "14"],
                                              ["13", "13"],
                                              ["12", "12"],
                                              ["5", "5"],
                                              ["4", "4"],
                                              ["2", "2"],
                                              ["0", "0"]]), "pin");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(165);
 this.setTooltip("read temperature in Celsius");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['LDR_Read_analog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Light LDR (Analog)")
        .appendField(" pin:")
        .appendField(new Blockly.FieldDropdown([["39", "39"],["36", "36"],["35", "35"],["34", "34"],
                                              ["32", "32"],
                                              ["33", "33"],
                                              ["27", "27"],
                                              ["26", "26"],
                                              ["25", "25"],
                                              ["23", "23"],
                                              ["22", "22"],
                                              ["21", "21"],
                                              ["19", "19"],
                                              ["18", "18"],
                                              ["17", "17"],
                                              ["16", "16"],
                                              ["15", "15"],
                                              ["14", "14"],
                                              ["13", "13"],
                                              ["12", "12"],
                                              ["5", "5"],
                                              ["4", "4"],
                                              ["2", "2"],
                                              ["0", "0"]]), "pin");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(165);
 this.setTooltip("read temperature in Celsius");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['DHT_ESP32_Setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("DhtSensor1",null,["Plugin.DHTesp"],["Plugin.DHTesp"]), "instance")
        .appendField("Setup")
        .appendField(new Blockly.FieldDropdown([["DHT11","DHT11"], ["DHT22","DHT22"], ["AM2302","AM2302"], ["RHT03","RHT03"]]), "dht_type")
        .appendField("pin")
        .appendField(new Blockly.FieldDropdown([
                                              ["32", "32"],
                                              ["33", "33"],
                                              ["27", "27"],
                                              ["26", "26"],
                                              ["25", "25"],
                                              ["23", "23"],
                                              ["22", "22"],
                                              ["21", "21"],
                                              ["19", "19"],
                                              ["18", "18"],
                                              ["17", "17"],
                                              ["16", "16"],
                                              ["15", "15"],
                                              ["14", "14"],
                                              ["13", "13"],
                                              ["12", "12"],
                                              ["5", "5"],
                                              ["4", "4"],
                                              ["2", "2"],
                                              ["0", "0"]]), "pin");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("setup sensor DHT ");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['DHT_ESP32_readTemp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("DhtSensor1",null,["Plugin.DHTesp"],["Plugin.DHTesp"]), "instance")
        .appendField("read temperature °C");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(165);
 this.setTooltip("read temperature in Celsius");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['DHT_ESP32_readHumid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("DhtSensor1",null,["Plugin.DHTesp"],["Plugin.DHTesp"]), "instance")
        .appendField("read humidity %");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(165);
 this.setTooltip("read humidity in percentage");
 this.setHelpUrl("");
  }
};





Blockly.Blocks['BH1750FVI_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Setup BH1750FVI I2C0")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Setup BH1750FVI I2C0");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['BH1750FVI_GetLightIntensity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("BH1750FVI_GetLightIntensity")
    this.setOutput(true, "Number");
    this.setColour(135);
 this.setTooltip("BH1750FVI_GetLightIntensity");
 this.setHelpUrl("");
  }
};





Blockly.Blocks['ds18b20_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DS18B20 Init pin")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "pin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("init DS18B20");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['ds18b20_get_temperature'] = {
  init: function() {
    this.appendValueInput("device")
        .setCheck("Number")
        .appendField("DS18B20 get temperature (C) of device");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(30);
 this.setTooltip("get temperature of device index N");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ds18b20_get_temperature_f'] = {
  init: function() {
    this.appendValueInput("device")
        .setCheck("Number")
        .appendField("DS18B20 get temperature (F) of device");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(30);
 this.setTooltip("get temperature of device index N");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['SHT31_Setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("SHT31Sensor1",null,["Plugin.SHT31esp"],["Plugin.SHT31esp"]), "instance")
        .appendField("Setup SHT31 Temp/Hum Sensor");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3f93e8");
 this.setTooltip("setup sensor SHT31 ");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['SHT31_readTemp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("SHT31Sensor1",null,["Plugin.SHT31esp"],["Plugin.SHT31esp"]), "instance")
        .appendField("read temperature °C");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour("#3f93e8");
 this.setTooltip("read temperature in Celsius");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['SHT31_readHumid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("SHT31Sensor1",null,["Plugin.SHT31esp"],["Plugin.SHT31esp"]), "instance")
        .appendField("read humidity %");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour("#3f93e8");
 this.setTooltip("read humidity in percentage");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['Blynk_V2'] = {
  init: function() {
    this.appendValueInput("Text")
      .appendField("Link:Blynk V2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['HandySense'] = {
  init: function() {
    this.appendValueInput("Text")
      .appendField("Link:HandySense");
    this.setInputsInline(false);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(180);
    this.setTooltip("");
  }
};




}