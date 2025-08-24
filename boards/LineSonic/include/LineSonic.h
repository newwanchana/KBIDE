//#include <Servo.h>
#include <SPI.h>

#define motor1A  5
#define motor1B  6
#define motor2A  9
#define motor2B  10


int _sensorPins[20];
int _NumofSensor = 0;
int _min_sensor_values[20];
int _max_sensor_values[20];
int _lastPosition = 0;
int _Sensitive  = 20;
int stateOfRunPID = 0;
float  errors = 0, output = 0, integral = 0, derivative = 0, previous_error = 0;
uint8_t FrontLineColor = 0;
uint8_t BackLineColor = 0;





void wait_SW1() {
  pinMode(12,INPUT_PULLUP);

  while(digitalRead(12)==1){
    digitalWrite(13,1);
    delay(100);
    digitalWrite(13,0);
    delay(100);
    
  }
  
}

void motor(int pin, int speed_Motor) {
  if (speed_Motor > 100)speed_Motor = 100;
  if (speed_Motor < -100)speed_Motor = -100;
  if (pin == 1) {
    if (speed_Motor < 0) {
      // Serial.println(speed_Motor);
      speed_Motor = abs(speed_Motor) * 2.55;
      analogWrite(motor1B, 255);
      analogWrite(motor1A, 255-abs(speed_Motor));

    }
    else {
      speed_Motor = abs(speed_Motor) * 2.55;
      analogWrite(motor1A, 255);
      analogWrite(motor1B, 255- abs(speed_Motor));
    }
  }
  else if (pin == 2) {
    if (speed_Motor < 0) {
      speed_Motor = abs(speed_Motor) * 2.55;
      analogWrite(motor2B, 255);
      analogWrite(motor2A, 255-abs(speed_Motor));
    }
    else {
      speed_Motor = abs(speed_Motor) * 2.55;
      analogWrite(motor2A, 255);
      analogWrite(motor2B, 255-abs(speed_Motor));
    }
  }
}

int ADC_read(int analog_CH) {
  int val = 0;
  if (analog_CH < 8 ) {
    pinMode(A1, OUTPUT);
    pinMode(A2, OUTPUT);
    pinMode(A3, OUTPUT);
    int controlPin[] = {27, 28, 29};
    int muxChannel[8][3] = {{1, 1, 1},{1, 1, 0}, {1, 0, 1}, {1, 0, 0}, {0, 1, 1}, {0, 1, 0}, {0, 0, 1}, {0, 0, 0}};
    digitalWrite(A3, muxChannel[analog_CH][0]);
    digitalWrite(A2, muxChannel[analog_CH][1]);
    digitalWrite(A1, muxChannel[analog_CH][2]);
    val = analogRead(A0);
  }
  return val;
}
void ReadADCAll(){
  for(int i = 0;i<8;i++){
    Serial.print("  ADC"+String(i)+"=");
    Serial.print(ADC_read(i));
  }
  Serial.println("");
}

void ao(){
  motor(1,0);
  motor(2,0);
}




void setSensorPins(const int * _pins, int _NumofSensor_)
{
  _NumofSensor = _NumofSensor_;
  for (uint8_t i = 0; i < _NumofSensor_; i++)
  {
    _sensorPins[i] = _pins[i];
    _min_sensor_values[i] = 255;
    _max_sensor_values[i] = 0;
  }

}
void setSensorMin(const int * _MinSensor)
{
  for (uint8_t i = 0; i < _NumofSensor; i++)
  {
    _min_sensor_values[i] = _MinSensor[i];
  }
}
void setSensorMax(const int * _MaxSensor)
{
  for (uint8_t i = 0; i < _NumofSensor; i++)
  {
    _max_sensor_values[i] = _MaxSensor[i];
  }
}
void setSensitive(const uint16_t  _SensorSensitive)
{
  _Sensitive = _SensorSensitive;
}
void setFrontLineColor(const uint16_t  _setFrontLineColor)     // if Value = 1 is BlackLine ,value = 0 is WhiteLine
{
  FrontLineColor = _setFrontLineColor;
}
int refSensor(int ch){
  return ( _max_sensor_values[ch] + _min_sensor_values[ch] ) / 2 ;
}

