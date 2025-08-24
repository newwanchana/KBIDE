
#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <Wire.h>  
#include <SPI.h>
#include "SSD1306Wire.h"
#include "NKP_V2Motor_drive.h"
#include "NKP_V2Servo_lib.h"
#include "Adafruit_TCS34725.h"
#include "NKP_V2Interrupt.h"
#include <MPU6050_tockn.h>
#include "dw_font.h"


#define M1A 19
#define M1B 18
#define M2A 5
#define M2B 17
#define M3A 16
#define M3B 4
#define M4A 2
#define M4B 15
#define Knob_pin 33 




MPU6050 mpu6050(Wire);


SSD1306Wire display(0x3C, 21, 22);

Adafruit_TCS34725 tcs = Adafruit_TCS34725();



int PID_NumPin = 3;
int Front_color = 0;
int Front_sensitive = 20;
int PID_SetupPin[] = {0,0,0,0,0,0,0,0};
int PID_Min[] = {10,10,10,10,10,10,10,10};
int PID_Max[] = {4000,4000,4000,4000,4000,4000,4000,4000};
float errors = 0;
float output = 0;
float integral = 0;
float derivative = 0;
float previous_error = 0;
uint16_t state_on_Line = 0;
uint32_t _lastPosition;
bool first_state_for_calribrate = 0;

int PID_NumPin_B = 3;
int Back_color = 0;
int Black_sensitive = 20;
int PID_SetupPin_B[] = {0,0,0,0,0,0,0,0};
int PID_Min_B[] = {10,10,10,10,10,10,10,10};
int PID_Max_B[] = {4000,4000,4000,4000,4000,4000,4000,4000};
float errors_B = 0;
float output_B = 0;
float integral_B = 0;
float derivative_B = 0;
float previous_error_B = 0;
uint16_t state_on_Line_B = 0;
uint32_t _lastPosition_B;
bool first_state_for_calribrate_B = 0;


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
int _Knob(){
  return analogRead(36);
}
void ESPRobotV2(){
  pinMode(M1A,OUTPUT);
  pinMode(M1B,OUTPUT);
  pinMode(M2A,OUTPUT);
  pinMode(M2B,OUTPUT);
  pinMode(M3A,OUTPUT);
  pinMode(M3B,OUTPUT);
  pinMode(M4A,OUTPUT);
  pinMode(M4B,OUTPUT);
  pinMode(12,OUTPUT);
  ledcSetup(6, 5000, 8);
  ledcSetup(7, 5000, 8);
  ledcSetup(4, 5000, 8);
  ledcSetup(5, 5000, 8);
  ledcSetup(3, 5000, 8);
  ledcSetup(2, 5000, 8);
  ledcSetup(8, 5000, 8);
  ledcSetup(9, 5000, 8);
  ledcAttachPin(M1A, 6);
  ledcAttachPin(M1B, 7);
  ledcAttachPin(M2A, 4);
  ledcAttachPin(M2B, 5);
  ledcAttachPin(M3A, 3);
  ledcAttachPin(M3B, 2);
  ledcAttachPin(M4A, 8);
  ledcAttachPin(M4B, 9);
  display.init();
  display.flipScreenVertically();
}


int analog(int _pin){
  if(_pin == 0){return analogRead(39);}
    if(_pin == 1){return analogRead(34);}
    else if(_pin == 2){return analogRead(35);}
    else if(_pin == 3){return analogRead(32);}
    else if(_pin == 4){return analogRead(33);}
    else if(_pin == 5){return analogRead(25);}
  
}
int IN(int _pin){
  pinMode(_pin,INPUT);
  return digitalRead(_pin);
  
}

void set_IMU(){
  delay(500);
  display.clear();
  display.setFont(ArialMT_Plain_16);
  display.drawString(15,0,"IMU_Calibrat");
  display.drawString(25,17,"3 Second");
  display.drawString(18,35,"Don't Move");
  display.display();
  mpu6050.begin();
  mpu6050.calcGyroOffsets(true);
  mpu6050.update();
  if((1000+ mpu6050.getAngleX()) > 1100 || (1000+ mpu6050.getAngleX()) < 900 ||
  	 (1000+ mpu6050.getAngleY()) > 1100 || (1000+ mpu6050.getAngleY()) < 900 ||
  	 (1000+ mpu6050.getAngleZ()) > 1100 || (1000+ mpu6050.getAngleZ()) < 900 )
  {
  	mpu6050.calcGyroOffsets(true);
  	mpu6050.update();
  }
  display.clear();
  display.drawString(0,0,"AngleX:");
  display.drawString(70,0,String(1000 + mpu6050.getAngleX()));
  display.drawString(0,17,"AngleY:");
  display.drawString(70,17,String(1000 + mpu6050.getAngleY()));
  display.drawString(0,35,"AngleZ:");
  display.drawString(70,35,String(1000 + mpu6050.getAngleZ()));
  display.display();
  delay(700);
  state_IMU = 1;
}
int Read_angle(int angle_){
	
	if(state_IMU == 0){
		set_IMU();
	}
	else{
	mpu6050.update();
	    if(angle_ == 0){
	    	return 1000+mpu6050.getAngleX();
		}
		else if(angle_ == 1){
		    return  1000+mpu6050.getAngleY();
		}
		else if(angle_ == 2){
		    return  1000+mpu6050.getAngleZ();
		}
	}
	
}
void buzzer(int freq, int timr_delay) {
  pinMode(12, OUTPUT);
  ledcSetup(10, 5000, 8);
  ledcAttachPin(12,10);
  ledcWriteTone(10, freq);
  delay(timr_delay);
  
}


