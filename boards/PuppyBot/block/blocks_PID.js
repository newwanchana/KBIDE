
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
Blockly.Blocks['PuppyBot_PID_setPin'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("1.Front_setPin:")
      .appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"],["8", "8"]]), "numSensor");
    this.appendDummyInput()
      .appendField("S0_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "11"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"],["A10", "10"]]), "S0_Pin");
    this.appendDummyInput()
      .appendField("S1_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "11"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"],["A10", "10"]]), "S1_Pin");
    this.appendDummyInput()
      .appendField("S2_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "11"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"],["A10", "10"]]), "S2_Pin");
    this.appendDummyInput()
      .appendField("S3_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "11"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"],["A10", "10"]]), "S3_Pin");
    this.appendDummyInput()
      .appendField("S4_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "11"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"],["A10", "10"]]), "S4_Pin");
    this.appendDummyInput()
      .appendField("S5_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "11"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"],["A10", "10"]]), "S5_Pin");
    this.appendDummyInput()
      .appendField("S6_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "11"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"],["A10", "10"]]), "S6_Pin");
    this.appendDummyInput()
      .appendField("S7_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "11"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"],["A10", "10"]]), "S7_Pin");
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Set pin PID");
  }
};
Blockly.Blocks['PuppyBot_PID_setline_color_front'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("2.Front Set line color:")
      .appendField(new Blockly.FieldDropdown([["Black", "0"],["White", "1"]]), "line_color");

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
        .appendField("Front_PID_readLine");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(330);
 this.setTooltip("PID_readLine");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['PID_readSumSensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Front_PID_readSumSensor");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(330);
 this.setTooltip("PID_readSumSensor");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['PuppyBot_PID_setMin'] = {
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
Blockly.Blocks['PuppyBot_PID_setMax'] = {
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
Blockly.Blocks['PuppyBot_Run_PID'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldDropdown([["2WD", "0"],["4WD", "1"]]), "Driver");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("4.Front_Run_PD_Speed:");
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

Blockly.Blocks['PuppyBot_Run_PID_until_frontSensor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldDropdown([["2WD", "0"],["4WD", "1"]]), "Driver");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("4.Front_Run_PD_Speed:");
    this.appendValueInput("KP")
      .setCheck("Number")
      .appendField("KP:");
    this.appendValueInput("KD")
      .setCheck("Number")
      .appendField("KD:");
    this.appendValueInput("sumSensor")
      .setCheck("Number")
      .appendField("Check sumSensor:");
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
      .appendField(new Blockly.FieldDropdown([["S0", "0"],["S1", "1"],["S2", "2"],["S3", "3"],["S4", "4"],["S5", "5"],["S6", "6"],["S7", "7"],["S8", "8"],["S9", "9"]]), "Sensor_Pin");
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
Blockly.Blocks['Read_Ref_Front_Sensor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Ref Front sensor:")
      .appendField(new Blockly.FieldDropdown([["S0", "0"],["S1", "1"],["S2", "2"],["S3", "3"],["S4", "4"],["S5", "5"],["S6", "6"],["S7", "7"],["S8", "8"],["S9", "9"]]), "Sensor_Pin");

    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(330);
    this.setTooltip("");
  }
};



Blockly.Blocks['Run_following_of_line_B'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed for line following");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip("");
  }
};
Blockly.Blocks['PuppyBot_PID_setPin_B'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("1.Back_setPin:")
      .appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"],["8", "8"]]), "numSensor");
    this.appendDummyInput()
      .appendField("SB0_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "11"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"],["A10", "10"]]), "S0_Pin");
    this.appendDummyInput()
      .appendField("SB1_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "11"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"],["A10", "10"]]), "S1_Pin");
    this.appendDummyInput()
      .appendField("SB2_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "11"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"],["A10", "10"]]), "S2_Pin");
    this.appendDummyInput()
      .appendField("SB3_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "11"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"],["A10", "10"]]), "S3_Pin");
    this.appendDummyInput()
      .appendField("SB4_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "11"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"],["A10", "10"]]), "S4_Pin");
    this.appendDummyInput()
      .appendField("SB5_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "11"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"],["A10", "10"]]), "S5_Pin");
    this.appendDummyInput()
      .appendField("SB6_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "11"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"],["A10", "10"]]), "S6_Pin");
    this.appendDummyInput()
      .appendField("SB7_Pin")
      .appendField(new Blockly.FieldDropdown([["-", "11"],["A0", "0"],["A1", "1"],["A2", "2"],["A3", "3"],["A4", "4"],["A5", "5"],["A6", "6"],["A7", "7"],["A8", "8"],["A9", "9"],["A10", "10"]]), "S7_Pin");
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip("Set pin PID");
  }
};
Blockly.Blocks['PuppyBot_PID_setline_color_Black'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("2.Black Set line color:")
      .appendField(new Blockly.FieldDropdown([["Black", "0"],["White", "1"]]), "line_color");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip("Set line color");
  }
};
// Blockly.Blocks['PID_readLine_B'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("Back_PID_readLine");
//     this.setInputsInline(true);
//     this.setOutput(true, "Number");
//     this.setColour(280);
//  this.setTooltip("PID_readLine");
//  this.setHelpUrl("");
//   }
// };

