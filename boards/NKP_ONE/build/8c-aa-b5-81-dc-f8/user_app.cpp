#include <Arduino.h>
#include "NKP_ONE.h"


#ifndef I2C_ADDR
#define I2C_ADDR 0x69
#endif

#include "PuppyBotIMU.h"
#include "PuppyBotTurnPID.h"

typedef float Number;
typedef int Boolean;







void setup()
{
  NKP_ONE();
  Serial.begin(115200);
  Wire.begin();

  
  Serial.begin(115200);
}
void loop()
{
  
    Serial.println(555555);

  
  

}