void beep(){
  buzzer(1000,200);
  buzzer(0,200);
}
void beep_on(){
  buzzer(1000,200);
}
void beep_off(){
  buzzer(0,200);
}
void beep(int _delay){
  buzzer(1000,_delay);
  buzzer(0,1);
}



void wait(){
  pinMode(23,INPUT);
  display.clear();
  display.setFont(ArialMT_Plain_24);
  display.drawString(0,0,"Press OK ");
  display.drawString(0,25,"To Start");
  display.display();
  delay(700);
  display.setFont(ArialMT_Plain_16);
  while(digitalRead(23) == 1){
	  	// display.clear();
	  	// display.drawString(0,0,String(String("A1::")));
	  	// display.drawString(28,0,String(analog(1)));
	  	// display.drawString(65,0,String(String("A2::")));
	  	// display.drawString(93,0,String(analog(2)));
	  	// display.drawString(0,12,String(String("A3::")));
	  	// display.drawString(28,12,String(analog(3)));
	 	 //  display.drawString(65,12,String(String("A4::")));
	  	// display.drawString(93,12,String(analog(4)));
	  	// display.drawString(0,24,String(String("A5::")));
	  	// display.drawString(28,24,String(analog(5)));
	  	// display.display();
	  	// delay(100);
   
  }
  beep();
  display.clear();
  display.display();
  delay(500);
}
float Read_Color_TCS(int color_of_sensor){
  uint16_t clearcol_lib, red_lib, green_lib, blue_lib;
 float average_lib, r_lib, g_lib, b_lib;
 //delay(100); // Farbmessung dauert c. 50ms 
 tcs.getRawData(&red_lib, &green_lib, &blue_lib, &clearcol_lib);
 average_lib = (red_lib+green_lib+blue_lib)/3;
 r_lib = red_lib/average_lib;
 g_lib = green_lib/average_lib;
 b_lib = blue_lib/average_lib;
 if(color_of_sensor == 0){
  return r_lib*100;
 }
 else if(color_of_sensor == 1){
  return g_lib*100;
 }
  else if(color_of_sensor == 2){
  return b_lib*100;
 }
}
void set_Front_color(){

}
void PID_set_Min(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_Min[0] = S0;PID_Min[1] = S1;PID_Min[2] = S2;PID_Min[3] = S3;
  PID_Min[4] = S4;PID_Min[5] = S5;PID_Min[6] = S6;PID_Min[7] = S7;
}
void PID_set_Max(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_Max[0] = S0;PID_Max[1] = S1;PID_Max[2] = S2;PID_Max[3] = S3;
  PID_Max[4] = S4;PID_Max[5] = S5;PID_Max[6] = S6;PID_Max[7] = S7;
}
void PID_set_Pin(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_SetupPin[0] = S0;PID_SetupPin[1] = S1;PID_SetupPin[2] = S2;PID_SetupPin[3] = S3;
  PID_SetupPin[4] = S4;PID_SetupPin[5] = S5;PID_SetupPin[6] = S6;PID_SetupPin[7] = S7;
}
void setCalibrate(int round){
  display.clear();
  display.setFont(ArialMT_Plain_24);
  display.drawString(0,0,"Front Sensor");
  display.drawString(0,25,"  Calribrate  ");
  display.display();
  if(first_state_for_calribrate == 0){
    for (uint8_t i = 0; i < PID_NumPin; i++)
    {
      PID_Max[i] = 0;
      PID_Min[i] = 4095;
    }
    first_state_for_calribrate = 1;
  }
  for(int roundOfCalribtate = 0; roundOfCalribtate < round ;roundOfCalribtate++ ){
    for (uint8_t i = 0; i < PID_NumPin; i++)
    {
      if(analog(PID_SetupPin[i]) > PID_Max[i] || PID_Max[i] >= 4095 ){
        PID_Max[i]  = analog(PID_SetupPin[i]);
        if(PID_Max[i] > 4095 )PID_Max[i] = 4095;
      }
    }
    for (uint8_t i = 0; i < PID_NumPin; i++)
    {
      if(analog(PID_SetupPin[i]) < PID_Min[i] || PID_Min[i] == 0){
        PID_Min[i] = analog(PID_SetupPin[i]);
        if(PID_Min[i] < 0) PID_Min[i] = 0;
      }
    }
    delay(1);
  }
  display.clear();
    
}
int ReadSensorMinValue(uint8_t _Pin){
    return PID_Min[_Pin];
}
int ReadSensorMaxValue(uint8_t _Pin){
    return PID_Max[_Pin];
}

