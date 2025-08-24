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
    this.setColour(65);
 this.setTooltip("get SW1 pressed or not");
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
    this.setColour(65);
 this.setTooltip("Read Distance");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['Light_Sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Light sensor(ADC):")
        .appendField(new Blockly.FieldDropdown([["0","0"],["1","1"], ["2","2"], ["3","3"],
        										["4","4"],["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","12"]]), "pin");
    this.setOutput(true);
    this.setColour(65);
    this.setTooltip("read pos EncoderA Pin 26");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['Irremote_sensor'] = {
  init: function() {
    this.appendDummyInput()
        //.appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("Read Remote");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(65);
 this.setTooltip("Read Distance");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['Puppy_beep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer beep");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("Buzzer beep");
 this.setHelpUrl("");
  }
};

}