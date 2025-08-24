#include <Servo.h>
#include "Adafruit_MCP3008.h"
#include "Adafruit_SSD1306.h"



#include <SPI.h>
#include <Wire.h>



Servo servo1;
Servo servo2;
Servo servo3;
Servo servo4;
Adafruit_MCP3008 adc;
Adafruit_SSD1306 display(128, 64, &Wire, -1);


#define _servo1 29
#define _servo2 28
#define _servo3 27
#define _servo4 26

#define motor1A  1
#define motor1B  0
#define motor2A  2
#define motor2B  3




int PID_NumPin = 7;
int Front_color = 0;
int PID_SetupPin[] = {0,0,0,0,0,0,0,0,0};
int PID_Min[] = {10,10,10,10,10,10,10,10,10};
int PID_Max[] = {4000,4000,4000,4000,4000,4000,4000,4000,4000};
float errors = 0;
float output = 0;
float integral = 0;
float derivative = 0;
uint16_t state_on_Line = 0;
uint32_t _lastPosition;
bool first_state_for_calribrate = 0;

int PID_NumPin_B = 3;
int Back_color = 0;
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

int _Sensitive_F = 80;
int _Sensitive_B = 80;
int current_degree_servo  = 90;

void ao(){
	analogWrite(motor1B, 1023);
	analogWrite(motor1A, 1023);
	analogWrite(motor2B, 1023);
	analogWrite(motor2A, 1023);
}
void mst(){
	analogWrite(motor1B, 0);
	analogWrite(motor1A, 0);
	analogWrite(motor2B, 0);
	analogWrite(motor2A, 0);
}
void softTone(int frequency, int duration) {
  long period = 1000000L / frequency; // คาบเวลา (microseconds)
  long cycles = (long)frequency * duration / 1000; // จำนวนรอบที่ต้องทำ
  
  pinMode(6, OUTPUT);
  
  for (long i = 0; i < cycles; i++) {
    digitalWrite(6, HIGH);
    delayMicroseconds(period / 2);  // ครึ่งคาบ (HIGH)
    digitalWrite(6, LOW);
    delayMicroseconds(period / 2);  // ครึ่งคาบ (LOW)
  }
}


void buzzer(int freq, int timr_delay) {
  ao();
  softTone(freq,timr_delay );
  // delay(timr_delay);
  // tone(7, 0);
  // noTone(7);
}


void GenieBot_setup() {
  analogWriteResolution(10);
  analogWriteRange(1023);
  pinMode(9, INPUT_PULLUP);
  buzzer(500,100);
  Wire1.setSDA(14);
  Wire1.setSCL(15);
  Wire1.begin();
  Wire.begin();
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.setRotation(2);
  display.setTextSize(2);
  display.clearDisplay();
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(0, 40);
  display.println("GenieBot..");
  display.display();


}

void drawString(int x,int y,String Text){
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(x, y);
  display.println(Text);
}
void drawString(int x,int y,int Text){
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(x, y);
  display.println(String(Text));
}
int ADC(int analog_CH) {
	int analog = 0;
	if(analog_CH >=1 and analog_CH <=7 ){
		analog =  adc.readADC(7-analog_CH);
	}
	if(analog_CH == 8){
		analog =  adc.readADC(7);
	}
	if(analog_CH == 9){
		analog =  analogRead(29);
	}
	return analog;
 
}

int IN(int _pins) {
  if (_pins == 1) {_pins = 25;}
  else if(_pins >=2 && _pins <=4){_pins = 25 +_pins;}
  else{return 0;}
  pinMode(_pins, INPUT); 
  return digitalRead(_pins);
}
void OUT(int _pins,uint8_t _Status){
  if (_pins == 1) {_pins = 25;}
  else if(_pins >=2 && _pins <=4){_pins = 25 +_pins;}
  pinMode(_pins, OUTPUT); 
  digitalWrite(_pins,_Status);
}


