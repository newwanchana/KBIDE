Blockly.Blocks['KB_Exten_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("setup_KB_Exten");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_Exten_Servo_motor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Set servo:")
      .appendField(new Blockly.FieldDropdown([["D10","0"], ["D11","1"], ["D12","2"], ["D13","3"]]), "port");
    this.appendValueInput("degree")
      .setCheck("Number")
      .appendField("at");
    this.appendDummyInput()
      .appendField("degree");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_Exten_motor'] = {
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
Blockly.Blocks['KB_Exten_motor_forward'] = {
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
Blockly.Blocks['KB_Exten_motor_backward'] = {
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
Blockly.Blocks['KB_Exten_motor_turn'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Motor Turn :")
      .appendField(new Blockly.FieldDropdown([["Left","1"], ["Right","2"]]), "direction");
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
Blockly.Blocks['KB_Exten_motor_spin'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Motor Spin :")
      .appendField(new Blockly.FieldDropdown([["Left","1"], ["Right","2"]]), "direction");
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
Blockly.Blocks['KB_Exten_motor_stop_ch'] = {
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
Blockly.Blocks['KB_Exten_analog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Analog Read ")
        .appendField(new Blockly.FieldDropdown([
                                            ["A0 (14)", "0"],
                                            ["A1 (15)", "1"],
                                            ["A2 (16)", "2"],
                                            ["A3 (17)", "3"],
                                            ["A6 (19)", "6"],
                                            ["A7 (20)", "7"]]), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(220);
 this.setTooltip("read analog value from pin");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['KB_Exten_digital_Read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Digital Read ")
        .appendField(new Blockly.FieldDropdown([
                                            ["A0 (14)", "14"],
                                            ["A1 (15)", "15"],
                                            ["A2 (16)", "16"],
                                            ["A3 (17)", "17"],
                                            ["D10", "10"],
                                            ["D11", "11"],
                                            ["D12", "12"],
                                            ["D13", "13"]]), "pin");
    this.appendDummyInput()
      .appendField("mode:")
      .appendField(new Blockly.FieldDropdown([["INPUT","0"],["INPUT_PULLUP","1"]]), "mode");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(220);
 this.setTooltip("read analog value from pin");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['KB_Exten_digital_Write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Digital Write ")
        .appendField(new Blockly.FieldDropdown([
                                            ["A0 (14)", "14"],
                                            ["A1 (15)", "15"],
                                            ["A2 (16)", "16"],
                                            ["A3 (17)", "17"],
                                            ["D10", "10"],
                                            ["D11", "11"],
                                            ["D12", "12"],
                                            ["D13", "13"]]), "pin");
    this.appendDummyInput()
      .appendField("status")
      .appendField(new Blockly.FieldDropdown([["ON","1"],["OFF","0"]]), "status");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_Exten_set_ultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Ultrasonic Echo:")
        .appendField(new Blockly.FieldDropdown([
                                            ["A0 (14)", "14"],
                                            ["A1 (15)", "15"],
                                            ["A2 (16)", "16"],
                                            ["A3 (17)", "17"]]), "pin_echo");
    this.appendDummyInput()
      .appendField("Trig:")
      .appendField(new Blockly.FieldDropdown([
                                            ["A0 (14)", "14"],
                                            ["A1 (15)", "15"],
                                            ["A2 (16)", "16"],
                                            ["A3 (17)", "17"]]), "pin_trig");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_Exten_read_ultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read ultrasonic")
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(220);
 this.setTooltip("read analog value from pin");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['KB_Exten_set_ds18b20'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set pin ds18b20")
        .appendField(new Blockly.FieldDropdown([
                                            ["A0 (14)", "14"],
                                            ["A1 (15)", "15"],
                                            ["A2 (16)", "16"],
                                            ["A3 (17)", "17"]]), "pin");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_Exten_read_ds18b20'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read Temp form Ds18b20")
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(220);
 this.setTooltip("read analog value from pin");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['KB_Exten_set_dht'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set pin dht")
        .appendField(new Blockly.FieldDropdown([
                                            ["A0 (14)", "14"],
                                            ["A1 (15)", "15"],
                                            ["A2 (16)", "16"],
                                            ["A3 (17)", "17"]]), "pin");
    this.appendDummyInput()
      	.appendField("Type:")
      	.appendField(new Blockly.FieldDropdown([
                                            ["DHT11", "0"],
                                            ["DHT12", "1"],
                                            ["DHT22", "2"],
                                            ["DHT21", "3"]]), "type");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_Exten_read_dht'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read  DHT")
        .appendField(new Blockly.FieldDropdown([
                                            ["Temp", "1"],
                                            ["Humidity", "0"]]), "type");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(220);
 this.setTooltip("read analog value from pin");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['KB_Exten_Servo_motor_Moving'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Set servo:")
      .appendField(new Blockly.FieldDropdown([["D10","0"], ["D11","1"], ["D12","2"], ["D13","3"]]), "port");
    this.appendValueInput("present_angle")
      .setCheck("Number")
      .appendField("from angle");
    this.appendValueInput("traget_angle")
      .setCheck("Number")
      .appendField("To");
    this.appendValueInput("speed_servo")
      .setCheck("Number")
      .appendField("speed:");
    this.appendDummyInput()
      .appendField("ms");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_Exten_Servo_run'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Set")
      .appendField(new Blockly.FieldDropdown([["D10","0"], ["D11","1"], ["D12","2"], ["D13","3"]]), "port");
    this.appendValueInput("traget_angle")
      .setCheck("Number")
      .appendField("Servo move by step to:");
    this.appendValueInput("speed_servo")
      .setCheck("Number")
      .appendField("speed:");
    this.appendValueInput("servo_dif")
      .setCheck("Number")
      .appendField("% dif:");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip("");
  }
};