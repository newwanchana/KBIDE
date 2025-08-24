
//Block from IKB1 

module.exports = function(Blockly){
  'use strict';



Blockly.Blocks['Run_following_of_line'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed for line following");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
  }
};
Blockly.Blocks['LineSonic_PID_setPin'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("1.Front_setNumPin:")
      .appendField(new Blockly.FieldDropdown([["8", "8"],["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"],["8", "8"]]), "numSensor");
    this.appendDummyInput()
      .appendField(">>S0_Pin")
      .appendField(new Blockly.FieldDropdown([["0", "0"],["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"]]), "S0_Pin");
    this.appendDummyInput()
      .appendField("S1_Pin")
      .appendField(new Blockly.FieldDropdown([["1", "1"],["0", "0"],["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"]]), "S1_Pin");
    this.appendDummyInput()
      .appendField("S2_Pin")
      .appendField(new Blockly.FieldDropdown([["2", "2"],["0", "0"],["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"]]), "S2_Pin");
    this.appendDummyInput()
      .appendField("S3_Pin")
      .appendField(new Blockly.FieldDropdown([["3", "3"],["0", "0"],["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"]]), "S3_Pin");
    this.appendDummyInput()
      .appendField("S4_Pin")
      .appendField(new Blockly.FieldDropdown([["4", "4"],["0", "0"],["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"]]), "S4_Pin");
    this.appendDummyInput()
      .appendField("S5_Pin")
      .appendField(new Blockly.FieldDropdown([["5", "5"],["0", "0"],["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"]]), "S5_Pin");
    this.appendDummyInput()
      .appendField("S6_Pin")
      .appendField(new Blockly.FieldDropdown([["6", "6"],["0", "0"],["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"]]), "S6_Pin");
    this.appendDummyInput()
      .appendField("S7_Pin")
      .appendField(new Blockly.FieldDropdown([["7", "7"],["0", "0"],["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"]]), "S7_Pin");
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Set Num pin PID");
  }
};
Blockly.Blocks['LineSonic_setEmitterPin'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("2.setEmitterPin:")
      .appendField(new Blockly.FieldDropdown([["A0", "A0"],["A1", "A1"],["A2", "A2"],["A3", "A3"],["D2", "D2"],["D3", "D3"],["D4", "D4"],["D7", "D7"],["D8", "D8"],["D11", "D11"],["D13", "D13"],["D16", "D16"],["D17", "D17"],["D18", "D18"],["D19", "D19"]]), "EmiterPin");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Set Line color");
  }
};
Blockly.Blocks['PID_readLine'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldDropdown([["Black", "0"],["White", "1"]]), "line_color");
    this.appendDummyInput()
        .appendField("Front_PID_readLine");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(330);
 this.setTooltip("PID_readLine");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['LineSonic_PID_setMin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("3.Front_setMin");
    this.appendValueInput("S0")
      .setCheck("Number")
      .appendField("S0");
    this.appendValueInput("S1")
      .setCheck("Number")
      .appendField("S1");
    this.appendValueInput("S2")
      .setCheck("Number")
      .appendField("S2");
    this.appendValueInput("S3")
      .setCheck("Number")
      .appendField("S3");
    this.appendValueInput("S4")
      .setCheck("Number")
      .appendField("S4");
    this.appendValueInput("S5")
      .setCheck("Number")
      .appendField("S5");
    this.appendValueInput("S6")
      .setCheck("Number")
      .appendField("S6");
    this.appendValueInput("S7")
      .setCheck("Number")
      .appendField("S7");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Set pin PID");
  }
};
Blockly.Blocks['LineSonic_PID_setMax'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("3.Front_setMax");
    this.appendValueInput("S0")
      .setCheck("Number")
      .appendField("S0");
    this.appendValueInput("S1")
      .setCheck("Number")
      .appendField("S1");
    this.appendValueInput("S2")
      .setCheck("Number")
      .appendField("S2");
    this.appendValueInput("S3")
      .setCheck("Number")
      .appendField("S3");
    this.appendValueInput("S4")
      .setCheck("Number")
      .appendField("S4");
    this.appendValueInput("S5")
      .setCheck("Number")
      .appendField("S5");
    this.appendValueInput("S6")
      .setCheck("Number")
      .appendField("S6");
    this.appendValueInput("S7")
      .setCheck("Number")
      .appendField("S7");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Set pin PID");
  }
};
Blockly.Blocks['LineSonic_Run_PID'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldDropdown([["Black", "0"],["White", "1"]]), "line_color");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("4. Run_PD_Speed:");
    this.appendValueInput("KP")
      .setCheck("Number")
      .appendField("KP:");
    this.appendValueInput("KD")
      .setCheck("Number")
      .appendField("KD:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Rotate ro spin right a robot.");
  }
};
Blockly.Blocks['LineSonic_Run_PID_upSpeed'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldDropdown([["Black", "0"],["White", "1"]]), "line_color");
    this.appendValueInput("Start speed")
      .setCheck("Number")
      .appendField("(loop)4.1 PID Up speed:");
    this.appendValueInput("Normally speed")
      .setCheck("Number")
      .appendField("to:");
    this.appendValueInput("Time")
      .setCheck("Number")
      .appendField("with time:");
    this.appendValueInput("KP")
      .setCheck("Number")
      .appendField("KP:");
    this.appendValueInput("KD")
      .setCheck("Number")
      .appendField("KD:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Rotate ro spin right a robot.");
  }
};
Blockly.Blocks['LineSonic_Run_PID_withTime'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldDropdown([["Black", "0"],["White", "1"]]), "line_color");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("(loop)4.2 Run_PD_Speed:");
      this.appendValueInput("Time")
      .setCheck("Number")
      .appendField("Timer:");
    this.appendValueInput("KP")
      .setCheck("Number")
      .appendField("KP:");
    this.appendValueInput("KD")
      .setCheck("Number")
      .appendField("KD:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Rotate ro spin right a robot.");
  }
};
Blockly.Blocks['LineSonic_Run_PID_until_frontSensor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldDropdown([["Black", "0"],["White", "1"]]), "line_color");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("(loop)4.3 Run_PD_Speed:");
    this.appendValueInput("value")
      .setCheck("Number")
      .appendField("until raw value");
    this.appendValueInput("KP")
      .setCheck("Number")
      .appendField("KP:");
    this.appendValueInput("KD")
      .setCheck("Number")
      .appendField("KD:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Rotate ro spin right a robot.");
  }
};

