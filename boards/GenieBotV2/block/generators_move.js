module.exports = function(Blockly){
  'use strict';

Blockly.JavaScript['Move_To_partA'] = function(block) {  
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';  
  var code = 'move_snake('+value_s0+');\n';
  return code;
};
Blockly.JavaScript['Move_To_partB'] = function(block) {
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';    
  var code = 'move_Sixsax('+value_s0+');\n';
  return code;
};

Blockly.JavaScript['Move_To_partD'] = function(block) {
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';    
  var code = 'move_S('+value_s0+');\n';
  return code;
};
Blockly.JavaScript['Move_To_partH'] = function(block) {  
  var dropdown_direction = block.getFieldValue('direction');
  var code = 'move_cross('+dropdown_direction+');\n';
  return code;
};
Blockly.JavaScript['Move_start'] = function(block) {
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';  
  var code = 'move_start('+value_s0+');\n';
  return code;
};
Blockly.JavaScript["Move_To_partC"] = function(block) {
  var dropdown_value = block.getFieldValue(`IMG_SELECT_1`);

  var code = "";
  if (dropdown_value === "icon1") {
    code = "move_number2(1);\n";
  } else if (dropdown_value === "icon2") {
    code = "move_number2(2);\n";
  } else {
    code = "// ไม่พบตัวเลือกที่ตรง\n";
  }

  return code;
};
Blockly.JavaScript['Move_To_partE'] = function(block) {  
  var dropdown_direction = block.getFieldValue('direction');

  var code ='';
  if(dropdown_direction == '0'){code +=  'move_SQ_4d(2,1);\n';}
  if(dropdown_direction == '1'){code +=  'move_SQ_4d(1,1);\n';}
  if(dropdown_direction == '2'){code +=  'move_SQ_4d(2,2);\n';}
  if(dropdown_direction == '3'){code +=  'move_SQ_4d(1,2);\n';}
  return code;
};
Blockly.JavaScript['Move_To_partEE'] = function(block) {  
  var dropdown_direction = block.getFieldValue('direction');

  var code ='';
  if(dropdown_direction == '0'){code +=  'move_gripecan_4d(2,1);\n';}
  if(dropdown_direction == '1'){code +=  'move_gripecan_4d(1,1);\n';}
  if(dropdown_direction == '2'){code +=  'move_gripecan_4d(2,2);\n';}
  if(dropdown_direction == '3'){code +=  'move_gripecan_4d(1,2);\n';}
  return code;
};
Blockly.JavaScript['Move_To_partF'] = function(block) {  
  var dropdown_direction = block.getFieldValue('direction');
  var checkline = (block.getFieldValue('checkline') == 'TRUE')? '1' : '0';

  var code ='';
  if(dropdown_direction == '0'){code +=  'move_diamond(2,1,'+checkline+');\n';}
  if(dropdown_direction == '1'){code +=  'move_diamond(1,1,'+checkline+');\n';}
  if(dropdown_direction == '2'){code +=  'move_diamond(2,2,'+checkline+');\n';}
  if(dropdown_direction == '3'){code +=  'move_diamond(1,2,'+checkline+');\n';}
  if(dropdown_direction == '4'){code +=  'move_diamond(2,3,'+checkline+');\n';}
  if(dropdown_direction == '5'){code +=  'move_diamond(1,3,'+checkline+');\n';}
  return code;
};
Blockly.JavaScript['Move_To_partFF'] = function(block) {  
  var dropdown_direction = block.getFieldValue('direction');
  var checkline = (block.getFieldValue('checkline') == 'TRUE')? '1' : '0';

  var code ='';
  if(dropdown_direction == '0'){code +=  'test_diamond(2,1,'+checkline+');\n';}
  if(dropdown_direction == '1'){code +=  'test_diamond(1,1,'+checkline+');\n';}
  if(dropdown_direction == '2'){code +=  'test_diamond(2,2,'+checkline+');\n';}
  if(dropdown_direction == '3'){code +=  'test_diamond(1,2,'+checkline+');\n';}
  return code;
};
Blockly.JavaScript['Move_To_partG'] = function(block) {  
  var dropdown_direction = block.getFieldValue('direction');
  var code = 'move_SQ_2d('+dropdown_direction+');\n';
  return code;
};
Blockly.JavaScript['Move_To_partGG'] = function(block) {  
  var dropdown_direction = block.getFieldValue('direction');
  var code = 'move_gripecan_2d('+dropdown_direction+');\n';
  return code;
};
Blockly.JavaScript['Move_To_partI'] = function(block) { 
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';   
  var code = 'move_straight('+value_s0+');\n';
  return code;
};
Blockly.JavaScript['Move_To_partJ'] = function(block) { 
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';   
  var code = 'move_triangle('+value_s0+');\n';
  return code;
};
Blockly.JavaScript['Move_To_partK'] = function(block) {  
  var dropdown_direction = block.getFieldValue('direction');

  var code ='move_tri('+dropdown_direction+');';
  return code;
};
Blockly.JavaScript['Move_To_partL'] = function(block) {  
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';  
  var code ='move_kong('+value_s0+');';
  return code;
};

Blockly.JavaScript['Move_back'] = function(block) {  
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = 'move_back('+value_s0+');\n';
  return code;
};
Blockly.JavaScript['Move_chopsticks'] = function(block) { 
    var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0'; 
  var code = 'move_chopsticks('+value_s0+','+value_s1+','+value_s2+');\n';
  return code;
};
Blockly.JavaScript['Turn_ultil_check_Sensor'] = function(block) {
  var dropdown_dir = block.getFieldValue('direction');
  var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';


  var code = '';
  code += 'while(!('+value_s2+')){\n';
  code += 'Turn_ultil_check_Sensor('+dropdown_dir+');\n';
  code += '}ao();';
  if(dropdown_dir == '2'){
    code += 'motor(1,20);motor(2,20);delay(100);mst();';
  }
  return code;
};
Blockly.JavaScript['move_original_angle'] = function(block) {
  var dropdown_dir = block.getFieldValue('direction');
  var dropdown_state = block.getFieldValue('state');
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';

  var code = 'move_original_angle('+dropdown_dir+','+value_s0+','+value_s1+','+dropdown_state+');ao();';
  return code;
};
Blockly.JavaScript['move_PID_Encoder'] = function(block) {
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';


  var code = 'Run_PID_until_encoder('+value_s0+',0.5,1,'+value_s1+',0);mst();';
  return code;
};
Blockly.JavaScript['move_turn_by_angle'] = function(block) {
  var dropdown_dir = block.getFieldValue('direction');
  var dropdown_angle = block.getFieldValue('angle');

  var code = '';
  if(dropdown_angle == "90" || dropdown_angle == "-90"){
    code += 'turnByAngle_fix('+dropdown_dir+''+dropdown_angle+');ao();delay(100);';
  }
  else{
    code += 'turnByAngle('+dropdown_dir+''+dropdown_angle+');delay(10);';
  }

  
  if(dropdown_dir == "-"){
    code += 'while(!Read_status_sensor(0) and !Read_status_sensor(1) and !Read_status_sensor(2) and !Read_status_sensor(3) and !Read_status_sensor(4) and !Read_status_sensor(5) and !Read_status_sensor(6)){motor(1,-20);motor(2,20);}';
  }
  else{
    code += 'while(!Read_status_sensor(0) and !Read_status_sensor(1) and !Read_status_sensor(2) and !Read_status_sensor(3) and !Read_status_sensor(4) and !Read_status_sensor(5) and !Read_status_sensor(6) ){motor(1,20);motor(2,-20);}';
  }
  return code;
};

Blockly.JavaScript['move_PID_until_checkSum'] = function(block) {
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';

  var code = 'Run_PID_until_frontSensor('+value_s0+',0.2,1,'+value_s1+',0); mst();';
  return code;
};

Blockly.JavaScript['move_PID_until_sensor'] = function(block) {
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';

  var code = 'Run_PID_until_can('+value_s0+',0.1,0,'+value_s1+',0); mst();';
  return code;
};
Blockly.JavaScript['move_check_back'] = function(block) {
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = 'move_check_back('+value_s0+'); mst();';
  return code;
};

}