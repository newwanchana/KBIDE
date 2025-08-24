
//Block from IKB1 

module.exports = function(Blockly){
  'use strict';

Blockly.Blocks['RapbitPro_motor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("set motor")
      .appendField(new Blockly.FieldDropdown([["Left","1"], ["Right","2"]]), "ch")
      .appendField("direction")
      .appendField(new Blockly.FieldDropdown([["Forward","1"], ["Backward", "2"]]), "dir");
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

Blockly.Blocks['RapbitPro_servo'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("set servo")
      .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"]]), "ch");
    this.appendValueInput("angle")
      .setCheck("Number")
      .appendField("degree");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['RapbitPro_servo_speed_control'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("set servo")
      .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"]]), "ch");
    this.appendValueInput("servo_degree")
      .setCheck("Number")
      .appendField("Degree:");
    this.appendValueInput("traget_degree")
      .setCheck("Number")
      .appendField("To");
    this.appendDummyInput()
      .appendField("speed:")
      .appendField(new Blockly.FieldDropdown([["1","10"],
                                              ["2","9"],
                                              ["3","8"],
                                              ["4","7"],
                                              ["5","6"],
                                              ["6","5"],
                                              ["7","4"],
                                              ["8","3"],
                                              ["9","2"],
                                              ["10","1"]]), "speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};

Blockly.Blocks['RapbitPro_servo2'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("set servo")
      .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"]]), "ch")
      .appendField("direction")
      .appendField(new Blockly.FieldDropdown([["Forward","1"], ["Backward", "2"]]), "dir");
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
Blockly.Blocks['RapbitPro_motor_forward'] = {
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
Blockly.Blocks['RapbitPro_motor_backward'] = {
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
Blockly.Blocks['RapbitPro_motor_forward2'] = {
  init: function() {
    this.appendValueInput("speed1")
      .setCheck("Number")
      .appendField("Move Forward left wheel at speed");
    this.appendDummyInput()
      .appendField("%");
      this.appendValueInput("speed2")
      .setCheck("Number")
      .appendField("and right wheel at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['RapbitPro_motor_backward2'] = {
  init: function() {
    this.appendValueInput("speed1")
      .setCheck("Number")
      .appendField("Move Backward left wheel at speed");
    this.appendDummyInput()
      .appendField("%");
      this.appendValueInput("speed2")
      .setCheck("Number")
      .appendField("and right wheel at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['RapbitPro_motor_turn'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Motor Turn :")
      .appendField(new Blockly.FieldDropdown([["Left","1"], ["Right","2"]]), "direction");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed");
    this.appendDummyInput()
      .appendField("%");
    this.appendValueInput("timer")
      .setCheck("Number")
      .appendField("timer:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['RapbitPro_motor_spin'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Motor Spin :")
      .appendField(new Blockly.FieldDropdown([["Left","1"], ["Right","2"]]), "direction");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed");
    this.appendDummyInput()
      .appendField("%");
    this.appendValueInput("timer")
      .setCheck("Number")
      .appendField("timer:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['RapbitPro_motor_turn_left'] = {
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
Blockly.Blocks['RapbitPro_motor_turn_right'] = {
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
Blockly.Blocks['RapbitPro_motor_spin_left'] = {
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
Blockly.Blocks['RapbitPro_motor_spin_right'] = {
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
Blockly.Blocks['RapbitPro_motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop Moving");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['RapbitPro_motor_stop_ch'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Stop Moving Ch")
      .appendField(new Blockly.FieldDropdown([["ALL","0"],["1","1"], ["2","2"]]), "ch")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};

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
Blockly.Blocks['Readline_PID'] = {
  init: function() {
    this.appendDummyInput()
        //.appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("Read_Line");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(65);
 this.setTooltip("Read_Line");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['RapbitPro_Run_PID'] = {
  init: function() {
    this.appendValueInput("speed_motor")
      .setCheck("Number")
      .appendField("PID Motor at speed");
    this.appendDummyInput()
      .appendField("%");
    this.appendValueInput("kp")
      .setCheck("Number")
      .appendField("KP:");
    this.appendValueInput("kd")
      .setCheck("Number")
      .appendField("KD:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
  }
};

Blockly.Blocks['Run_until_frontsensor'] = {
  init: function() {
    this.appendValueInput("speed_motor")
      .setCheck("Number")
      .appendField("Run_until_frontsensor at speed");
    this.appendDummyInput()
      .appendField("%");
    this.appendValueInput("kp")
      .setCheck("Number")
      .appendField("KP:");
    this.appendValueInput("kd")
      .setCheck("Number")
      .appendField("KD:");
    this.appendValueInput("Sumvalue")
      .setCheck("Number")
      .appendField("Sumvalue:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
  }
};
Blockly.Blocks['Run_until_backsensor'] = {
  init: function() {
    this.appendValueInput("speed_motor")
      .setCheck("Number")
      .appendField("Run_until_backsensor at speed");
    this.appendDummyInput()
      .appendField("%");
    this.appendValueInput("kp")
      .setCheck("Number")
      .appendField("KP:");
    this.appendValueInput("kd")
      .setCheck("Number")
      .appendField("KD:");
    this.appendValueInput("Sumvalue")
      .setCheck("Number")
      .appendField("Sumvalue:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
  }
};
Blockly.Blocks['setCalibrate'] = {
  init: function() {
    this.appendValueInput("Round")
      .setCheck("Number")
      .appendField("setCalibrate Light 1-7 = ");
    this.appendDummyInput()
      .appendField("Round");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
  }
};
Blockly.Blocks['spin_left90'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("spin_left 90' with light sensor 1 at speed");
    this.appendDummyInput()
      .appendField("%");
     this.appendValueInput("timer")
      .setCheck("Number")
      .appendField("or delay:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
  }
};
Blockly.Blocks['spin_right90'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("spin_right 90' with light sensor 5 at speed");
    this.appendDummyInput()
      .appendField("%");
     this.appendValueInput("timer")
      .setCheck("Number")
      .appendField("or delay:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
  }
};

Blockly.Blocks['RapbitPro_PID_setMin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("setMin value of Light");
    this.appendValueInput("L1")
      .setCheck("Number")
      .appendField("L1");
    this.appendValueInput("L2")
      .setCheck("Number")
      .appendField("L2");
    this.appendValueInput("L3")
      .setCheck("Number")
      .appendField("L3");
    this.appendValueInput("L4")
      .setCheck("Number")
      .appendField("L4");
    this.appendValueInput("L5")
      .setCheck("Number")
      .appendField("L5");
    this.appendValueInput("L6")
      .setCheck("Number")
      .appendField("L6");
    this.appendValueInput("L7")
      .setCheck("Number")
      .appendField("L7");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Set min value for sensor");
  }
};
Blockly.Blocks['RapbitPro_PID_setMax'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("setMax value of Light");
   this.appendValueInput("L1")
      .setCheck("Number")
      .appendField("L1");
    this.appendValueInput("L2")
      .setCheck("Number")
      .appendField("L2");
    this.appendValueInput("L3")
      .setCheck("Number")
      .appendField("L3");
    this.appendValueInput("L4")
      .setCheck("Number")
      .appendField("L4");
    this.appendValueInput("L5")
      .setCheck("Number")
      .appendField("L5");
    this.appendValueInput("L6")
      .setCheck("Number")
      .appendField("L6");
    this.appendValueInput("L7")
      .setCheck("Number")
      .appendField("L7");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Set max value for sensor");
  }
};

}