int readline()   
{                
  bool onLine = false;
  long avg = 0;
  long sum = 0;
  for (uint8_t i = 0; i < PID_NumPin ; i++) 
  {
  	long value;
  	if(Front_color == 0){
  		value = map(analog(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 100, 0);
  	}
  	else {
  		value = map(analog(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 0, 100);
  	}
    
    value = constrain(value,0,100);      
    if (value > Front_sensitive) { 
      onLine = true;
    }
    if (value > 5){
      avg += (long)value * (i * 100);
      sum += value;
    }
  }
  if (!onLine)
  {
    if (_lastPosition < ((PID_NumPin-1) * 100)/2){
      return 0;
    }
    else{
      return ((PID_NumPin-1) * 100);
    }
  }
  _lastPosition = avg / sum;
  return _lastPosition;
}
void Run_PID(int RUN_PID_speed,float RUN_PID_KP,float RUN_PID_KD){
  
  int present_position = readline();
  int setpoint = ((PID_NumPin - 1) * 100) / 2;
  errors = present_position - setpoint;
  integral = integral + errors ;
  derivative = (errors - previous_error) ;
  output = RUN_PID_KP * errors  + RUN_PID_KD * derivative;
    
  int m1Speed = RUN_PID_speed + output ;
  int m2Speed = RUN_PID_speed - output;
  motor(1,m1Speed);
  motor(2,m2Speed);
  delay(1);
  previous_error = errors;
}
void Run_PID_4WD(int RUN_PID_speed,float RUN_PID_KP,float RUN_PID_KD){
  
  int present_position = readline();
  int setpoint = ((PID_NumPin - 1) * 100) / 2;
  errors = present_position - setpoint;
  integral = integral + errors ;
  derivative = (errors - previous_error) ;
  output = RUN_PID_KP * errors  + RUN_PID_KD * derivative;
    
  int m1Speed = RUN_PID_speed + output ;
  int m2Speed = RUN_PID_speed - output;
  motor(1,m1Speed);
  motor(2,m2Speed);
  motor(3,m1Speed);
  motor(4,m2Speed);
  delay(1);
  previous_error = errors;
}

void PID_set_Min_B(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_Min_B[0] = S0;PID_Min_B[1] = S1;PID_Min_B[2] = S2;PID_Min_B[3] = S3;
  PID_Min_B[4] = S4;PID_Min_B[5] = S5;PID_Min_B[6] = S6;PID_Min_B[7] = S7;
}
void PID_set_Max_B(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_Max_B[0] = S0;PID_Max_B[1] = S1;PID_Max_B[2] = S2;PID_Max_B[3] = S3;
  PID_Max_B[4] = S4;PID_Max_B[5] = S5;PID_Max_B[6] = S6;PID_Max_B[7] = S7;
}
void PID_set_Pin_B(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_SetupPin_B[0] = S0;PID_SetupPin_B[1] = S1;PID_SetupPin_B[2] = S2;PID_SetupPin_B[3] = S3;
  PID_SetupPin_B[4] = S4;PID_SetupPin_B[5] = S5;PID_SetupPin_B[6] = S6;PID_SetupPin_B[7] = S7;
}
int readline_B()   
{                
  bool onLine_B = false;
  long avg_B = 0;
  long sum_B = 0;
  for (uint8_t i = 0; i < PID_NumPin_B ; i++) 
  {
  	long value_B;
  	if(Back_color == 0){
  		value_B = map(analog(PID_SetupPin_B[i]), PID_Min_B[i], PID_Max_B[i], 100, 0);
  	}
    else {
    	value_B = map(analog(PID_SetupPin_B[i]), PID_Min_B[i], PID_Max_B[i], 0, 100);
    }
    value_B = constrain(value_B,0,100); 
    if (value_B > Black_sensitive) { 
      onLine_B = true;
    }
    if (value_B > 5){
      avg_B += (long)value_B * (i * 100);
      sum_B += value_B;
    }
  }
  if (!onLine_B)
  {
    if (_lastPosition_B < ((PID_NumPin_B-1) * 100)/2){
      return 0;
    }
    else{
      return ((PID_NumPin_B-1) * 100);
    }
  }
  _lastPosition_B = avg_B / sum_B;
  return _lastPosition_B;
}
void Run_PID_B(int RUN_PID_speed,float RUN_PID_KP,float RUN_PID_KD){
  int present_position_B = readline_B();
  int setpoint_B = ((PID_NumPin_B - 1) * 100) / 2;
  errors_B = present_position_B - setpoint_B;
  integral_B = integral_B + errors_B ;
  derivative_B = (errors_B - previous_error_B) ;
  output_B = RUN_PID_KP * errors_B  + RUN_PID_KD * derivative_B;
  
  int m1Speed = RUN_PID_speed + output_B ;
  int m2Speed = RUN_PID_speed - output_B;

  motor(1,-m1Speed);
  motor(2,-m2Speed);
  delay(1);
  previous_error_B = errors_B;
}
void Run_PID_B_4WD(int RUN_PID_speed,float RUN_PID_KP,float RUN_PID_KD){
  int present_position_B = readline_B();
  int setpoint_B = ((PID_NumPin_B - 1) * 100) / 2;
  errors_B = present_position_B - setpoint_B;
  integral_B = integral_B + errors_B ;
  derivative_B = (errors_B - previous_error_B) ;
  output_B = RUN_PID_KP * errors_B  + RUN_PID_KD * derivative_B;
  
  int m1Speed = RUN_PID_speed + output_B ;
  int m2Speed = RUN_PID_speed - output_B;

  motor(1,-m1Speed);
  motor(2,-m2Speed);
  motor(3,-m1Speed);
  motor(4,-m2Speed);
  delay(1);
  previous_error_B = errors_B;
}
long readDistance(int Trig,int Echo){
  long duration, cm;
  pinMode(Echo, OUTPUT);
  digitalWrite(Echo, 0);
  delayMicroseconds(2);
  digitalWrite(Echo, 1);
  delayMicroseconds(5);
  digitalWrite(Echo, 0);
  pinMode(Trig, INPUT);
  duration = pulseIn(Trig, 1);
  return duration / 29 / 2;
}
bool Read_status_sensor(int pin_sensor){
	return analog(PID_SetupPin[pin_sensor]) < ((PID_Max[pin_sensor] + PID_Min[pin_sensor]) / 2) ? true : false;
}
bool Read_status_sensor_B(int pin_sensor){
	return analog(PID_SetupPin_B[pin_sensor]) < ((PID_Max_B[pin_sensor] + PID_Min_B[pin_sensor]) / 2) ? true : false;
}
void setCalibrate_B(int round){
  display.clear();
  display.setFont(ArialMT_Plain_24);
  display.drawString(0,0,"Black Sensor");
  display.drawString(0,25,"  Calribrate  ");
  display.display();
  if(first_state_for_calribrate_B == 0){
    for (uint8_t i = 0; i < PID_NumPin_B; i++)
    {
      PID_Max_B[i] = 0;
      PID_Min_B[i] = 4095;
    }
    first_state_for_calribrate_B = 1;
  }
  for(int roundOfCalribtate = 0; roundOfCalribtate < round ;roundOfCalribtate++ ){
    for (uint8_t i = 0; i < PID_NumPin_B; i++)
    {
      if(analog(PID_SetupPin_B[i]) > PID_Max_B[i] || PID_Max_B[i] >= 4095 ){
        PID_Max_B[i]  = analog(PID_SetupPin_B[i]);
        if(PID_Max_B[i] > 4095 )PID_Max_B[i] = 4095;
      }
    }
    for (uint8_t i = 0; i < PID_NumPin_B; i++)
    {
      if(analog(PID_SetupPin_B[i]) < PID_Min_B[i] || PID_Min_B[i] == 0){
        PID_Min_B[i] = analog(PID_SetupPin_B[i]);
        if(PID_Min_B[i] < 0) PID_Min_B[i] = 0;
      }
    }
    delay(1);
  }
  display.clear();
    
}
int Read_sumValue_sensor(){
  int value = 0;
  for(int i = 0;i<PID_NumPin;i++){
    if(Front_color == 0){
        value += map(analog(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 100, 0);
      }
      else {
        value += map(analog(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 0, 100);
      } 
  }
   
    return value;
}
int Read_sumValue_sensor_B(){
  int value = 0;
  for(int i = 0;i<PID_NumPin_B;i++){
    if(Back_color == 0){
        value += map(analog(PID_SetupPin_B[i]), PID_Min_B[i], PID_Max_B[i], 100, 0);
      }
      else {
        value += map(analog(PID_SetupPin_B[i]), PID_Min_B[i], PID_Max_B[i], 0, 100);
      } 
  }
   
    return value;
}