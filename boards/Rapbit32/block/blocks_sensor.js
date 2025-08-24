const dirIcon = Vue.prototype.$global.board.board_info.dir;
module.exports = function(Blockly){
  'use strict';

Blockly.Blocks['sw1_press'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SW1_press");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("Buzzer beep");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['button_1_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/sw12x12.png", 20, 20, "*"))
        .appendField("SW1 is pressed");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("get SW1 pressed or not");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['Knob_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("read Knob_status");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("read Knob_status");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['Ultrasinoc_sensor'] = {
  init: function() {
    this.appendDummyInput()
        //.appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("Read Distance");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("Read Distance");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['Light_Sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Light sensor:")
        .appendField(new Blockly.FieldDropdown([["1","39"],["2","35"], ["3","33"]]), "pin");
    this.setOutput(true, "Number");
    this.setColour(90);
    this.setTooltip("read pos EncoderA Pin 26");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['LDR_Sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LDR sensor:")
        .appendField(new Blockly.FieldDropdown([["1","34"],["2","32"]]), "pin");
    this.setOutput(true, "Number");
    this.setColour(90);
    this.setTooltip("read pos EncoderA Pin 26");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['LED_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LED :")
        .appendField(new Blockly.FieldDropdown([["1","25"],["2","19"]]), "pin");
    this.appendDummyInput()
        .appendField("Status:")
        .appendField(new Blockly.FieldDropdown([["ON","1"],["OFF","0"]]), "status");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
  }
};
Blockly.Blocks['Irremote_sensor'] = {
  init: function() {
    this.appendDummyInput()
        //.appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("Read Remote");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("Read Distance");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['Rapbit32_beep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer beep");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Buzzer beep");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['Rapbit32_beep_delay'] = {
  init: function() {
    this.appendValueInput("_delay")
      .setCheck("Number")
      .appendField("Buzzer is on for");
    this.appendDummyInput()
      .appendField("ms");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("");
  }
};
Blockly.Blocks['Rapbit32_beep_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer on");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Buzzer beep");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['Rapbit32_beep_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer off");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Buzzer beep");
 this.setHelpUrl("");
  }
};
Blockly.Blocks["Rapbit32_setBrightness"] = {
  init: function () {
    this.appendValueInput("Brightness")
      .setCheck("Number")
      .appendField("Neopixel Set Brightness");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['Rapbit32set_color_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Neopixel Set Color")
        .appendField(new Blockly.FieldDropdown([["ALL","0"],["1","1"],["2","2"],["3","3"],["4","4"]]), "led_id");
    this.appendValueInput("led_r").setCheck("Number").appendField("RED:");
    this.appendValueInput("led_g").setCheck("Number").appendField("GREEN:");
    this.appendValueInput("led_b").setCheck("Number").appendField("BLUE:");
    // this.appendDummyInput()
    //     .appendField("RED:")
    //     .appendField(new Blockly.FieldNumber(255, 0, 255), "led_r");
    // this.appendDummyInput()
    //     .appendField("GREEN:")
    //     .appendField(new Blockly.FieldNumber(255, 0, 255), "led_g");
    // this.appendDummyInput()
    //     .appendField("BLUE:")
    //     .appendField(new Blockly.FieldNumber(255, 0, 255), "led_b");
        
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['Rapbit32set_color_led2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Neopixel Set Color")
        .appendField(new Blockly.FieldDropdown([["ALL","0"],["1","1"],["2","2"],["3","3"],["4","4"]]), "led_id");
    this.appendDummyInput()
        .appendField("Color:")
        .appendField(new Blockly.FieldColour("#FF0000"), "color");
        
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['Rapbit32_rainbow'] = {
  init: function() {
     this.appendValueInput("_delay")
      .setCheck("Number")
      .appendField("Neopixel Rainbow");
    this.appendDummyInput()
        .appendField("ms");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("LED_rainbow");
 this.setHelpUrl("");
  }
};

}