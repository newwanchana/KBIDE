#include <Arduino.h>

int state_waitSW1 = 0;
float conYaw = 0;
float offset_Yaw = 0;
float Yaw_loop1 = 0;
int state_resetYaw = 0;
int state_readDistance = 0;
int distance_Raw = 0;
int ADC_L[] = {0,0,0,0,0,0,0,0,0};

int offset_setpoint = 0;

unsigned long lastDistTime = 0;
const unsigned long distInterval = 50;  // อ่านทุก 50 ms


#include <GenieBot.h>
#include <pio_encoder.h>



#ifndef I2C_ADDR
#define I2C_ADDR 0x69
#endif


#include "PuppyBotIMU.h"
#include "PuppyBotTurnPID.h"


#include "DFRobot_VL53L0X.h"

DFRobot_VL53L0X sensor;

#include "function_GenieBot.h"

// static PioEncoder encoder_PIO(7);




typedef int Number;
typedef int Boolean;

${EXTINC}
${VARIABLE}
${FUNCTION}
void readAllData();
int ADC_L1(int analog_CH);
void setup() {
   adc.begin(10, 11, 12, 13);
   delay(2000);
   wait_state_SW1();
   set_data_for_turnDirection(1, 10, 50, 1.5, 0.05);
   PID_set_Min(300, 300, 400, 250, 100, 500, 400, 500,500);
   PID_set_Max(1000, 1023, 1023, 800, 1023, 1023, 1023, 1023, 1023);
   PID_NumPin= 7;
   PID_set_Pin(1,2,3,4,5,6,7,8,9);
  ${SETUP_CODE}
  ${BLOCKSETUP}
  // Run_PID_until_encoder(20,0.2,2,1000);
}

void loop() {
	 
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
  
}
void setup1(){
	

  GenieBot_setup();
  initIMU();
  updateIMU_fine_offset_Yaw(200);
  resetContinuousYaw();
  for (int i = 0; i < 20; i++) updateContinuousYaw();
  buzzer(2000,100);
  buzzer(2000,100);
  sensor.begin(0x50);
  sensor.setMode(sensor.eContinuous,sensor.eHigh);
  sensor.start();
  PID_set_Pin(1,2,3,4,5,6,7,8,9);
  wait_SW1_setup1();


}
void loop1(){
	unsigned long nowloop1 = millis();
	// // ADC_L[1] = ADC(1);
	// // ADC_L[2] = ADC(2);
	// // ADC_L[3] = ADC(3);
	// // ADC_L[4] = ADC(4);
	// // ADC_L[5] = ADC(5);
	// // ADC_L[6] = ADC(6);
	// // ADC_L[7] = ADC(7);
	// // ADC_L[8] = ADC(8);
	// // ADC_L[9] = ADC(9);
	// //distance_yaw = sensor.getDistance();
	if(state_readDistance == 1){
		if (nowloop1 - lastDistTime >= distInterval) {
	        lastDistTime = nowloop1;
	        distance_Raw = sensor.getDistance();  // blocking แต่เรียกไม่บ่อย
    	}
	}
	updateContinuousYaw();
	conYaw = getContinuousYaw();
	//offset_Yaw = getOffsetYaw();
	Yaw_loop1 = getYaw();

	if(state_resetYaw == 1){
		state_resetYaw = 0;
		resetContinuousYaw();
	}

}