Blockly.Blocks['LineSonic_Run_PID_until_readDigital'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldDropdown([["Black", "0"],["White", "1"]]), "line_color");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("(loop)4.3 Run_PD_Speed:");
    this.appendDummyInput()
      .appendField("until sensor at ")
      .appendField(new Blockly.FieldDropdown([["D11", "11"],["D8", "8"],["D7", "7"],["D4", "4"],["D3", "3"],["D2", "2"]]), "digital_port");
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldDropdown([["= 0", "0"],["= 1", "1"]]), "status_port");
    this.appendValueInput("KP")
      .setCheck("Number")
      .appendField("KP:");
    this.appendValueInput("KD")
      .setCheck("Number")
      .appendField("KD:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Rotate ro spin right a robot.");
  }
};


Blockly.Blocks['set_calibrate_Front_sensor'] = {
  init: function() {
    this.appendValueInput("Round")
      .setCheck("Number")
      .appendField("3.Calibrate Front Sensor");
    this.appendDummyInput()
      .appendField("round");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
  }
};
Blockly.Blocks['set_Sensitive_Front_sensor'] = {
  init: function() {
    this.appendValueInput("Sensitive")
      .setCheck("Number")
      .appendField("5.set Sensitive Front sensor");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
  }
};
Blockly.Blocks['Read_Status_Front_Sensor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldDropdown([["S0", "0"],["S1", "1"],["S2", "2"],["S3", "3"],["S4", "4"],["S5", "5"],["S6", "6"],["S7", "7"]]), "Sensor_Pin");
    this.appendDummyInput()
      .appendField("is detect:")
      .appendField(new Blockly.FieldDropdown([["Black", "0"],["White", "1"]]), "line_color");
    
    this.setInputsInline(true);
    //this.setOutput(true, "Number,boolen");
    this.setOutput(true);
    this.setColour(330);
    this.setTooltip("");
  }
};
Blockly.Blocks['Read_Raw_Value_Sensor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldDropdown([["Black", "0"],["White", "1"]]), "line_color");
    this.appendDummyInput()
      .appendField("Read Raw Value Sensor:")
      .appendField(new Blockly.FieldDropdown([["S0", "0"],["S1", "1"],["S2", "2"],["S3", "3"],["S4", "4"],["S5", "5"],["S6", "6"],["S7", "7"]]), "Sensor_Pin");

    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(330);
    this.setTooltip("");
  }
};


Blockly.Blocks['EditTextCode'] = {
  init: function() {
    this.appendValueInput("Text")
      .appendField("custom code:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['BlockComment'] = {
  init: function() {
    this.appendValueInput("Text")
      .appendField("Comment:");
    this.setInputsInline(false);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
}
