Blockly.JavaScript['EEPROM_Begin'] = function (block) {
  var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += '#EXTINC#include <EEPROM.h>#END\n';
	code += '\n';
	code += 'EEPROM.begin('+value_size+');\n';
    return code;
};
Blockly.JavaScript['EEPROM_commit'] = function(block) {
  var code = 'EEPROM.commit();\n';
  return code;
};
Blockly.JavaScript['EEPROM_write'] = function(block) {
  var value_address = Blockly.JavaScript.valueToCode(block, 'address', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'EEPROM.write(' + value_address + ', ' + value_value +');\n';
  code += 'EEPROM.commit();\n';
  return code;
};
Blockly.JavaScript['EEPROM_writeString'] = function(block) {
  var value_address = Blockly.JavaScript.valueToCode(block, 'address', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'EEPROM.writeString(' + value_address + ', ' + value_value +');\n';
  code += 'EEPROM.commit();\n';
  return code;
};
Blockly.JavaScript['EEPROM_writeLong'] = function(block) {
  var value_address = Blockly.JavaScript.valueToCode(block, 'address', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'EEPROM.writeLong(' + value_address + ', ' + value_value +');\n';
  code += 'EEPROM.commit();\n';
  return code;
};
Blockly.JavaScript['EEPROM_writeFloat'] = function(block) {
  var value_address = Blockly.JavaScript.valueToCode(block, 'address', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'EEPROM.writeFloat(' + value_address + ', ' + value_value +');\n';
  code += 'EEPROM.commit();\n';
  return code;
};
Blockly.JavaScript['EEPROM_read'] = function(block) {
  var value_address = Blockly.JavaScript.valueToCode(block, 'address', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `EEPROM.read(${value_address})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['EEPROM_readString'] = function(block) {
  var value_address = Blockly.JavaScript.valueToCode(block, 'address', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `EEPROM.readString(${value_address})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['EEPROM_readLong'] = function(block) {
  var value_address = Blockly.JavaScript.valueToCode(block, 'address', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `EEPROM.readLong(${value_address})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['EEPROM_readFloat'] = function(block) {
  var value_address = Blockly.JavaScript.valueToCode(block, 'address', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `EEPROM.readFloat(${value_address})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
