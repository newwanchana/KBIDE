
//Block from IKB1 


module.exports = function(Blockly) {

Blockly.JavaScript['Run_following_of_line'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'Run_following_of_line( ' + value_speed + ');\n';
  return code;
};
Blockly.JavaScript['LineSonic_PID_setPin'] = function(block) {
  var value_numSensor = block.getFieldValue('numSensor');
  var value_s0 = block.getFieldValue('S0_Pin');
  var value_s1 = block.getFieldValue('S1_Pin');
  var value_s2 = block.getFieldValue('S2_Pin');
  var value_s3 = block.getFieldValue('S3_Pin');
  var value_s4 = block.getFieldValue('S4_Pin');
  var value_s5 = block.getFieldValue('S5_Pin');
  var value_s6 = block.getFieldValue('S6_Pin');
  var value_s7 = block.getFieldValue('S7_Pin');
  // var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s5 = Blockly.JavaScript.valueToCode(block, 'S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s6 = Blockly.JavaScript.valueToCode(block, 'S6', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s7 = Blockly.JavaScript.valueToCode(block, 'S7', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  //code += 'PID_NumPin = ' + value_numSensor+';\t';
  //qtr.setSensorPins((const uint8_t[]){7,8,11,19,18,A3,A2,A1}, SensorCount);
 // code += 'SensorCount = '+value_numSensor+';;\n';
  code += 'setSensorPins((const int[]){'+value_s0+','+value_s1+','+value_s2+','+value_s3+','+value_s4+','+value_s5+','+value_s6+','+value_s7+'}, '+value_numSensor+');\n';
  return code;
};
Blockly.JavaScript['set_calibrate_Front_sensor'] = function(block) {
  var value_Round = Blockly.JavaScript.valueToCode(block, 'Round', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'setCalibrate('+value_Round+');\n';
  return code;
};


Blockly.JavaScript['PID_readLine'] = function(block) {
    var value_pin = block.getFieldValue('line_color');
    var code = `readline(${value_pin})`;  
    //var code = `readline(sensorValues)`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['LineSonic_PID_setMin'] = function(block) {
  var value_numSensor = block.getFieldValue('numSensor');
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s5 = Blockly.JavaScript.valueToCode(block, 'S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s6 = Blockly.JavaScript.valueToCode(block, 'S6', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s7 = Blockly.JavaScript.valueToCode(block, 'S7', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  //code += 'PID_NumPin = ' + value_numSensor+';\t';
  code += 'setSensorMin((const int[]) {'+value_s0+','+value_s1+','+value_s2+','+value_s3+','+value_s4+','+value_s5+','+value_s6+','+value_s7+'});\n';
  return code;
};
Blockly.JavaScript['LineSonic_PID_setMax'] = function(block) {
  var value_numSensor = block.getFieldValue('numSensor');
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s5 = Blockly.JavaScript.valueToCode(block, 'S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s6 = Blockly.JavaScript.valueToCode(block, 'S6', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s7 = Blockly.JavaScript.valueToCode(block, 'S7', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  //code += 'PID_NumPin = ' + value_numSensor+';\t';
  code += 'setSensorMax((const int[]) {'+value_s0+','+value_s1+','+value_s2+','+value_s3+','+value_s4+','+value_s5+','+value_s6+','+value_s7+'});\n';
  return code;
};

Blockly.JavaScript['LineSonic_Run_PID'] = function(block) {
  var value_line_color = block.getFieldValue('line_color');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KP = Blockly.JavaScript.valueToCode(block, 'KP', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KD = Blockly.JavaScript.valueToCode(block, 'KD', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  if(value_line_color == '0'){code += 'lineFollow_PID('+value_line_color+',' +value_speed+','+value_KP+','+value_KD+');\n';}
  if(value_line_color == '1'){code += 'lineFollow_PID('+value_line_color+','+ value_speed+','+value_KP+','+value_KD+');\n';}
  
  return code;
};

Blockly.JavaScript['LineSonic_Run_PID_upSpeed'] = function(block) {
  var value_line_color = block.getFieldValue('line_color');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'Start speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'Normally speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_Time = Blockly.JavaScript.valueToCode(block, 'Time', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KP = Blockly.JavaScript.valueToCode(block, 'KP', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KD = Blockly.JavaScript.valueToCode(block, 'KD', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'lineFollow_upSpeed_with_time('+value_line_color+','+ value_speed+','+ value_speed1+','+ value_Time+','+value_KP+','+value_KD+');\n';
  
  return code;
};
Blockly.JavaScript['LineSonic_Run_PID_withTime'] = function(block) {
  var value_line_color = block.getFieldValue('line_color');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_Time = Blockly.JavaScript.valueToCode(block, 'Time', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KP = Blockly.JavaScript.valueToCode(block, 'KP', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KD = Blockly.JavaScript.valueToCode(block, 'KD', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'lineFollow_PID_with_time('+value_line_color+','+ value_speed+','+ value_Time+','+value_KP+','+value_KD+');\n';
  
  return code;
};
Blockly.JavaScript['LineSonic_Run_PID_until_frontSensor'] = function(block) {
  var value_line_color = block.getFieldValue('line_color');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KP = Blockly.JavaScript.valueToCode(block, 'KP', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KD = Blockly.JavaScript.valueToCode(block, 'KD', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'lineFollow_PID_until_frontSensor('+value_line_color+','+ value_speed+','+ value_value+','+value_KP+','+value_KD+');\n';
  
  return code;
};
Blockly.JavaScript['LineSonic_Run_PID_until_readDigital'] = function(block) {
  var value_line_color = block.getFieldValue('line_color');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_digitalPort = block.getFieldValue('digital_port');
  var value_status_port = block.getFieldValue('status_port');
  var value_KP = Blockly.JavaScript.valueToCode(block, 'KP', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KD = Blockly.JavaScript.valueToCode(block, 'KD', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'lineFollow_PID_until_readDigital('+value_line_color+','+ value_speed+','+ value_digitalPort+','+ value_status_port+','+value_KP+','+value_KD+');\n';
  
  return code;
};

Blockly.JavaScript['set_Sensitive_Front_sensor'] = function(block) {
  var value_Round = Blockly.JavaScript.valueToCode(block, 'Sensitive', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'setSensitive_F(' + value_Round  + ');\n';
  return code;
};
Blockly.JavaScript['Read_Raw_Value_Sensor'] = function(block) {
 
  var value_Sensor_Pin = block.getFieldValue('Sensor_Pin');
  var value_line_color = block.getFieldValue('line_color');
  
  var code = '';
  code += 'ReadLightSensor('+line_color +','+ value_Sensor_Pin+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['Read_Status_Front_Sensor'] = function(block) {
 
  var value_Sensor_Pin = block.getFieldValue('Sensor_Pin');
  var value_line_color = block.getFieldValue('line_color');
  
  var code = '';

  code += 'Read_status_sensor('+ value_Sensor_Pin+','+ value_Sensor_Pin+')';

  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['EditTextCode'] = function(block) {
  //var value_text = Blockly.JavaScript.valueToCode(block, 'Text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text = Blockly.JavaScript.valueToCode(block, 'Text', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += ''+value_text+'\n';
  code = code.substring(8,code.length - 3);
  return code;
};

Blockly.JavaScript['BlockComment'] = function(block) {
  //var value_text = Blockly.JavaScript.valueToCode(block, 'Text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text = Blockly.JavaScript.valueToCode(block, 'Text', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  return code;
};




}
