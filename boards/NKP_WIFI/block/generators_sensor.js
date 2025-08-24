module.exports = function(Blockly){
  'use strict';

Blockly.JavaScript['button_1_status'] = function(block) {  
  var code = '#SETUP pinMode(25 ,INPUT); \n#END(digitalRead(25))';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['Relay_module'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_status = Blockly.JavaScript.valueToCode(block, 'status', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = '#SETUP pinMode(' + value_pin + ',OUTPUT); \n#END digitalWrite(' + value_pin + ', ' + value_status + ');\n';
  return code;
};
Blockly.JavaScript['LED_module'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_status = Blockly.JavaScript.valueToCode(block, 'status', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = '#SETUP pinMode(' + value_pin + ',OUTPUT); \n#END digitalWrite(' + value_pin + ', ' + value_status + ');\n';
  return code;
};

Blockly.JavaScript['soil_Read_analog'] = function(block) {
  var number_pin = block.getFieldValue('pin');
  var code = 'analogRead('+ number_pin +')\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['LDR_Read_analog'] = function(block) {
  var number_pin = block.getFieldValue('pin');
  var code = 'analogRead('+ number_pin +')\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['DHT_ESP32_Setup'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var dropdown_dht_type = block.getFieldValue('dht_type');
  var number_pin = block.getFieldValue('pin'); 
  var code = `
  #EXTINC#include "DHT.h"#END
  #VARIABLE DHT ${variable_instance}(${number_pin},${dropdown_dht_type});#END
  ${variable_instance}.begin();
  `;
    return code;
};

Blockly.JavaScript['DHT_ESP32_readTemp'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = `${variable_instance}.readTemperature()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['DHT_ESP32_readHumid'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = `${variable_instance}.readHumidity()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};



Blockly.JavaScript['BH1750FVI_init'] = function(block) {
  /*var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var number_RX = block.getFieldValue('RX');
  var number_TX = block.getFieldValue('TX');*/
  var code = `#EXTINC #include <BH1750FVI.h>\n#END
#VARIABLE BH1750FVI LightSensor(BH1750FVI::k_DevModeContLowRes);#END
LightSensor.begin();`;
  return code;
};
Blockly.JavaScript['BH1750FVI_GetLightIntensity'] = function(block) {
  var dropdown_color = block.getFieldValue('_Color');
  var code = 'LightSensor.GetLightIntensity()\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};



Blockly.JavaScript['ds18b20_init'] = function(block) {
  var number_pin = block.getFieldValue('pin');
  var code = `#EXTINC
#include <OneWire.h>
#include <DallasTemperature.h>
#END
#VARIABLE
OneWire oneWire_DS18B20(${number_pin}); 
DallasTemperature sensors_ds18b20(&oneWire_DS18B20);
#END
`;
  return code;
};
Blockly.JavaScript['ds18b20_get_temperature'] = function(block) {
  var value_device = Blockly.JavaScript.valueToCode(block, 'device', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `sensors_ds18b20.getTemperatureC(${value_device})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['ds18b20_get_temperature_f'] = function(block) {
  var value_device = Blockly.JavaScript.valueToCode(block, 'device', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `sensors_ds18b20.getTemperatureF(${value_device})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};




Blockly.JavaScript['SHT31_Setup'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  //var dropdown_dht_type = block.getFieldValue('dht_type');
 // var number_pin = block.getFieldValue('pin'); 
  var code = `
#EXTINC#include "Adafruit_SHT31.h"#END
#VARIABLE Adafruit_SHT31 ${variable_instance} = Adafruit_SHT31();#END
if (! ${variable_instance}.begin(0x44)) {}\nif (${variable_instance}.isHeaterEnabled()){}
`;
  return code;
};
Blockly.JavaScript['SHT31_readTemp'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = `${variable_instance}.readTemperature()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['SHT31_readHumid'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = `${variable_instance}.readHumidity()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

}