Blockly.Blocks['PID_readLine_B'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Back_PID_readLine");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(280);
 this.setTooltip("PID_readLine");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['PuppyBot_PID_setMin_B'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("3.Back_setMin");
    this.appendValueInput("S0")
      .setCheck("Number")
      .appendField("SB0");
    this.appendValueInput("S1")
      .setCheck("Number")
      .appendField("SB1");
    this.appendValueInput("S2")
      .setCheck("Number")
      .appendField("SB2");
    this.appendValueInput("S3")
      .setCheck("Number")
      .appendField("SB3");
    this.appendValueInput("S4")
      .setCheck("Number")
      .appendField("SB4");
    this.appendValueInput("S5")
      .setCheck("Number")
      .appendField("SB5");
    this.appendValueInput("S6")
      .setCheck("Number")
      .appendField("SB6");
    this.appendValueInput("S7")
      .setCheck("Number")
      .appendField("SB7");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip("Set pin PID");
  }
};
Blockly.Blocks['PuppyBot_PID_setMax_B'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("3.Back_setMax");
    this.appendValueInput("S0")
      .setCheck("Number")
      .appendField("SB0");
    this.appendValueInput("S1")
      .setCheck("Number")
      .appendField("SB1");
    this.appendValueInput("S2")
      .setCheck("Number")
      .appendField("SB2");
    this.appendValueInput("S3")
      .setCheck("Number")
      .appendField("SB3");
    this.appendValueInput("S4")
      .setCheck("Number")
      .appendField("SB4");
    this.appendValueInput("S5")
      .setCheck("Number")
      .appendField("SB5");
    this.appendValueInput("S6")
      .setCheck("Number")
      .appendField("SB6");
    this.appendValueInput("S7")
      .setCheck("Number")
      .appendField("SB7");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip("Set pin PID");
  }
};
Blockly.Blocks['PuppyBot_Run_PID_B'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldDropdown([["2WD", "0"],["4WD", "1"]]), "Driver");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("4.Back_Run_PD_Speed:");
    this.appendValueInput("KP")
      .setCheck("Number")
      .appendField("KP:");
    this.appendValueInput("KD")
      .setCheck("Number")
      .appendField("KD:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip("Rotate ro spin right a robot.");
  }
};
Blockly.Blocks['PuppyBot_Run_PID_B_until_backSensor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldDropdown([["2WD", "0"],["4WD", "1"]]), "Driver");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("4.Back_Run_PD_Speed:");
    this.appendValueInput("KP")
      .setCheck("Number")
      .appendField("KP:");
    this.appendValueInput("KD")
      .setCheck("Number")
      .appendField("KD:");
    this.appendValueInput("sumSensor")
      .setCheck("Number")
      .appendField("Check sumSensor:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip("Rotate ro spin right a robot.");
  }
};
Blockly.Blocks['set_calibrate_Back_sensor'] = {
  init: function() {
    this.appendValueInput("Round")
      .setCheck("Number")
      .appendField("3.Calibrate Back Sensor");
    this.appendDummyInput()
      .appendField("round");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip("");
  }
};
Blockly.Blocks['set_Sensitive_Back_sensor'] = {
  init: function() {
    this.appendValueInput("Sensitive")
      .setCheck("Number")
      .appendField("set Sensitive Back sensor");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip("");
  }
};

Blockly.Blocks['Read_Status_Back_Sensor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldDropdown([["SB0", "0"],["SB1", "1"],["SB2", "2"],["SB3", "3"],["SB4", "4"],["SB5", "5"],["SB6", "6"],["SB7", "7"],["SB8", "8"],["SB9", "9"]]), "Sensor_Pin");
    this.appendDummyInput()
      .appendField("is detect:")
      .appendField(new Blockly.FieldDropdown([["Black", "0"],["White", "1"]]), "line_color");
    
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(280);
    this.setTooltip("");
  }
};
Blockly.Blocks['Read_Ref_Back_Sensor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Ref Back sensor:")
      .appendField(new Blockly.FieldDropdown([["SB0", "0"],["SB1", "1"],["SB2", "2"],["SB3", "3"],["SB4", "4"],["SB5", "5"],["SB6", "6"],["SB7", "7"],["SB8", "8"],["SB9", "9"]]), "Sensor_Pin");

    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(280);
    this.setTooltip("");
  }
};
Blockly.Blocks['PID_readSumSensor_B'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Back_PID_readSumSensor");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(280);
 this.setTooltip("PID_readSumSensor");
 this.setHelpUrl("");
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

Blockly.Blocks["basic_forever_timeout"] = {
  init: function() {
    // this.appendDummyInput()
    //   .appendField('Forever');
    this.appendValueInput("timer")
      .appendField("Forever timeout:");
    this.appendDummyInput()
        .appendField("ms  do");
      
    // this.appendDummyInput()
    //   .appendField("do");
    this.appendStatementInput('HANDLER');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#1DC020');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Blockly.Blocks[''] = {
//   init: function() {
//     this.appendValueInput("Text")
//       .appendField("Comment:");
//     this.setInputsInline(false);
//     this.setPreviousStatement(false, null);
//     this.setNextStatement(false, null);
//     this.setColour(180);
//     this.setTooltip("");
//   }
// };


}
