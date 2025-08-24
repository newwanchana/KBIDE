Blockly.JavaScript['KBIDERobot_setup'] = function (block) {
	 /*var code =`#EXTINC
	 			#include <KBRobot.h>
	 			#END
				
	 			#VARIABLE
				Adafruit_ADS1115 ads(0x49);
				#END
				#VARIABLE
				Servo servo1;
				#END
				
				KBRobot_Begin();
				\n`;*/
	 var code = '';
	code += '#EXTINC#include <KBRobot.h>#END\n';
	code += '#VARIABLE Adafruit_ADS1115 ads(0x49);#END\n';
	code += '#VARIABLE Servo servo1;#END\n';
	code += '#SETUP ads.setGain(GAIN_TWOTHIRDS);#END\n';
	code += '#SETUP ads.begin();#END\n';
	code += '#SETUP servo1.attach(18);#END\n';
	code += '\n';
	code += 'KBRobot_Begin();\n';
    return code;
};
Blockly.JavaScript['KBRobot_servo'] = function(block) {
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = 'servo1.write('+value_angle+');\n';
  return code;
};
 Blockly.JavaScript['KBRobot_motor_stop_ch'] = function(block) {
    var dropdown_ch = block.getFieldValue('ch');
    if(dropdown_ch == 1){
      var code = 'motor(1, 1, 0);\n';
    }
    else if(dropdown_ch == 2){
      var code = 'motor(2, 1, 0);\n';
    }
     else if(dropdown_ch == 3){
      var code = 'motor(1, 1, 0);\n';
       code += 'motor(2, 1, 0);\n';
    }
    return code;
  };
Blockly.JavaScript['KBRobot_motor_stop'] = function(block) { 
  var code = ''; 
      code += 'motor(1,1,0);\t';
      code += 'motor(2,1,0);\n';
  return code;
};


Blockly.JavaScript['adc_AnalogRead'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var code = `ads.readADC_SingleEnded(${dropdown_pin})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['KBRobot_motor_action'] = function(block) {
  var dropdown_action = block.getFieldValue('action');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  
  if(dropdown_action == 1){
    var code = 'motor(1, 1, '+value_speed+');\n';
  }
  else if(dropdown_action == 2){
    var code = 'motor(2, 1, '+value_speed+');\n';
  }
  else if(dropdown_action == 3){
    var code = 'motor(1, 1, '+value_speed+');\n';
     code += 'motor(2, 1, '+value_speed+');\n';
  }
  else if(dropdown_action == 4){
    var code = 'motor(1, 2, '+value_speed+');\n';
     code += 'motor(2, 2, '+value_speed+');\n';
  }
  else if(dropdown_action == 5){
    var code = 'motor(1, 2, '+value_speed+');\n';
     code += 'motor(2, 1, '+value_speed+');\n';
  }
  else if(dropdown_action == 6){
    var code = 'motor(1, 1, '+value_speed+');\n';
     code += 'motor(2, 2, '+value_speed+');\n';
  }
  else if(dropdown_action == 7){
    var code = 'motor(1, 1, 0);\n';
     code += 'motor(2, 1, '+value_speed+');\n';
  }
  else if(dropdown_action == 8){
    var code = 'motor(1, 1, '+value_speed+');\n';
     code += 'motor(2, 1, 0);\n';
  }
  return code;
};
Blockly.JavaScript['KBRobot_motor_forward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 1, ' + value_speed + ');\t';
  code += 'motor(2, 1, ' + value_speed + ');\n';
  return code;
};
Blockly.JavaScript['KBRobot_motor_forward2'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 1, ' + value_speed1 + ');\t';
  code += 'motor(2, 1, ' + value_speed2 + ');\n';
  return code;
};
Blockly.JavaScript['KBRobot_motor_backward2'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 2, ' + value_speed1 + ');\t';
  code += 'motor(2, 2, ' + value_speed2 + ');\n';
  return code;
};

Blockly.JavaScript['KBRobot_motor_backward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 2, ' + value_speed + ');\t';
  code += 'motor(2, 2, ' + value_speed + ');\n';
  return code;
};

Blockly.JavaScript['KBRobot_motor_turn_left'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 1, 0);\t';
  code += 'motor(2, 1, ' + value_speed + ');\n';
  return code;
};

Blockly.JavaScript['KBRobot_motor_turn_right'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 1, ' + value_speed + ');\t';
  code += 'motor(2, 1, 0);\n';
  return code;
};

Blockly.JavaScript['KBRobot_motor_spin_left'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 2, ' + value_speed + ');\t';
  code += 'motor(2, 1, ' + value_speed + ');\n';
  return code;
};

Blockly.JavaScript['KBRobot_motor_spin_right'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 1, ' + value_speed + ');\t';
  code += 'motor(2, 2, ' + value_speed + ');\n';
  return code;
};
