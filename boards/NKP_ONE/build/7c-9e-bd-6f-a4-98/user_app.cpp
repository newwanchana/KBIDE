#include <Arduino.h>
#include "NKP_ONE.h"


#ifndef I2C_ADDR
#define I2C_ADDR 0x69
#endif

#include "PuppyBotIMU.h"
#include "PuppyBotTurnPID.h"



typedef int Number;
typedef int Boolean;



Number Timer;



void setup()
{
  NKP_ONE();
  Serial.begin(115200);
  Wire.begin();

  display.setFont(ArialMT_Plain_24); display.drawString(0, 0, "Wait IMU"); display.display(); initIMU();updateIMU_fine_offset_Yaw(200);
  wait();
  Timer = millis();
  while (millis() - Timer < 1000) {
    MoveStraightDirection_step(0,0,50,1,0);
  }
  ao();
}
void loop()
{
  
  
  
  

}
