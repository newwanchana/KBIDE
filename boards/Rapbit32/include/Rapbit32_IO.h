
#define Light1 39
#define Light2 35
#define Light3 33
#define LDR1 34
#define LDR2 32
#define LED1 25
#define LED2 19
#define Neopixel 26
#define buzzer 13
#define IRRemote 14
#define _knob 36
int analog(int _pin){
  return analogRead(_pin);
}
int in(int _pin){
  pinMode(_pin,INPUT);
  return digitalRead(_pin);
}
int in_pullup(int _pin){
  pinMode(_pin,INPUT_PULLUP);
  return digitalRead(_pin);
}
void out(int _pin,int _state){
  pinMode(_pin,OUTPUT);
  digitalWrite(_pin,_state);
}
float getdist(int _pin){
  float volts_distance = analog(_pin)*0.000805;  
  return  (12*pow(volts_distance, -1))-2.00;
}

