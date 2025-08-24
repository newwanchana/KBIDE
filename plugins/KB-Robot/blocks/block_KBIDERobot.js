Blockly.Blocks['KBIDERobot_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Robot_setup");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
  }
};

Blockly.Blocks['adc_AnalogRead'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("AnalogRead pin")
        .appendField(new Blockly.FieldDropdown([["0","0"],["1","1"], ["2","2"], ["3","3"]]), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("read adc 16 bit");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['KBRobot_motor_stop_ch'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Motor Stop ch:")
        .appendField(new Blockly.FieldDropdown([["All","3"],["MotorA","1"], ["MotorB","2"]]), "ch");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
      this.setTooltip("");
    }
};
Blockly.Blocks['KBRobot_servo'] = {
  init: function() {
    this.appendValueInput("angle")
      .setCheck("Number")
      .appendField("Servo at");
    this.appendDummyInput()
      .appendField("degree");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KBRobot_motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop Moving");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
  }
};
Blockly.Blocks['KBRobot_motor_action'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Move")
        .appendField(new Blockly.FieldDropdown([["Forward","3"],["Backward","4"], ["Spin Left","5"], ["Spin Right","6"], ["Turn Left","7"], ["Turn Right","8"], ["MotorA","1"], ["MotorB","2"]]), "action");
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
      this.setTooltip("");
    }
};
Blockly.Blocks['KBRobot_motor_forward'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Move Forward at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KBRobot_motor_forward2'] = {
  init: function() {
  	this.appendDummyInput()
      .appendField("Move Forward ");
    this.appendValueInput("speed1")
      .setCheck("Number")
      .appendField("MotorA speed ");
    this.appendValueInput("speed2")
      .setCheck("Number")
      .appendField("MotorB speed ");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KBRobot_motor_backward'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Move Backward at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KBRobot_motor_backward2'] = {
  init: function() {
  	this.appendDummyInput()
      .appendField("Move Backward ");
    this.appendValueInput("speed1")
      .setCheck("Number")
      .appendField("MotorA speed ");
    this.appendValueInput("speed2")
      .setCheck("Number")
      .appendField("MotorB speed ");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
// Blockly.Blocks['KBRobot_motor_forward2'] = {
//   init: function() {
//     this.appendValueInput("speed1")
//       .setCheck("Number")
//       .appendField("Move Forward left wheel at speed");
//     this.appendDummyInput()
//       .appendField("%");
//       this.appendValueInput("speed2")
//       .setCheck("Number")
//       .appendField("and right wheel at speed");
//     this.appendDummyInput()
//       .appendField("%");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(180);
//     this.setTooltip("");
//   }
// };
// Blockly.Blocks['KBRobot_motor_backward2'] = {
//   init: function() {
//     this.appendValueInput("speed1")
//       .setCheck("Number")
//       .appendField("Move Backward left wheel at speed");
//     this.appendDummyInput()
//       .appendField("%");
//       this.appendValueInput("speed2")
//       .setCheck("Number")
//       .appendField("and right wheel at speed");
//     this.appendDummyInput()
//       .appendField("%");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(180);
//     this.setTooltip("");
//   }
// };
Blockly.Blocks['KBRobot_motor_turn_left'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Turn Left at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KBRobot_motor_turn_right'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Turn Right at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KBRobot_motor_spin_left'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Spin Left at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KBRobot_motor_spin_right'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Spin Right at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};