void motor(int pin, int speed_Motor) {
  // จำกัดความเร็วให้อยู่ในช่วง -100 ถึง 100
  speed_Motor = constrain(speed_Motor, -100, 100);

  int pwmValue = abs(speed_Motor) * 10.23;  // แปลงช่วงเป็น 0-1023

  if (pin == 1) {
    if (speed_Motor > 0) {
      analogWrite(motor1A, 1023);
      analogWrite(motor1B, 1023 - pwmValue);
    } 
    else if (speed_Motor < 0) {
      analogWrite(motor1B, 1023);
      analogWrite(motor1A, 1023 - pwmValue);
    } 
    else {  // speed_Motor == 0
      analogWrite(motor1A, 1023);
      analogWrite(motor1B, 1023);
    }
  } 
  else if (pin == 2) {
    if (speed_Motor > 0) {
      analogWrite(motor2A, 1023);
      analogWrite(motor2B, 1023 - pwmValue);
    } 
    else if (speed_Motor < 0) {
      analogWrite(motor2B, 1023);
      analogWrite(motor2A, 1023 - pwmValue);
    } 
    else {  // speed_Motor == 0
      analogWrite(motor2A, 1023);
      analogWrite(motor2B, 1023);
    }
  }
}
void aoS(int speed_break){
  speed_break = constrain(speed_break, 0, 100);
  speed_break = speed_break * 10.23;
  analogWrite(motor1B, speed_break);
  analogWrite(motor1A, speed_break);
  analogWrite(motor2B, speed_break);
  analogWrite(motor2A, speed_break);
}
void motorStop(int motor_ch){
  	if(motor_ch == 0){
	  analogWrite(motor1B, 0);
	  analogWrite(motor1A, 0);
	  analogWrite(motor2B, 0);
	  analogWrite(motor2A, 0);

	}
	else if(motor_ch == 1 ){
	  analogWrite(motor1B, 0);
	  analogWrite(motor1A, 0);
	}
	else if(motor_ch == 2 ){
	  analogWrite(motor2B, 0);
	  analogWrite(motor2A, 0);
	}
	
	else{
	  analogWrite(motor1B, 0);
	  analogWrite(motor1A, 0);
	  analogWrite(motor2B, 0);
	  analogWrite(motor2A, 0);
	 
	}
}
void motorBreak(){
    analogWrite(motor1B, 1023);
    analogWrite(motor1A, 1023);
    analogWrite(motor2B, 1023);
    analogWrite(motor2A, 1023);

}
void motorBreak(int motor_ch){
  
	if(motor_ch == 0){
	  analogWrite(motor1B, 1023);
	  analogWrite(motor1A, 1023);
	  analogWrite(motor2B, 1023);
	  analogWrite(motor2A, 1023);


	}
	else if(motor_ch == 1 ){
	  analogWrite(motor1B, 1023);
	  analogWrite(motor1A, 1023);
	}
	else if(motor_ch == 2 ){
	  analogWrite(motor2B, 1023);
	  analogWrite(motor2A, 1023);
	}
	else{
	  analogWrite(motor1B, 1023);
	  analogWrite(motor1A, 1023);
	  analogWrite(motor2B, 1023);
	  analogWrite(motor2A, 1023);
	}
}
void fd(int speed_Motor){
	motor(1,speed_Motor);
	motor(2,speed_Motor);

}
void fd2(int speed_MotorA,int speed_MotorB){
  motor(1,speed_MotorA);
  motor(2,speed_MotorB);
}
void bk(int speed_Motor){
	motor(1,-speed_Motor);
	motor(2,-speed_Motor);

}
void bk2(int speed_MotorA,int speed_MotorB){
  motor(1,-speed_MotorA);
  motor(2,-speed_MotorB);
}
void tl(int speed_Motor){
	motor(1,0);
	motor(2,speed_Motor);
}
void tr(int speed_Motor){
	motor(1,speed_Motor);
	motor(2,0);
}
void sl(int speed_Motor){
	motor(1,-speed_Motor);
	motor(2,speed_Motor);
}
void sr(int speed_Motor){
	motor(1,speed_Motor);
	motor(2,-speed_Motor);
}

