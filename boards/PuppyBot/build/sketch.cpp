#include <Arduino.h>
#include <KB_music.h>
#include <puppybot.h>


#ifndef I2C_ADDR
#define I2C_ADDR 0x69
#endif


#include "PuppyBotIMU.h"
#include "PuppyBotTurnPID.h"

typedef float Number;
typedef int Boolean;





void setup() {
  
  puppybot_setup();
  Serial.begin(115200);
  Serial.print("Runing.....");
  
  
  // encoder.begin();
}

void loop() {
  
  
  
}
