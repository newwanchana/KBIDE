
#include <Arduino.h>
#include <Wire.h>  
#include <SPI.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include "SSD1306Wire.h"
#include "SH1106.h"
#include "RapbitPro_Motor_drive.h"
#include "RapbitPro_Servo_lib.h"
#include "RapbitPro_IO.h"
#include "Adafruit_NeoPixel.h"

//#include "irremote/IRremote.h"
//#include "BluetoothSerial.h"
//BluetoothSerial SerialBT;


SSD1306Wire display(0x3c, 21, 22);
Adafruit_NeoPixel pixels(4, 13, NEO_GRB + NEO_KHZ800);



uint16_t sensor_pin[] = {25, 33, 32, 35, 34,15,39}; // พอตเซ็นเซอร์ที่ใช้งาน
uint16_t min_sensor_values[] = {100, 100, 100, 100, 100, 100, 100}; //ค่าที่อ่านได้น้อยสุดหรือ สีดำ
uint16_t max_sensor_values[] = {1023, 1023, 1023, 1023, 1023, 1023, 1023} ; //ค่าที่อ่านได้มากสุด สีขาว
uint8_t line_color = 0;

uint16_t state_on_Line = 0;
uint32_t _lastPosition;
float Kp = 0.2;
float Ki = 0;
float Kd = 0;
int current_degree_servo = 90;

#define M1A 17
#define M1B 16
#define M2A 18
#define M2B 5
#define _sw 23

int sw1(){
  pinMode(_sw,INPUT);
  return digitalRead(_sw);
}
int SW1(){
  pinMode(_sw,INPUT);
  return digitalRead(_sw);
}
int sw_ok(){
  pinMode(_sw,INPUT);
  return digitalRead(_sw);
}

int state_IMU = 0;
void draw_pixel(int16_t x, int16_t y)
{
  display.setColor(WHITE);
  display.setPixel(x, y);
}

void clear_pixel(int16_t x, int16_t y)
{
  display.setColor(BLACK);
  display.setPixel(x, y);
}
void RapbitPro(){
  Serial.begin(115200);
  //SerialBT.begin(115200);
 //SerialBT.begin("Rapbit32");
  Serial.println("Runing ");
  pinMode(23,INPUT_PULLUP);
  pinMode(25,OUTPUT);
  pinMode(19,OUTPUT);
  display.init();
  display.flipScreenVertically();
  display.setFont(ArialMT_Plain_24);
  display.drawString(15,0,"Rapbit32");
  display.drawString(15,30,"Welcome");
  display.display();
  delay(700);
  display.clear();
  display.display();
  pixels.begin();
  pixels.setBrightness(50);
  //pixels.setPixelColor(0, pixels.Color(100, 0, 0));
  pixels.show();
  //irrecv.enableIRIn();
  pinMode(M1A,OUTPUT);
  pinMode(M1B,OUTPUT);
  pinMode(M2A,OUTPUT);
  pinMode(M2B,OUTPUT);
  ledcSetup(6, 5000, 8);
  ledcSetup(7, 5000, 8);
  ledcSetup(4, 5000, 8);
  ledcSetup(5, 5000, 8);
  ledcAttachPin(M1A, 6);
  ledcAttachPin(M1B, 7);
  ledcAttachPin(M2A, 4);
  ledcAttachPin(M2B, 5);
  analogReadResolution(10);
  
}
int Knob_sensor(){
  return analogRead(36);
}
// void beep(){
//   int _buzzer = 4;
//   pinMode(_buzzer,OUTPUT);
//   digitalWrite(_buzzer,HIGH);
//   delay(200); 
//   digitalWrite(_buzzer,LOW);
// }
// void beep(int _delay){
//   int _buzzer = 4;
//   pinMode(_buzzer,OUTPUT);
//   digitalWrite(_buzzer,HIGH);
//   delay(_delay);
//   digitalWrite(_buzzer,LOW);
// }
void buzzer_(int freq, int timr_delay) {
  pinMode(12, OUTPUT);
  ledcSetup(3, 5000, 8);
  ledcAttachPin(12,3);
  ledcWriteTone(3, freq);
  delay(timr_delay);
  
}


void beep(){
  buzzer_(1000,200);
  buzzer_(0,200);
}
void beep_on(){
  buzzer_(1000,200);
}
void beep_off(){
  buzzer_(0,200);
}
void beep(int _delay){
  buzzer_(1000,_delay);
  buzzer_(0,1);
}
float voltage_sensor(){
  return analogRead(14)*0.00464;
}