int readSensorMinValue(uint8_t _Pin) {
  return _min_sensor_values[_Pin];
}
int readSensorMaxValue(uint8_t _Pin) {
  return _max_sensor_values[_Pin];
}
int ReadLightSensor(uint8_t line_color,int analog_CH) {
  int value = 0;

  if(line_color == 0)value= map(ADC_read(_sensorPins[analog_CH]), _min_sensor_values[analog_CH], _max_sensor_values[analog_CH], 100, 0);
  else if (line_color == 1) value= map(ADC_read(_sensorPins[analog_CH]), _min_sensor_values[analog_CH], _max_sensor_values[analog_CH], 0, 100);
  if(value < 0)value = 0;
  else if(value >100)value = 100;
  return value;
}

void setCalibrate(int cal_round) {
  for (uint8_t i = 0; i < _NumofSensor; i++){
    _max_sensor_values[i] = 0;
    _min_sensor_values[i] = 1023;
  }
  
  for (int round_count = 0; round_count < cal_round; round_count ++ ) {

    for (uint8_t i = 0; i < _NumofSensor; i++)
    {
      if (ADC_read(_sensorPins[i]) > _max_sensor_values[i] ) {
        _max_sensor_values[i]  = ADC_read(_sensorPins[i]);
        if (_max_sensor_values[i] > 1023 )_max_sensor_values[i] = 1023;
      }
    }
    for (uint8_t i = 0; i < _NumofSensor; i++)
    {
      if (ADC_read(_sensorPins[i]) < _min_sensor_values[i] ) {
        _min_sensor_values[i] = ADC_read(_sensorPins[i]);
        if (_min_sensor_values[i] < 0) _min_sensor_values[i] = 0;
      }
    }
    delay(1);
  }
  
}

int readline(uint8_t line_color)
{
  bool onLine = false;
  long avg = 0;
  long sum = 0;
  for (uint8_t i = 0; i < _NumofSensor; i++)
  {
    long value = ReadLightSensor(line_color,i);
    if (value > _Sensitive) {
      onLine = true;
    }
    if (value > 5)
    {
      avg += (long)value * (i * 100);
      sum += value;
    }
  }
  if (!onLine)
  {
    if (_lastPosition < (_NumofSensor - 1) * 100 / 2)
    {
      return 0;
    }
    else
    {
      return (_NumofSensor - 1) * 100;
    }
  }
  _lastPosition = avg / sum;
  return _lastPosition;
}






void lineFollow_PID(uint8_t line_color,int RUN_PID_speed , float RUN_PID_KP, float RUN_PID_KD) {

  int speed_PID = RUN_PID_speed;

  int present_position = readline(line_color);
  int setpoint = ((_NumofSensor - 1) * 100) / 2;
  errors = present_position - setpoint;

  if (errors == 0) integral = 0;
  integral = integral + errors ;
  derivative = (errors - previous_error) ;
  output = RUN_PID_KP * errors  + RUN_PID_KD * derivative;
  int motorL = constrain(RUN_PID_speed + output, -100, 100);
  int motorR = constrain(RUN_PID_speed - output, -100, 100);
  motor(1,motorL);
  motor(2,motorR);
  previous_error = errors;
}
void lineFollow_PID_X(uint8_t line_color,int RUN_PID_speed , float RUN_PID_KP, float RUN_PID_KD) {

  int speed_PID = RUN_PID_speed;

  int present_position = readline(line_color);
  int setpoint = ((_NumofSensor - 1) * 100) / 2;
  errors = present_position - setpoint;

  if (errors == 0) integral = 0;
  integral = integral + errors ;
  derivative = (errors - previous_error) ;
  output = RUN_PID_KP * errors  + RUN_PID_KD * derivative;
  int motorL = constrain(RUN_PID_speed + output, -100, 100);
  int motorR = constrain(RUN_PID_speed - output, -100, 100);
  motor(1,motorL);
  motor(2,motorR);
  previous_error = errors;
}


