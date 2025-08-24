#include <Arduino.h>
#include "NKP_ONE.h"


#ifndef I2C_ADDR
#define I2C_ADDR 0x69
#endif

#include "PuppyBotIMU.h"
#include "PuppyBotTurnPID.h"



typedef int Number;
typedef int Boolean;







void setup()
{
  NKP_ONE();
  Serial.begin(115200);
  Wire.begin();

  display.setFont(ArialMT_Plain_24); display.drawString(0, 0, "Wait IMU"); display.display(); initIMU();updateIMU_fine_offset_Yaw(200);
  set_data_for_turnDirection(1,15,60,2,0.1);
  wait();
  MoveStraightDirection(0,0,50,500,1,0,0.5,0);
  turn_270();MoveStraightDirection(0,1,50,500,1,0,0.5,0);
  turn_360();MoveStraightDirection(0,2,50,500,1,0,0.5,0);
  turn_90();MoveStraightDirection(0,3,50,500,1,0,0.5,0);
  turn_180();
}
void loop()
{
  
  
  
  

}