void wait(){
  pinMode(23,INPUT_PULLUP);
  display.clear();
  display.setFont(ArialMT_Plain_24);
  display.drawString(15,0,"Rapbit32");
  display.drawString(15,30,"Welcome");
  display.display();
  delay(700);
  while(digitalRead(23) == 1){
	  	display.clear();
	  	display.drawString(30,0,"Ready");
      display.drawString(10,30,"press_SW1");
	  	display.display();
	  	delay(100);
      display.clear();
      display.display();
      delay(100);
  }
  delay(200);
  beep();
  display.clear();
  display.display();
}
void Read_ADC(){
  pinMode(23,INPUT_PULLUP);
  display.clear();
  display.setFont(ArialMT_Plain_24);
  display.drawString(15,0,"Read");
  display.drawString(15,30,"Analog");
  display.display();
  delay(700);
  display.setFont(ArialMT_Plain_10);
  while(digitalRead(23) == 1){
      display.clear();
      display.drawString(0,0,String(String("L1::")));
      display.drawString(28,0,String(analogRead(25)));
      display.drawString(65,0,String(String("L2::")));
      display.drawString(93,0,String(analogRead(33)));
      display.drawString(0,16,String(String("L3::")));
      display.drawString(28,16,String(analogRead(32)));
      display.drawString(65,16,String(String("L4::")));
      display.drawString(93,16,String(analogRead(35)));
      display.drawString(0,32,String(String("L5::")));
      display.drawString(28,32,String(analogRead(34)));
      display.drawString(65,32,String(String("L6::")));
      display.drawString(93,32,String(analogRead(15)));
      display.drawString(0,45,String(String("L7::")));
      display.drawString(28,45,String(analogRead(39)));
      display.drawString(65,45,String(String("Knob::")));
      display.drawString(93,45,String(analogRead(36)));
      display.display();
      delay(100);
  }
  beep();
  delay(500);
  display.clear();
  display.display();
}
float ultrasonic(){
  int ECHO = 27;
  int TRIG = 26;
  pinMode(ECHO,INPUT);
  pinMode(TRIG,OUTPUT);
  long duration = 0;
  for(int round_ultra = 0;round_ultra < 3;round_ultra++ ){
  	digitalWrite(TRIG, LOW);
	delayMicroseconds(2);
	digitalWrite(TRIG, HIGH);
	delayMicroseconds(10);
	digitalWrite(TRIG, LOW);
	duration += pulseIn(ECHO, HIGH);
	delay(2);
  }

  // Calculating the distance
  return (duration/3)*0.034/2;
}

void Rapbit32_setBrightness(uint8_t num){
  pixels.setBrightness(num);
  pixels.show();
}
void Rapbit32_setColor(int R,int G,int B){
  for(int i = 0;i<5;i++){
    pixels.setPixelColor(i, pixels.Color(R, G, B));
  }
  pixels.show();
}
void Rapbit32_setPixel(int num,int R,int G,int B){
  if(num == 0){
    Rapbit32_setColor(R,G,B);
  }
  else{
    pixels.setPixelColor(num-1, pixels.Color(R, G, B));
    pixels.show();
  }
  
}
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos; 
  if (WheelPos < 85) {
    return pixels.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  } 
  
  if (WheelPos < 170) {
    WheelPos -= 85;return pixels.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  } 
  
  WheelPos -= 170; return pixels.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
} 

void Rapbit32_rainbow(int wait) {

  uint16_t i, j;
  for (j = 0; j < 256; j++) {
   for (i = 0; i < pixels.numPixels(); i++) {
    pixels.setPixelColor(i, Wheel((i + j) & 255));
    }
    pixels.show();
    delay(wait);
  }
}
/*long irremote_sensor(){
  long d = 0;
  if (irrecv.decode(&results)) {
     d = results.value;
    irrecv.resume();
  }
  delay(100);
  return d;
}*/
int ReadLightSensor(int analog_CH) {
  int value = 0;

  if(line_color == 0)value= map(analogRead(sensor_pin[analog_CH]), min_sensor_values[analog_CH], max_sensor_values[analog_CH], 100, 0);
  else if (line_color == 1) value= map(analogRead(sensor_pin[analog_CH]), min_sensor_values[analog_CH], max_sensor_values[analog_CH], 0, 100);
  if(value < 0)value = 0;
  else if(value >100)value = 100;
  return value;
}

