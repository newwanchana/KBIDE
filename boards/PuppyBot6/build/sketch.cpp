#include <Arduino.h>
// #include <KB_music.h>
 #include <puppybot.h>

#ifndef I2C_ADDR
#define I2C_ADDR 0x69
#endif


#include "PuppyBotIMU.h"
#include "PuppyBotTurnPID.h"


typedef float Number;
typedef int Boolean;





void setup() {
  delay(1000);
  puppybot_setup();
  Serial.begin(115200);

  
  

}

void loop() {
  
  
}
void setup1(){
  delay(1000);
  initIMU();
  updateIMU_fine_offset_Yaw(500);
  offset_yaw_loop1 = getOffsetYaw();
}
void loop1(){
  yaw_loop1 = getYaw();
  Con_yaw_loop1 = getContinuousYaw();
  if(status_resetYaw == 1){
    status_resetYaw = 0;
    resetContinuousYaw();
  }
}
