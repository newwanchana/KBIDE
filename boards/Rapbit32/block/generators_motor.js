
//Block from IKB1 


module.exports = function(Blockly) {

  Blockly.JavaScript['Rapbit32_motor'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'motor(' + dropdown_ch + ', ' + dropdown_dir + ', ' + value_speed + ');\n';
  return code;
};
Blockly.JavaScript['Rapbit32_servo'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo(' + dropdown_ch + ', ' + value_angle + ');\n';
  return code;
};
Blockly.JavaScript['Rapbit32_servo_speed_control'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var dropdown_speed = block.getFieldValue('speed');
  var value_servo_degree = Blockly.JavaScript.valueToCode(block, 'servo_degree', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_traget_degree = Blockly.JavaScript.valueToCode(block, 'traget_degree', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  
  var code = 'control_servo(' + dropdown_ch + ', ' + value_servo_degree + ', ' + value_traget_degree + ', ' + dropdown_speed + ');\n';
  return code;
};

Blockly.JavaScript['Rapbit32_servo2'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo2(' + dropdown_ch + ', ' + dropdown_dir +', ' + value_speed + ');\n';
  return code;
};
Blockly.JavaScript['Rapbit32_motor_forward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 1, ' + value_speed + ');\t';
  code += 'motor(2, 1, ' + value_speed + ');delay(10);\n';
  return code;
};

Blockly.JavaScript['Rapbit32_motor_backward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 2, ' + value_speed + ');\t';
  code += 'motor(2, 2, ' + value_speed + ');delay(10);\n';
  return code;
};
Blockly.JavaScript['Rapbit32_motor_spin'] = function(block) {
  var dropdown_ch = block.getFieldValue('direction');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = '';
  if(dropdown_ch == 1){
    code += 'motor(1, 2, ' + value_speed + ');\t';
    code += 'motor(2, 1, ' + value_speed + ');delay(10);\n';
  }
  else if(dropdown_ch == 2){
    code += 'motor(1, 1, ' + value_speed + ');\t';
    code += 'motor(2, 2, ' + value_speed + ');delay(10);\n';
  }
  return code;
};
Blockly.JavaScript['Rapbit32_motor_turn'] = function(block) {
  var dropdown_ch = block.getFieldValue('direction');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = '';
  if(dropdown_ch == 1){
    code += 'motor(1, 1, 0);\t';
    code += 'motor(2, 1, ' + value_speed + ');delay(10);\n';
  }
  else if(dropdown_ch == 2){
    code += 'motor(1, 1, ' + value_speed + ');\t';
    code += 'motor(2, 1, 0);delay(10);\n';
  }
  return code;
};
Blockly.JavaScript['Rapbit32_motor_turn_left'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 1, 0);\t';
  code += 'motor(2, 1, ' + value_speed + ');delay(10);\n';
  return code;
};

Blockly.JavaScript['Rapbit32_motor_turn_right'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 1, ' + value_speed + ');delay(10);\t';
  code += 'motor(2, 1, 0);\n';
  return code;
};

Blockly.JavaScript['Rapbit32_motor_spin_left'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 2, ' + value_speed + ');\t';
  code += 'motor(2, 1, ' + value_speed + ');delay(10);\n';
  return code;
};

Blockly.JavaScript['Rapbit32_motor_spin_right'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 1, ' + value_speed + ');\t';
  code += 'motor(2, 2, ' + value_speed + ');delay(10);\n';
  return code;
};

Blockly.JavaScript['Rapbit32_motor_stop'] = function(block) {  
  var code = 'ao();delay(10);\n';
  return code;
};

Blockly.JavaScript['Rapbit32_motor_stop_ch'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var code = '';
  if(dropdown_ch == 0){
    code += 'motor( 1, 1, 0);\n';
    code += 'motor( 2, 1, 0);delay(10);\n';
  }
  else if(dropdown_ch == 1){
    code = 'motor( 1, 1, 0);delay(10);\n';
  }
  else if(dropdown_ch == 2){
    code = 'motor( 2, 1, 0);delay(10);\n';
  }
  
  return code;
};

Blockly.JavaScript['Rapbit32_motor_forward2'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 1, ' + value_speed1 + ');\t';
  code += 'motor(2, 1, ' + value_speed2 + ');delay(10);\n';
  return code;
};

Blockly.JavaScript['Rapbit32_motor_backward2'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 2, ' + value_speed1 + ');\t';
  code += 'motor(2, 2, ' + value_speed2 + ');delay(10);\n';
  return code;
};

Blockly.JavaScript['Run_following_of_line'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'Run_following_of_line( ' + value_speed + ');\n';
  return code;
};
Blockly.JavaScript['Readline_PID'] = function(block) {  
  var code = '(readline())';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['Rapbit32_Run_PID'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed_motor', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_kp = Blockly.JavaScript.valueToCode(block, 'kp', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_kd = Blockly.JavaScript.valueToCode(block, 'kd', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_ki = Blockly.JavaScript.valueToCode(block, 'ki', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'Run_PID('+ value_speed1 +','+ value_kp +','+ value_ki +','+ value_kd +');\n';
  return code;
};
}
