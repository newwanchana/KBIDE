Blockly.Blocks['pulsein_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("read Pulsein Pin:")
        .appendField(new Blockly.FieldNumber(3), "pin")
        .appendField("logic:")
        .appendField(new Blockly.FieldDropdown([["LOW","0"], ["HIGH","1"]]), "logic");
    this.setOutput(true, "Number");
    this.setColour(318);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['pulsein_read_timeout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("read Pulsein Pin:")
        .appendField(new Blockly.FieldNumber(3), "pin")
        .appendField("logic:")
        .appendField(new Blockly.FieldDropdown([["LOW","0"], ["HIGH","1"]]), "logic");
    this.appendValueInput("timeout")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("timeout:");
    this.appendDummyInput()
        .appendField("ms");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(318);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

