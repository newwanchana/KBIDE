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

  
  
}
void loop()
{
  
    motor(1, 1, 30);	motor(2, 1, 30);
  delay(1000);
  motor(1, 1, 80);	motor(2, 1, 80);
  delay(1000);
  ao();
  motor(1, 2, 30);	motor(2, 2, 30);
  delay(1000);
  motor(1, 2, 80);	motor(2, 2, 80);
  delay(1000);
  ao();

  
  

}
