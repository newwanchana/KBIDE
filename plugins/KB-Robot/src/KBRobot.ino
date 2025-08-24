#include "KBRobot.h"
void setup(){
  KBRobot_Begin();
  Serial.begin(115200);
}
void loop(){
  for(int i  = 0;i<180;i++){
    servo_write(i);
    delay(10);
  }
  for(int i  = 180;i>0;i--){
    servo_write(i);
    delay(10);
  }
  /*for(int i = 0;i<100;i++){
    motor(1,1,i);
    motor(2,1,i);
    Serial.println(read_ADC(0));
    delay(100);
  }
  for(int i = 0;i<100;i++){
    motor(1,2,i);
    motor(2,2,i);
    Serial.println(read_ADC(3));
    delay(100);
  }*/
  
}
