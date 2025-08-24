Blockly.JavaScript['mpu6050_begin'] = function(block) {
  //var dropdown_addr = block.getFieldValue('addr');
  var value_pin_sda = Blockly.JavaScript.valueToCode(block, 'pin_sda', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pin_scl = Blockly.JavaScript.valueToCode(block, 'pin_scl', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `
#EXTINC
    #include <Wire.h>
    #include <MPU6050_tockn.h>
#END
#VARIABLE
MPU6050 __mpu6050(Wire);
#END
Wire.begin(${value_pin_sda},${value_pin_scl});
__mpu6050.begin();
__mpu6050.calcGyroOffsets(true);
`;
  return code;
};

Blockly.JavaScript['mpu6050_get_acc_x'] = function(block) {
  var code = `__mpu6050.getAccX()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['mpu6050_get_acc_y'] = function(block) {
  var code = `__mpu6050.getAccY()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['mpu6050_get_acc_z'] = function(block) {
  var code = `__mpu6050.getAccZ()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['mpu6050_get_gyro_x'] = function(block) {
  var code = `__mpu6050.getGyroX()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['mpu6050_get_gyro_y'] = function(block) {
  var code = `__mpu6050.getGyroY()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['mpu6050_get_gyro_z'] = function(block) {
  var code = `__mpu6050.getGyroZ()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['mpu6050_get_angle_z'] = function(block) {
  var code = `__mpu6050.getAngleZ()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['mpu6050_get_angle_y'] = function(block) {
  var code = `__mpu6050.getAngleY()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['mpu6050_get_angle_x'] = function(block) {
  var code = `__mpu6050.getAngleX()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['mpu6050_get_angle_gyro_x'] = function(block) {
  var code = `__mpu6050.getGyroAngleX()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['mpu6050_get_angle_gyro_y'] = function(block) {
  var code = `__mpu6050.getGyroAngleY()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['mpu6050_get_angle_gyro_z'] = function(block) {
  var code = `__mpu6050.getGyroAngleZ()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};