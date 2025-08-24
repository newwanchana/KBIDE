Blockly.Blocks['mlblock_serial_ondata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MLBlock On")
        .appendField(new Blockly.FieldDropdown([["Serial","Serial"], ["Serial1","Serial1"], ["Serial2","Serial2"]]), "serial")
        .appendField("Received");
    this.appendStatementInput("on_data_func")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("This function active when MLBlock send data over serial port");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mlblock_serial_get_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MLBlock get")
         .appendField(new Blockly.FieldDropdown([["Class ID","classId"], ["label","label"], ["confidence","confidence"], ["x","x"], ["y","y"], ["width","width"], ["height","height"], ["id","id"]]), "field");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("get data from mlblock");
 this.setHelpUrl("");
  }
};