void lineFollow_upSpeed_with_time(uint8_t line_color,float Start_speed,float normally_speed,float Time_round , float RUN_PID_KP, float RUN_PID_KD) {

  for(float round_for_run_with_timer = Start_speed;round_for_run_with_timer<normally_speed;round_for_run_with_timer+=Time_round){
    int speed_PID = round_for_run_with_timer;

    int present_position = readline(line_color);
    int setpoint = ((_NumofSensor - 1) * 100) / 2;
    errors = present_position - setpoint;


    if (errors == 0) integral = 0;
    derivative = (errors - previous_error) ;
    output = RUN_PID_KP * errors  + RUN_PID_KD * derivative;
    int motorL = constrain(speed_PID + output, -100, 100);
    int motorR = constrain(speed_PID - output, -100, 100);
    motor(1,motorL);
    motor(2,motorR);
    previous_error = errors;
  }
}
void lineFollow_PID_with_time(uint8_t line_color,float normally_speed,float Time_round , float RUN_PID_KP, float RUN_PID_KD) {

  for(float round_for_run_with_timer = 0;round_for_run_with_timer<Time_round;round_for_run_with_timer++){
  int speed_PID = normally_speed;

  int present_position = readline(line_color);
  int setpoint = ((_NumofSensor - 1) * 100) / 2;
  errors = present_position - setpoint;

  if (errors == 0) integral = 0;
  integral = integral + errors ;
  derivative = (errors - previous_error) ;
  output = RUN_PID_KP * errors  + RUN_PID_KD * derivative;
  int motorL = constrain(speed_PID + output, -100, 100);
  int motorR = constrain(speed_PID - output, -100, 100);
  motor(1,motorL);
  motor(2,motorR);
  previous_error = errors;
  }
}

void lineFollow_PID_until_frontSensor(uint8_t line_color,float normally_speed,float sum_value_sensor_traget , float RUN_PID_KP, float RUN_PID_KD) {
  int sum_value_sensor = 0;
  do{

  int speed_PID = normally_speed;
  int present_position = readline(line_color);
  int setpoint = ((_NumofSensor - 1) * 100) / 2;
  errors = present_position - setpoint;

  if (errors == 0) integral = 0;
  integral = integral + errors ;
  derivative = (errors - previous_error) ;
  output = RUN_PID_KP * errors  + RUN_PID_KD * derivative;
  int motorL = constrain(speed_PID + output, -100, 100);
  int motorR = constrain(speed_PID - output, -100, 100);
  motor(1,motorL);
  motor(2,motorR);
  previous_error = errors;
  sum_value_sensor = ReadLightSensor(line_color,0) + ReadLightSensor(line_color,1)+ ReadLightSensor(line_color,2)
                   + ReadLightSensor(line_color,3)+ ReadLightSensor(line_color,4)+ ReadLightSensor(line_color,5)+ ReadLightSensor(line_color,6)+ ReadLightSensor(line_color,7) ;
   //Serial.println(sum_value_sensor);
  //   Serial.print('\t');
 // delay(1);

  }while(sum_value_sensor <= sum_value_sensor_traget);
}
void lineFollow_PID_until_readDigital(uint8_t line_color,float normally_speed,int digital_port ,int status_port, float RUN_PID_KP, float RUN_PID_KD) {
  int sum_value_sensor = 0;
  pinMode(digital_port,INPUT);
  do{

  int speed_PID = normally_speed;
  int present_position = readline(line_color);
  int setpoint = ((_NumofSensor - 1) * 100) / 2;
  errors = present_position - setpoint;

  if (errors == 0) integral = 0;
  integral = integral + errors ;
  derivative = (errors - previous_error) ;
  output = RUN_PID_KP * errors  + RUN_PID_KD * derivative;
  int motorL = constrain(speed_PID + output, -100, 100);
  int motorR = constrain(speed_PID - output, -100, 100);
  motor(1,motorL);
  motor(2,motorR);
  previous_error = errors;

  }while(digitalRead(digital_port) == status_port);
}


bool Read_status_sensor(uint8_t line_color,uint8_t numPin){
  int state = 0;
  if(ReadLightSensor(line_color,numPin) >= 50){
    state= 1;
  }
  else if(ReadLightSensor(line_color,numPin) < 50){
    state= 0;
  }
  return state;
}







// void lineFollow_PID(int RUN_PID_speed , float RUN_PID_KP, float RUN_PID_KI, float RUN_PID_KD) {

//   int speed_PID = RUN_PID_speed;
//   int present_position = readline();
//   int setpoint = ((_NumofSensor - 1) * 100) / 2;
//   errors = present_position - setpoint;
//   if (errors == 0) integral = 0;
//   integral = integral + errors ;
//   derivative = (errors - previous_error) ;
//   output = RUN_PID_KP * errors  + RUN_PID_KI * integral + RUN_PID_KD * derivative;
//   int motorL = constrain(RUN_PID_speed + output, -100, 100);
//   int motorR = constrain(RUN_PID_speed - output, -100, 100);
//   //int motorL = constrain(RUN_PID_speed + output, -RUN_PID_speed, RUN_PID_speed);
//   //int motorR = constrain(RUN_PID_speed - output, -RUN_PID_speed, RUN_PID_speed);
//   motor(1,motorL);
//   motor(2,motorR);
//   previous_error = errors;

// }