int readline()   
{                
  
  bool onLine = false;
  long avg = 0;
  long sum = 0;
  for (uint8_t i = 0; i < 5 ; i++) 
  {
    long value = ReadLightSensor(i);    
    if (value > 20) { 
    	onLine = true;
    }
    if (value > 5){
      avg += (long)value * (i * 100);
      sum += value;
    }
  }
  if (!onLine)
  {
    if (_lastPosition < 200){
      return 0;
    }
    else{
      return 400;
    }
  }
  _lastPosition = avg / sum;
  return _lastPosition;
}
int readline_2()   
{                
  
  bool onLine = false;
  long avg = 0;
  long sum = 0;
  for (uint8_t i = 0; i < 5 ; i++) 
  {
    long value = ReadLightSensor(i);    
    if (value > 20) { 
      onLine = true;
    }
    if (value > 5){
      avg += (long)value * (i * 100);
      sum += value;
    }
  }
  if (!onLine)
  {
    if (_lastPosition < 100){
      return 0;
    }
    if (_lastPosition > 300){
      return 400;
    }
    else{
      return 200;
    }
  }
  _lastPosition = avg / sum;
  return _lastPosition;
}
void control_servo(int servo_ch,int servo_degree,int traget_degree,int servo_speed){
	if(abs(current_degree_servo - traget_degree) > 2){
		if(servo_degree < traget_degree ){
			for(int i = servo_degree;i<traget_degree;i++){
				servo(servo_ch,i);
				delay(servo_speed);
				current_degree_servo = i;
			}
		}
		else {
			for(int i = servo_degree;i>traget_degree;i--){
				servo(servo_ch,i);
				delay(servo_speed);
				current_degree_servo = i;
			}
		}
	}
}
void Run_PID(int speed_motor,float kp,float kd){
  uint16_t setpoint;
  float present_position;
  float errors = 0;
  float output = 0;
  float integral ;
  float derivative ;
  float previous_error ;
    int speed_max = speed_motor;
    present_position = readline() ;
    setpoint = 200.0;
    errors = setpoint - present_position;
    derivative = (errors - previous_error) ;
    output = kp * errors + kd * derivative;
    int max_output = 100;
    if (output > max_output )output = max_output;
    else if (output < -max_output)output = -max_output;
    motor(1,speed_max - output);
    motor(2,speed_max + output);
    delay(1);
    previous_error = errors;
}
void Run_until_frontsensor(int speed_motor,float kp,float kd,int value_to_stop) {
  uint16_t setpoint;
  float present_position;
  float errors = 0;
  float output = 0;
  float integral ;
  float derivative ;
  float previous_error ;
  int speed_max = speed_motor;

  while((ReadLightSensor(0)+ReadLightSensor(1)+ReadLightSensor(2)+ReadLightSensor(3)+ReadLightSensor(4)) < value_to_stop) {
    present_position = readline() ;
    setpoint = 200.0;
    errors = setpoint - present_position;
    derivative = (errors - previous_error) ;
    output = kp * errors + kd * derivative;
    int max_output = 100;
    if (output > max_output )output = max_output;
    else if (output < -max_output)output = -max_output;
    motor(1,speed_max - output);
    motor(2,speed_max + output);
    delay(1);
    previous_error = errors;
  }
  motor(1,0);
  motor(2,0);
  delay(10);
}
void Run_until_backsensor(int speed_motor,float kp,float kd,int value_to_stop) {
  uint16_t setpoint;
  float present_position;
  float errors = 0;
  float output = 0;
  float integral ;
  float derivative ;
  float previous_error ;
  int speed_max = speed_motor;

  while((ReadLightSensor(5)+ReadLightSensor(6)) < value_to_stop) {
    present_position = readline_2() ;
    setpoint = 200.0;
    errors = setpoint - present_position;
    derivative = (errors - previous_error) ;
    output = kp * errors + kd * derivative;
    int max_output = 100;
    if (output > max_output )output = max_output;
    else if (output < -max_output)output = -max_output;
    motor(1,speed_max - output);
    motor(2,speed_max + output);
    delay(1);
    previous_error = errors;
  }
  motor(1,0);
  motor(2,0);
  delay(10);
}
void setCalibrate(int cal_round) {
  for (uint8_t i = 0; i < 7; i++){
    max_sensor_values[i] = 0;
    min_sensor_values[i] = 1023;
  }
  
  for (int round_count = 0; round_count < cal_round; round_count ++ ) {

    for (uint8_t i = 0; i < 7; i++)
    {
      if (analogRead(sensor_pin[i]) > max_sensor_values[i] ) {
        max_sensor_values[i]  = analogRead(sensor_pin[i]);
        if (max_sensor_values[i] > 1023 )max_sensor_values[i] = 1023;
      }
    }
    for (uint8_t i = 0; i < 7; i++)
    {
      if (analogRead(sensor_pin[i]) < min_sensor_values[i] ) {
        min_sensor_values[i] = analogRead(sensor_pin[i]);
        if (min_sensor_values[i] < 0) min_sensor_values[i] = 0;
      }
    }
    delay(1);
  }
  display.setFont(ArialMT_Plain_10);
  display.clear();
  display.drawString(0,0,String(String("L1 Min::")));
  display.drawString(45,0,String(min_sensor_values[0]));
  display.drawString(70,0,String(String("Max::")));
  display.drawString(100,0,String(max_sensor_values[0]));
  display.drawString(0,8,String(String("L2 Min::")));
  display.drawString(45,8,String(min_sensor_values[1]));
  display.drawString(70,8,String(String("Max::")));
  display.drawString(100,8,String(max_sensor_values[1]));
  display.drawString(0,16,String(String("L3 Min::")));
  display.drawString(45,16,String(min_sensor_values[2]));
  display.drawString(70,16,String(String("Max::")));
  display.drawString(100,16,String(max_sensor_values[2]));
  display.drawString(0,24,String(String("L4 Min::")));
  display.drawString(45,24,String(min_sensor_values[3]));
  display.drawString(70,24,String(String("Max::")));
  display.drawString(100,24,String(max_sensor_values[3]));
  display.drawString(0,32,String(String("L5 Min::")));
  display.drawString(45,32,String(min_sensor_values[4]));
  display.drawString(70,32,String(String("Max::")));
  display.drawString(100,32,String(max_sensor_values[4]));
  display.drawString(0,40,String(String("L6 Min::")));
  display.drawString(45,40,String(min_sensor_values[5]));
  display.drawString(75,40,String(String("Max::")));
  display.drawString(100,40,String(max_sensor_values[5]));
  display.drawString(0,48,String(String("L7 Min::")));
  display.drawString(45,48,String(min_sensor_values[6]));
  display.drawString(70,48,String(String("Max::")));
  display.drawString(100,48,String(max_sensor_values[6]));
  display.display();
  while(digitalRead(23) == 1){
      
      delay(100);
  }
  beep();
  delay(500);
  display.clear();
  display.display();
  
}
void spin_Left_90degree(float speed_motor ,int timer){
  unsigned long timer_ = millis();
  motor(1,-speed_motor);
  motor(2,speed_motor);
  delay(100);
  while(analogRead(25) > (min_sensor_values[0]+max_sensor_values[0]) / 2 ){
    if((millis() - timer_) > timer){
      ao();
      delay(10);
      break;
    }
    motor(1,-speed_motor);
    motor(2,speed_motor);
  }
  motor(1,0);
  motor(2,0);
  delay(10);
  ao();
  delay(10);
  motor(1,1,0);
  motor(2,1,0);
  delay(10);

}
void spin_Right_90degree(float speed_motor ,int timer){
  unsigned long timer_ = millis();
  motor(1,speed_motor);
  motor(2,-speed_motor);
  delay(100);
  while(analogRead(34) > (min_sensor_values[4]+max_sensor_values[4]) / 2 ){
    if((millis() - timer_) > timer){
      ao();
      delay(10);
      break;
    }
    motor(1,speed_motor);
    motor(2,-speed_motor);
  }
  motor(1,0);
  motor(2,0);
  delay(10);
  ao();
  delay(10);
  motor(1,1,0);
  motor(2,1,0);
  delay(10);

}

void setMin_of_sensor(int L1,int L2,int L3,int L4,int L5,int L6,int L7){
  min_sensor_values[0] = L1;
  min_sensor_values[1] = L2;
  min_sensor_values[2] = L3;
  min_sensor_values[3] = L4;
  min_sensor_values[4] = L5;
  min_sensor_values[5] = L6;
  min_sensor_values[6] = L7;
}
void setMax_of_sensor(int L1,int L2,int L3,int L4,int L5,int L6,int L7){
  max_sensor_values[0] = L1;
  max_sensor_values[1] = L2;
  max_sensor_values[2] = L3;
  max_sensor_values[3] = L4;
  max_sensor_values[4] = L5;
  max_sensor_values[5] = L6;
  max_sensor_values[6] = L7;
}
