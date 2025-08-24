Blockly.Blocks['mpu6050_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU6050 begin");
        //.appendField(new Blockly.FieldDropdown([["0x68","0x68"], ["0x69","0x69"]]), "addr");
    this.appendValueInput("pin_sda")
        .setCheck("Number")
        .appendField("SDA");
    this.appendValueInput("pin_scl")
        .setCheck("Number")
        .appendField("SCL");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("begin mpu6050");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mpu6050_get_acc_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU6050 get acceleration X");
    this.setOutput(true, ["float", "Number"]);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mpu6050_get_acc_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU6050 get acceleration Y");
    this.setOutput(true, ["float", "Number"]);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mpu6050_get_acc_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU6050 get acceleration Z");
    this.setOutput(true, ["float", "Number"]);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mpu6050_get_gyro_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU6050 get gyro X");
    this.setOutput(true, ["float", "Number"]);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mpu6050_get_gyro_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU6050 get gyro Y");
    this.setOutput(true, ["float", "Number"]);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mpu6050_get_gyro_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU6050 get gyro Z");
    this.setOutput(true, ["float", "Number"]);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mpu6050_get_angle_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU6050 get angle Z");
    this.setOutput(true, ["float", "Number"]);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mpu6050_get_angle_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU6050 get angle Y");
    this.setOutput(true, ["float", "Number"]);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mpu6050_get_angle_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU6050 get angle X");
    this.setOutput(true, ["float", "Number"]);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mpu6050_get_angle_gyro_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU6050 get angle gyro X");
    this.setOutput(true, ["float", "Number"]);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mpu6050_get_angle_gyro_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU6050 get angle gyro Y");
    this.setOutput(true, ["float", "Number"]);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mpu6050_get_angle_gyro_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU6050 get angle gyro Z");
    this.setOutput(true, ["float", "Number"]);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};