
#include <Arduino.h>
#include <Wire.h>  
#include <SPI.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include "SSD1306Wire.h"
#include "SH1106.h"
#include "Rapbit32_Motor_drive.h"
#include "Rapbit32_Servo_lib.h"
#include "Rapbit32_IO.h"
#include "Adafruit_NeoPixel.h"

//#include "irremote/IRremote.h"
//#include "BluetoothSerial.h"
//BluetoothSerial SerialBT;


SSD1306Wire display(0x3c, 21, 22);
Adafruit_NeoPixel pixels(4, 13, NEO_GRB + NEO_KHZ800);

//IRrecv irrecv(14);
//decode_results results;

uint16_t sensor_pin[] = {33, 35, 39}; // พอตเซ็นเซอร์ที่ใช้งาน
uint16_t min_sensor_values[] = {100, 100, 100}; //ค่าที่อ่านได้น้อยสุดหรือ สีดำ
uint16_t max_sensor_values[] = {1000, 1000, 1000} ; //ค่าที่อ่านได้มากสุด สีขาว

uint16_t state_on_Line = 0;
uint32_t _lastPosition;
float Kp = 1;
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
void Rapbit32(){
  Serial.begin(115200);
  //SerialBT.begin(115200);
 //SerialBT.begin("Rapbit32");
  Serial.println("Runing ");
  pinMode(23,INPUT);
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
void beep(){
  int _buzzer = 4;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
  delay(200); 
  digitalWrite(_buzzer,LOW);
}
void beep(int _delay){
  int _buzzer = 4;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
  delay(_delay);
  digitalWrite(_buzzer,LOW);
}
float voltage_sensor(){
  return analogRead(14)*0.00464;
}
void beep_on(){
  int _buzzer = 4;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
}
void beep_off(){
  int _buzzer = 4;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,LOW);
}
void wait(){
  pinMode(23,INPUT);
  display.clear();
  display.setFont(ArialMT_Plain_24);
  display.drawString(15,0,"Rapbit32");
  display.drawString(15,30,"Welcome");
  display.display();
  delay(700);
  while(digitalRead(23) == 1){
	  	display.clear();
	  	display.drawString(30,0,"Ready");
      display.drawString(10,30,"press_OK");
	  	display.display();
	  	delay(100);
      display.clear();
      display.display();
      delay(100);
  }
  beep();
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
int readline()   
{                
  
  bool onLine = false;
  long avg = 0;
  long sum = 0;
  for (uint8_t i = 0; i < 3 ; i++) 
  {
    long value = map(analogRead(sensor_pin[i]), min_sensor_values[i], max_sensor_values[i], 100, 0);    
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
void Run_PID(int speed_motor,float kp,float ki,float kd){
  uint16_t setpoint;
  float present_position;
  float errors = 0;
  float output = 0;
  float integral ;
  float derivative ;
  float previous_error ;
    int speed_max = speed_motor;
    present_position = readline() ;
    setpoint = 100.0;
    errors = setpoint - present_position;
    integral = integral + errors ;
    derivative = (errors - previous_error) ;
    output = kp * errors + ki * integral + kd * derivative;
    int max_output = 100;
    if (output > max_output )output = max_output;
    else if (output < -max_output)output = -max_output;
    motor(1,speed_max - output);
    motor(2,speed_max + output);
    delay(1);
    previous_error = errors;
}
