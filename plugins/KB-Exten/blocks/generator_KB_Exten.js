Blockly.JavaScript['KB_Exten_setup'] = function (block) {
	var code = '';
	code += '#EXTINC#include <KB_Exten.h>#END\n';
	code += '\n';
	code += 'setup_KB_Exten();\n';
    return code;
};
Blockly.JavaScript['KB_Exten_Servo_motor'] = function(block) {
  var dropdown_ch = block.getFieldValue('port');
  var value_degree = Blockly.JavaScript.valueToCode(block, 'degree', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo_write(' + dropdown_ch + ', ' + value_degree +');\n';
  return code;
};
Blockly.JavaScript['KB_Exten_motor'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'motor(' + dropdown_ch + ', ' + dropdown_dir + ', ' + value_speed + ');\n';
  return code;
};
Blockly.JavaScript['KB_Exten_motor_forward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  //code += 'motor(2, 1, ' + value_speed + ');\n';
  //code += 'motor(1, 1, ' + value_speed + ');\t';
  code += 'motor_control(0,' + value_speed + ');\t';
  
  return code;
};

Blockly.JavaScript['KB_Exten_motor_backward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  // code += 'motor(1, 2, ' + value_speed + ');\t';
  // code += 'motor(2, 2, ' + value_speed + ');\n';
  code += 'motor_control(1,' + value_speed + ');\t';
  return code;
};
Blockly.JavaScript['KB_Exten_motor_spin'] = function(block) {
  var dropdown_ch = block.getFieldValue('direction');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = '';
  if(dropdown_ch == 1){
    // code += 'motor(1, 2, ' + value_speed + ');\t';
    // code += 'motor(2, 1, ' + value_speed + ');\n';
    code += 'motor_control(4,' + value_speed + ');\t';
  }
  else if(dropdown_ch == 2){
    // code += 'motor(1, 1, ' + value_speed + ');\t';
    // code += 'motor(2, 2, ' + value_speed + ');\n';
    code += 'motor_control(5,' + value_speed + ');\t';
  }
  return code;
};
Blockly.JavaScript['KB_Exten_motor_turn'] = function(block) {
  var dropdown_ch = block.getFieldValue('direction');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = '';
  if(dropdown_ch == 1){
    // code += 'motor(1, 2, 1);\t';
    // code += 'motor(2, 1, ' + value_speed + ');\n';
    code += 'motor_control(2,' + value_speed + ');\t';
  }
  else if(dropdown_ch == 2){
    // code += 'motor(1, 1, ' + value_speed + ');\t';
    // code += 'motor(2, 2, 1);\n';
    code += 'motor_control(3,' + value_speed + ');\t';
  }
  return code;
};
Blockly.JavaScript['KB_Exten_motor_stop_ch'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var code = '';
  if(dropdown_ch == 0){
    code += 'motor( 1, 2, 1);\n';
    code += 'motor( 2, 2, 1);\n';
  }
  else if(dropdown_ch == 1){
    code = 'motor( 1, 2, 1);\n';
  }
  else if(dropdown_ch == 2){
    code = 'motor( 2, 2, 1);\n';
  }
  
  return code;
};
Blockly.JavaScript['KB_Exten_analog'] = function(block) {
    var value_pin = block.getFieldValue('pin');
    var code = `analog_Read(${value_pin})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['KB_Exten_digital_Read'] = function(block) {
    var value_pin = block.getFieldValue('pin');
    var value_mode = block.getFieldValue('mode');
    var code = `digital_Read(${value_pin},${value_mode})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['KB_Exten_digital_Write'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var dropdown_status = block.getFieldValue('status');
  var code = 'digital_Write(' + dropdown_pin + ', ' + dropdown_status +');\n';
  return code;
};
Blockly.JavaScript['KB_Exten_set_ultrasonic'] = function(block) {
  var dropdown_pin_echo = block.getFieldValue('pin_echo');
  var dropdown_pin_trig = block.getFieldValue('pin_trig');
  var code = 'set_pin_ultrasonic(' + dropdown_pin_echo + ', ' + dropdown_pin_trig +');\n';
  return code;
};
Blockly.JavaScript['KB_Exten_read_ultrasonic'] = function(block) {
    var code = `ultrasonic_Read()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['KB_Exten_set_ds18b20'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var code = 'set_pin_ds18b20(' + dropdown_pin +');\n';
  return code;
};
Blockly.JavaScript['KB_Exten_read_ds18b20'] = function(block) {
    var code = `ds18b20_Read()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['KB_Exten_set_dht'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var dropdown_type = block.getFieldValue('type');
  var code = 'set_pin_dht(' + dropdown_pin +','+dropdown_type+');\n';
  return code;
};
Blockly.JavaScript['KB_Exten_read_dht'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
    var code = 'dht_Read('+dropdown_type+')\n';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['KB_Exten_Servo_motor_Moving'] = function(block) {
  var dropdown_ch = block.getFieldValue('port');
  var value_present_angle = Blockly.JavaScript.valueToCode(block, 'present_angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_traget_angle = Blockly.JavaScript.valueToCode(block, 'traget_angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_speed_servo = Blockly.JavaScript.valueToCode(block, 'speed_servo', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo_moving(' + dropdown_ch + ', ' + value_present_angle +', ' + value_traget_angle +', ' + value_speed_servo +');\n';
  return code;
};
Blockly.JavaScript['KB_Exten_Servo_run'] = function(block) {
  var dropdown_ch = block.getFieldValue('port');
  var value_traget_angle = Blockly.JavaScript.valueToCode(block, 'traget_angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_speed_servo = Blockly.JavaScript.valueToCode(block, 'speed_servo', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_servo_dif = Blockly.JavaScript.valueToCode(block, 'servo_dif', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo_run(' + dropdown_ch + ',' + value_traget_angle +', ' + value_speed_servo +', ' + value_servo_dif +')\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};