void servoRun(uint8_t servo_ch, int16_t angle) {
	if(angle == 0 ){angle = 3;}

  if (servo_ch == 1)
  {
    if(angle == -1){servo1.detach();}
    servo1.attach(_servo1,300,2500,angle);
    
  }
  if (servo_ch == 2)
  {
    if(angle == -1){servo2.detach();}
    servo2.attach(_servo2,300,2500,angle);
  }
  if (servo_ch == 3)
  {
    if(angle == -1){servo3.detach();}
    servo3.attach(_servo3,300,2500,angle);
  }
  if (servo_ch == 4)
  {
    if(angle == -1){servo4.detach();}
    servo4.attach(_servo4,300,2500,angle);
  }
}
void control_servo(int servo_ch,int servo_degree,int traget_degree,int servo_speed){
  if(abs(current_degree_servo - traget_degree) > 2){
    if(servo_degree < traget_degree ){
      for(int i = servo_degree;i<traget_degree;i++){
        servoRun(servo_ch,i);
        delay(servo_speed);
        current_degree_servo = i;
      }
    }
    else {
      for(int i = servo_degree;i>traget_degree;i--){
        servoRun(servo_ch,i);
        delay(servo_speed);
        current_degree_servo = i;
      }
    }
  }
}
int ultrasonic(uint8_t Echo_pin , uint8_t Trig_pin) {
  int ECHO = Echo_pin;
  int TRIG = Trig_pin;
  pinMode(ECHO, INPUT);
  pinMode(TRIG, OUTPUT);
  long duration = 0;
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  duration += pulseIn(ECHO, HIGH);

  // Calculating the distance
  return (duration) * 0.034 / 2;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

void setSensitive_F(int _SensorSensitive)
{
    _Sensitive_F = _SensorSensitive;
}
void PID_set_Min(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7,int S8){
  PID_Min[0] = S0;PID_Min[1] = S1;PID_Min[2] = S2;PID_Min[3] = S3;
  PID_Min[4] = S4;PID_Min[5] = S5;PID_Min[6] = S6;PID_Min[7] = S7;PID_Min[8] = S8;
}
void PID_set_Max(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7,int S8){
  PID_Max[0] = S0;PID_Max[1] = S1;PID_Max[2] = S2;PID_Max[3] = S3;
  PID_Max[4] = S4;PID_Max[5] = S5;PID_Max[6] = S6;PID_Max[7] = S7;PID_Max[8] = S8;
}
void PID_set_Pin(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7,int S8){
  PID_SetupPin[0] = S0;PID_SetupPin[1] = S1;PID_SetupPin[2] = S2;PID_SetupPin[3] = S3;
  PID_SetupPin[4] = S4;PID_SetupPin[5] = S5;PID_SetupPin[6] = S6;PID_SetupPin[7] = S7;PID_SetupPin[8] = S8;
}



int ReadSensorMinValue(uint8_t _Pin){
    return PID_Min[_Pin];
}
int ReadSensorMaxValue(uint8_t _Pin){
    return PID_Max[_Pin];
}
int readline()   
{                
  int onLine = 0;
  long avg = 0;
  long sum = 0;

  bool centerDetected = false;

  for (uint8_t i = 0; i < PID_NumPin; i++) 
  {
    long value;
    if (Front_color == 0) {
      value = map(ADC(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 100, 0);
    } else {
      value = map(ADC(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 0, 100);
    }

    value = constrain(value, 0, 100);      

    if (value > 50) {  
      onLine = 1;
    }

    if (i == 3 && value > 50) {
      centerDetected = true;   // เซ็นเซอร์กลางเจอเส้น
    }

    if (value > 5) {
      avg += (long)value * (i * 100) + 50;
      sum += value;
    }
  }

  if (onLine == 0) {
    if (_lastPosition < 300) {
      return 100; 
    } else {
      return 500; 
    }
  }

  // ✅ ถ้าเซ็นเซอร์กลางเจอเส้น ➜ บังคับตำแหน่งตรงกลาง
  if (centerDetected) {
    _lastPosition = ((PID_NumPin - 1) * 100) / 2;
    return _lastPosition;
  }

  if (sum == 0) return _lastPosition; 

  _lastPosition = avg / sum;
  return _lastPosition;
}


void Run_PID(int RUN_PID_speed, float RUN_PID_KP, float RUN_PID_KD) {
  
  int present_position = readline();
  int setpoint = ((PID_NumPin - 1) * 100) / 2;
  int errors = present_position - setpoint;
  static int previous_error = 0;
  int derivative = errors - previous_error;
  int output = RUN_PID_KP * errors + RUN_PID_KD * derivative;
  output = constrain(output, -100, 100);
  int m1Speed = RUN_PID_speed + output;
  int m2Speed = RUN_PID_speed - output;
  m1Speed = constrain(m1Speed, -80, 80);
  m2Speed = constrain(m2Speed, -80, 80);
  motor(1, m1Speed);
  motor(2, m2Speed);

  delay(1);
  previous_error = errors;
}

// int readline()   
// {                
//   int onLine = 0;
//   long avg = 0;
//   long sum = 0;
//   for (uint8_t i = 0; i < PID_NumPin ; i++) 
//   {
//     long value;
//     if(Front_color == 0){
//       value = map(ADC(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 100, 0);
//     }
//     else {
//       value = map(ADC(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 0, 100);
//     }
    
//     value = constrain(value,0,100);      
//     if (value > 100 - 50) { 
//       onLine = 1;
//     }
//     if (value > 5){
//       avg += (long)value * (i * 100)+ 50;
//       sum += value;
//     }
//   }
//    if (onLine == 0)
//   {
//     // int leftThreshold = ((PID_NumPin - 1) * 100) / 3;
//     // int rightThreshold = ((PID_NumPin - 1) * 100) * 2 / 3;
//     // int center = ((PID_NumPin - 1) * 100) / 2;

//     // if (_lastPosition < leftThreshold) {
//     //   return 0; // หันซ้าย
//     // } else if (_lastPosition > rightThreshold) {
//     //   return ((PID_NumPin - 1) * 100); // หันขวา
//     // } else {
//     //   return center; // วิ่งตรง
//     // }

//     if (_lastPosition < 300) {
//       return 0; // หันซ้าย
//     } else  {
//       return (600); // หันขวา
//     } 
//   }

//   if (sum == 0) return _lastPosition; // ป้องกันหาร 0
//   _lastPosition = avg / sum;
//   return _lastPosition;
// }
// void Run_PID(int RUN_PID_speed,float RUN_PID_KP,float RUN_PID_KD){
  
//   int present_position = readline();
//   int setpoint = ((PID_NumPin - 1) * 100) / 2;
//   errors = present_position - setpoint;
//   integral = integral + errors ;
//   derivative = (errors - previous_error) ;
//   output = RUN_PID_KP * errors  + RUN_PID_KD * derivative;

//   m1Speed = constrain(m1Speed, -80, 80);
//   m2Speed = constrain(m2Speed, -80, 80);

//   int m1Speed = RUN_PID_speed + output ;
//   int m2Speed = RUN_PID_speed - output;
//   motor(1,m1Speed);
//   motor(2,m2Speed);
//   delay(1);
//   previous_error = errors;
// }



// bool Read_status_sensor(int pin_sensor){
// 	return ADC(PID_SetupPin[pin_sensor]) < ((PID_Max[pin_sensor] + PID_Min[pin_sensor]) / 2) ? true : false;
// }
bool Read_status_sensor(int pin_sensor) {
    const float percent = 0.4; // ใช้ 30%
    int minVal = PID_Min[pin_sensor];
    int maxVal = PID_Max[pin_sensor];
    int threshold = minVal + (maxVal - minVal) * percent;

    return ADC(PID_SetupPin[pin_sensor]) < threshold ? true : false;
}

int Read_sumValue_sensor(){
	int value = 0;
	for(int i = 0;i<PID_NumPin;i++){
		if(Front_color == 0){
	      value += map(ADC(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 100, 0);
	    }
	    else {
	      value += map(ADC(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 0, 100);
	    }	
	}
	 
    return value;
}



int ReadSensorMinValue_B(uint8_t _Pin){
    return PID_Min_B[_Pin];
}
int ReadSensorMaxValue_B(uint8_t _Pin){
    return PID_Max_B[_Pin];
}

void Run_PID_until_frontSensor(int RUN_PID_speed,float RUN_PID_KP,float RUN_PID_KD,int sumValue_traget){
  static int previous_error = 0;
  do{
    int present_position = readline();
    int setpoint = ((PID_NumPin - 1) * 100) / 2;
    errors = present_position - setpoint;
    derivative = (errors - previous_error) ;
    output = RUN_PID_KP * errors  + RUN_PID_KD * derivative;
    
    int m1Speed = RUN_PID_speed + output ;
    int m2Speed = RUN_PID_speed - output;
    motor(1,m1Speed);
    motor(2,m2Speed);
    delay(1);
    previous_error = errors;
  }while(Read_sumValue_sensor() < sumValue_traget);
}

