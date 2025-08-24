#include <Arduino.h>
#include <GenieBot.h>




#ifndef I2C_ADDR
#define I2C_ADDR 0x69
#endif


#include "PuppyBotIMU.h"
#include "PuppyBotTurnPID.h"


#include "DFRobot_VL53L0X.h"

DFRobot_VL53L0X sensor;

#include "function_GenieBot.h"





typedef int Number;
typedef int Boolean;





void setup() {
  
  GenieBot_setup();

  initIMU();
  updateIMU_fine_offset_Yaw(200);
  resetContinuousYaw();
  for (int i = 0; i < 20; i++) updateContinuousYaw();
  set_data_for_turnDirection(1, 10, 50, 2, 0.05);
  PID_set_Min(300, 300, 400, 250, 100, 500, 400, 500,500);
  PID_set_Max(1000, 1023, 1023, 800, 1023, 1023, 1023, 1023, 1023);

   sensor.begin(0x50);
  //Set to Back-to-back mode and high precision mode
  sensor.setMode(sensor.eContinuous,sensor.eHigh);
  //Laser rangefinder begins to work
  sensor.start();
  
  // wait_SW1();
  init_encoder();


 


  Serial.begin(115200);
  Serial.print("Runing.....");
  PID_NumPin= 7;
  PID_set_Pin(1,2,3,4,5,6,7,8,9);
  
  
  // Run_PID_until_encoder(20,0.2,2,1000);
}

void loop() {
	 
  
  
  
}
