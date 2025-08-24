
//Block from IKB1 


module.exports = function(Blockly) {


Blockly.JavaScript['LineSonicmotor2WD'] = function(block) {
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  //var code = 'motor(' + dropdown_ch + ', ' + dropdown_dir + ', ' + value_speed + ');\n';
  var code = '';
  if(dropdown_dir == '1'){code += 'motor(1,'+ value_speed +');\n motor(2,'+ value_speed +');';}
  if(dropdown_dir == '2'){code += 'motor(1,-'+ value_speed +');\n motor(2,-'+ value_speed +');';}
  if(dropdown_dir == '3'){code += 'motor(1,0);\n motor(2,'+ value_speed +');';}
  if(dropdown_dir == '4'){code += 'motor(1,'+ value_speed +');\n motor(2,0);';}
  if(dropdown_dir == '5'){code += 'motor(1,-'+ value_speed +');\n motor(2,'+ value_speed +');';}
  if(dropdown_dir == '6'){code += 'motor(1,'+ value_speed +');\n motor(2,-'+ value_speed +');';}
  return code;
};

Blockly.JavaScript['LineSonic_servo'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servoRun(' + dropdown_ch + ', ' + value_angle + ');\n';
  return code;
};

Blockly.JavaScript['LineSonic_servo2'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo2(' + dropdown_ch + ', ' + dropdown_dir +', ' + value_speed + ');\n';
  return code;
};
Blockly.JavaScript['LineSonic_forward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,'+value_speed+');';
  code += 'motor(2,'+value_speed+');';
  return code;
};

Blockly.JavaScript['LineSonic_backward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,-'+value_speed+');';
  code += 'motor(2,-'+value_speed+');';
  return code;
};

Blockly.JavaScript['LineSonic_turn_left'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,0);';
  code += 'motor(2,-'+value_speed+');';
  return code;
};

Blockly.JavaScript['LineSonic_turn_right'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,-'+value_speed+');';
  code += 'motor(2,0);';
  return code;
};

Blockly.JavaScript['LineSonic_spin_left'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,-'+value_speed+');';
  code += 'motor(2,'+value_speed+');';
  return code;
};

Blockly.JavaScript['LineSonic_spin_right'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,'+value_speed+');';
  code += 'motor(2,-'+value_speed+');';
  return code;
};

Blockly.JavaScript['LineSonic_stop'] = function(block) {  
  var code = 'ao();\n';
  //code += 'errors = 0;integral =0 ;derivative =0;output =0;\n';
  return code;
};

Blockly.JavaScript['LineSonic_stop_ch'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var code = 'motor('+dropdown_ch+',0);';
  return code;
};

Blockly.JavaScript['LineSonic_forward2'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,'+value_speed1+');';
  code += 'motor(2,'+value_speed2+');';
  return code;
};

Blockly.JavaScript['LineSonic_backward2'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,-'+value_speed1+');';
  code += 'motor(2,-'+value_speed2+');';
  return code;
};

}
