module.exports = function(Blockly){
  'use strict';
Blockly.JavaScript['sw1_press'] = function(block) {  
  var code = 'wait_SW1();\n';
  return code;
};
Blockly.JavaScript['button_1_status'] = function(block) {  
  var code = '(digitalRead(12))';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

}