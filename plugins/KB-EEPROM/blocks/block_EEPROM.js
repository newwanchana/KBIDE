Blockly.Blocks['EEPROM_commit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EEPROM commit");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#819deb");
    this.setTooltip("");
  }
};
Blockly.Blocks['EEPROM_Begin'] = {
  init: function() {
    this.appendValueInput("size")
      .setCheck("Number")
      .appendField("EEPROM begin size:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#819deb");
    this.setTooltip("");
  }
};
Blockly.Blocks['EEPROM_write'] = {
  init: function() {
    this.appendValueInput("address")
      .setCheck("Number")
      .appendField("EEPROM.write at address");
    this.appendValueInput("value")
      .setCheck("Number")
      .appendField(", value");
    this.appendDummyInput()
        .appendField("(0-255)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#819deb");
    this.setTooltip("");
  }
};
Blockly.Blocks['EEPROM_writeString'] = {
  init: function() {
    this.appendValueInput("address")
      .setCheck("Number")
      .appendField("EEPROM.write String at address");
    this.appendValueInput("value")
      .setCheck("String")
      .appendField(", value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#819deb");
    this.setTooltip("");
  }
};
Blockly.Blocks['EEPROM_writeLong'] = {
  init: function() {
    this.appendValueInput("address")
      .setCheck("Number")
      .appendField("EEPROM.write Long at address");
    this.appendValueInput("value")
      .setCheck("Number")
      .appendField(", value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#819deb");
    this.setTooltip("");
  }
};
Blockly.Blocks['EEPROM_writeFloat'] = {
  init: function() {
    this.appendValueInput("address")
      .setCheck("Number")
      .appendField("EEPROM.write Float at address");
    this.appendValueInput("value")
      .setCheck("Number")
      .appendField(", value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#819deb");
    this.setTooltip("");
  }
};
Blockly.Blocks['EEPROM_read'] = {
  init: function() {
    this.appendValueInput("address")
      .setCheck("Number")
      .appendField("EEPROM.read at address:");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#819deb");
 this.setTooltip("read value from EEPROM at address");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['EEPROM_readString'] = {
  init: function() {
    this.appendValueInput("address")
      .setCheck("Number")
      .appendField("EEPROM.read String at address:");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#819deb");
 this.setTooltip("read value from EEPROM at address");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['EEPROM_readLong'] = {
  init: function() {
    this.appendValueInput("address")
      .setCheck("Number")
      .appendField("EEPROM.read Long at address:");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#819deb");
 this.setTooltip("read value from EEPROM at address");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['EEPROM_readFloat'] = {
  init: function() {
    this.appendValueInput("address")
      .setCheck("Number")
      .appendField("EEPROM.read Float at address:");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#819deb");
 this.setTooltip("read value from EEPROM at address");
 this.setHelpUrl("");
  }
};
