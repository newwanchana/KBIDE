#include <Wire.h>
#define I2C_ADDRESS 0x20
#define stop_bit 0xFE
#define reset_board 250
#define servo1 70
#define servo2 71
#define servo3 72
#define servo4 73
#define header 0xFF
#define motorA_forward 3
#define motorA_backward 4
#define motorB_forward 5
#define motorB_backward 6

#define digital_write 7
#define digital_read 8
#define analog_read 9 
#define analog_write 10
#define setpin_dht 11
#define read_dht 12
#define setpin_ds18b20 13
#define read_ds18b20 14
#define set_ultrasonic 15
#define read_ultrasonic 16
#define motor_control_state 20
int present_angleS1 = 90;
int present_angleS2 = 90;
int present_angleS3 = 90;
int present_angleS4 = 90;

void i2c_send(byte data)
{
  Wire1.beginTransmission(I2C_ADDRESS);
  Wire1.write(data);
  Wire1.endTransmission();
}
int i2c_request(int byte_num)
{
  int num_lenght = 0;
  int data_in[5];
  Wire1.requestFrom(I2C_ADDRESS, byte_num);
  while (Wire1.available())
  {data_in[num_lenght] = Wire1.read();num_lenght++;}
  int data_value = data_in[1] * 256 + data_in[0];
  if(data_value >=0 && data_value <1024){
     return data_value;
  }
  else{return 0;}
}
void servo_write(int port_servo,int degree){
  if(degree < 0)degree = 0;
  if(degree > 180)degree = 180;
  if(port_servo >=0 && port_servo <=4){
    i2c_send(header);i2c_send(70 + port_servo);i2c_send(degree);i2c_send(stop_bit);
  }  
  //delay(40);
}
void motor(uint8_t port_motor,uint8_t dir,uint8_t speed){
  if(speed > 100)speed = 100;
  if(port_motor ==1){
    if(dir == 1){i2c_send(header);i2c_send(0x03);i2c_send(speed);i2c_send(stop_bit);}
    else if(dir == 2){i2c_send(header);i2c_send(0x04);i2c_send(speed);i2c_send(stop_bit);}
  }
  if(port_motor == 2){
    if(dir == 1){i2c_send(header);i2c_send(0x05);i2c_send(speed);i2c_send(stop_bit);}
    else if(dir == 2){i2c_send(header);i2c_send(0x6);i2c_send(speed);i2c_send(stop_bit);}
  }
  //delay(20);
}
void motor_control(uint8_t state,uint8_t speed){
  i2c_send(header);i2c_send(motor_control_state);i2c_send(state);i2c_send(speed);i2c_send(stop_bit);
}
int analog_Read(uint8_t port_analog){
  int analog_data = 0;
  if(port_analog >= 0 && port_analog <=7 ){
    i2c_send(header);i2c_send(analog_read);i2c_send(14+port_analog);
    analog_data = (i2c_request(2));
    //Serial.println(i2c_request(2));
  }
  //Serial.println(analog_data);
  return analog_data;
}
int digital_Read(uint8_t port_ditital,bool status_digital){
  int digital_data = 0;
  if(port_ditital >= 0 && port_ditital <=17 ){
    i2c_send(header);i2c_send(digital_read);i2c_send(port_ditital);i2c_send(status_digital);
    digital_data = (i2c_request(2));
    //Serial.println(i2c_request(2));
  }
  //Serial.println(analog_data);
  return digital_data;
}
void digital_Write(uint8_t port_digital,bool status_digital ){
  if(port_digital >= 0 && port_digital <=17 ){
    i2c_send(header);i2c_send(digital_write);i2c_send(port_digital);i2c_send(status_digital);
  }
}
void set_pin_ultrasonic(uint8_t Echo_pin,uint8_t Trig_pin){
  i2c_send(header);i2c_send(set_ultrasonic);i2c_send(Echo_pin);i2c_send(Trig_pin);
  delay(100);
}
int ultrasonic_Read(){
    i2c_send(header);i2c_send(read_ultrasonic);
    int data_ultrasonic = (i2c_request(2));
  //Serial.println(data_ultrasonic);
  return data_ultrasonic;
}
void set_pin_dht(uint8_t dht_pin,uint8_t dht_type){
  i2c_send(header);i2c_send(setpin_dht);i2c_send(dht_pin);i2c_send(dht_type);
  delay(100);
}
int dht_Read(bool type_data){
    i2c_send(header);i2c_send(read_dht);i2c_send(type_data);
    int data_dht = (i2c_request(2));
  //Serial.println(data_dht);
  return data_dht;
}
void set_pin_ds18b20(uint8_t ds_pin){
  i2c_send(header);i2c_send(setpin_ds18b20);i2c_send(ds_pin);
  delay(100);
}
int ds18b20_Read(){
    i2c_send(header);i2c_send(read_ds18b20);
    int data_ds18b20 = (i2c_request(2));
  //Serial.println(data_ds18b20);
  return data_ds18b20;
}
void setup_KB_Exten(){
  Wire1.begin(4, 5);
  i2c_send(header);
  i2c_send(reset_board);
  i2c_send(stop_bit);
  motor(1,1,0);
  motor(2,1,0);
  delay(100);
}
void servo_moving(uint8_t ch,uint8_t present_angle,uint8_t traget_angle,int speed_servo){
  if(present_angle > traget_angle){
    for(int i = present_angle;i>traget_angle;i-=2){
      servo_write(ch,i);delay(speed_servo);
    }
    
  }
  else if(present_angle <= traget_angle){
   for(int i = present_angle;i<traget_angle;i+=2){
      servo_write(ch,i);delay(speed_servo);
    }
  }
}
bool servo_run(int ch,int traget_angle,int speed_servo,int servo_dif){
  if(ch == 0){
    if((present_angleS1 - traget_angle) >servo_dif+1){present_angleS1 -= servo_dif;}
    else if((traget_angle - present_angleS1) >servo_dif+1){present_angleS1 += servo_dif;}
    else{return 1;}servo_write(ch,present_angleS1);delay(speed_servo);return 0;
  }
  if(ch == 1){
    if((present_angleS2 - traget_angle) >servo_dif+1){present_angleS2 -= servo_dif;}
    else if((traget_angle - present_angleS2) >servo_dif+1){present_angleS2 += servo_dif;}
    else{return 1;}servo_write(ch,present_angleS2);delay(speed_servo);return 0;
  }
  if(ch == 2){
    if((present_angleS3 - traget_angle) >servo_dif+1){present_angleS3 -= servo_dif;}
    else if((traget_angle - present_angleS3) >servo_dif+1){present_angleS3 += servo_dif;}
    else{return 1;}servo_write(ch,present_angleS3);delay(speed_servo);return 0;
  }
  if(ch == 3){
    if((present_angleS4 - traget_angle) >servo_dif+1){present_angleS4 -= servo_dif;}
    else if((traget_angle - present_angleS4) >servo_dif+1){present_angleS4 += servo_dif;}
    else{return 1;}servo_write(ch,present_angleS4);delay(speed_servo);return 0;
  }
}