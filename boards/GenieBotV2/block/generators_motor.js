
//Block from IKB1 


module.exports = function(Blockly) {

Blockly.JavaScript['PuppyBot'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'motor(' + dropdown_ch + ', ' + dropdown_dir + '' + value_speed + ');\n';
  return code;
};
Blockly.JavaScript['PuppyBotmotor2WD'] = function(block) {
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var value_timer = Blockly.JavaScript.valueToCode(block, 'timer', Blockly.JavaScript.ORDER_ATOMIC);
  //var code = 'motor(' + dropdown_ch + ', ' + dropdown_dir + ', ' + value_speed + ');\n';
  var code = '';
  if(dropdown_dir == '1'){code += 'motor(1,'+ value_speed +');\n motor(2,'+ value_speed +');';}
  if(dropdown_dir == '2'){code += 'motor(1,-'+ value_speed +');\n motor(2,-'+ value_speed +');';}
  if(dropdown_dir == '3'){code += 'motor(1,0);\n motor(2,'+ value_speed +');';}
  if(dropdown_dir == '4'){code += 'motor(1,'+ value_speed +');\n motor(2,0);';}
  if(dropdown_dir == '5'){code += 'motor(1,-'+ value_speed +');\n motor(2,'+ value_speed +');';}
  if(dropdown_dir == '6'){code += 'motor(1,'+ value_speed +');\n motor(2,-'+ value_speed +');';}
  code += 'delay('+ value_timer +');';
  return code;
};
Blockly.JavaScript['PuppyBotmotor4WD'] = function(block) {
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  //var code = 'motor(' + dropdown_ch + ', ' + dropdown_dir + ', ' + value_speed + ');\n';
  var code = '';
  if(dropdown_dir == '1'){code += 'motor_control(0,'+ value_speed +');';}
  if(dropdown_dir == '2'){code += 'motor_control(1,'+ value_speed +');';}
  if(dropdown_dir == '3'){code += 'motor_control(2,'+ value_speed +');';}
  if(dropdown_dir == '4'){code += 'motor_control(3,'+ value_speed +');';}
  if(dropdown_dir == '5'){code += 'motor_control(4,'+ value_speed +');';}
  if(dropdown_dir == '6'){code += 'motor_control(5,'+ value_speed +');';}
  return code;
};
Blockly.JavaScript['PuppyBotmotor_Mecanum'] = function(block) {
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  //var code = 'motor(' + dropdown_ch + ', ' + dropdown_dir + ', ' + value_speed + ');\n';
  var code = '';
  if(dropdown_dir == '1'){code += 'motor_control(0,'+ value_speed +');';}
  if(dropdown_dir == '2'){code += 'motor_control(1,'+ value_speed +');';}
  if(dropdown_dir == '3'){code += 'motor_control(2,'+ value_speed +');';}
  if(dropdown_dir == '4'){code += 'motor_control(3,'+ value_speed +');';}
  if(dropdown_dir == '5'){code += 'motor_control(4,'+ value_speed +');';}
  if(dropdown_dir == '6'){code += 'motor_control(5,'+ value_speed +');';}
  if(dropdown_dir == '7'){code += 'motor_control(6,'+ value_speed +');';}
  if(dropdown_dir == '8'){code += 'motor_control(7,'+ value_speed +');';}
  if(dropdown_dir == '9'){code += 'motor_control(8,'+ value_speed +');';}
  if(dropdown_dir == '10'){code += 'motor_control(9,'+ value_speed +');';}
  return code;
};
Blockly.JavaScript['PuppyBot_servo'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servoRun(' + dropdown_ch + ', ' + value_angle + ');\n';
  return code;
};

Blockly.JavaScript['PuppyBot_servo2'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo2(' + dropdown_ch + ', ' + dropdown_dir +', ' + value_speed + ');\n';
  return code;
};
Blockly.JavaScript['PuppyBot_servo_speed_control'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var dropdown_speed = block.getFieldValue('speed');
  var value_servo_degree = Blockly.JavaScript.valueToCode(block, 'servo_degree', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_traget_degree = Blockly.JavaScript.valueToCode(block, 'traget_degree', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  
  var code = 'control_servo(' + dropdown_ch + ', ' + value_servo_degree + ', ' + value_traget_degree + ', ' + dropdown_speed + ');\n';
  return code;
};
Blockly.JavaScript['PuppyBot_forward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,'+value_speed+');';
  code += 'motor(2,'+value_speed+');';
  return code;
};

Blockly.JavaScript['PuppyBot_backward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,-'+value_speed+');';
  code += 'motor(2,-'+value_speed+');';
  return code;
};

Blockly.JavaScript['PuppyBot_turn_left'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,0);';
  code += 'motor(2,-'+value_speed+');';
  return code;
};

Blockly.JavaScript['PuppyBot_turn_right'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,-'+value_speed+');';
  code += 'motor(2,0);';
  return code;
};

Blockly.JavaScript['PuppyBot_spin_left'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,-'+value_speed+');';
  code += 'motor(2,'+value_speed+');';
  return code;
};

Blockly.JavaScript['PuppyBot_spin_right'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,'+value_speed+');';
  code += 'motor(2,-'+value_speed+');';
  return code;
};

Blockly.JavaScript['PuppyBot_stop'] = function(block) {  
  var code = 'ao();\n';
  //code += 'errors = 0;integral =0 ;derivative =0;output =0;\n';
  return code;
};
Blockly.JavaScript['PuppyBot_stop_time'] = function(block) {  
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = 'ao();\ndelay('+value_time+');\n';
  //code += 'errors = 0;integral =0 ;derivative =0;output =0;\n';
  return code;
};

Blockly.JavaScript['PuppyBot_stop_ch'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var code = 'motor('+dropdown_ch+',0);';
  return code;
};

Blockly.JavaScript['PuppyBot_forward2'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,'+value_speed1+');';
  code += 'motor(2,'+value_speed2+');';
  return code;
};
Blockly.JavaScript['PuppyBot_forward2_4WD'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,'+value_speed1+');';
  code += 'motor(2,'+value_speed2+');';
  code += 'motor(3,'+value_speed1+');';
  code += 'motor(4,'+value_speed2+');';
  return code;
};

Blockly.JavaScript['PuppyBot_backward2'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,-'+value_speed1+');';
  code += 'motor(2,-'+value_speed2+');';
  return code;
};
Blockly.JavaScript['PuppyBot_backward2_4WD'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,-'+value_speed1+');';
  code += 'motor(2,-'+value_speed2+');';
  code += 'motor(3,-'+value_speed1+');';
  code += 'motor(4,-'+value_speed2+');';
  return code;
};


}
