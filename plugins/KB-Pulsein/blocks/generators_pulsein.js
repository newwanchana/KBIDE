Blockly.JavaScript['pulsein_read'] = function(block) {
  var number_pin = block.getFieldValue('pin');
  var number_logic = block.getFieldValue('logic');
  var code = '';
   code += `#SETUP pinMode(${number_pin},INPUT); #END\n`;
   code += `pulseIn(${number_pin}, ${number_logic})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['pulsein_read_timeout'] = function(block) {
  var number_pin = block.getFieldValue('pin');
  var number_logic = block.getFieldValue('logic');
  var value_timeout = Blockly.JavaScript.valueToCode(block, 'timeout', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '';
   code += `#SETUP pinMode(${number_pin},INPUT); #END\n`;
   code += `pulseIn(${number_pin}, ${number_logic},${value_timeout})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
