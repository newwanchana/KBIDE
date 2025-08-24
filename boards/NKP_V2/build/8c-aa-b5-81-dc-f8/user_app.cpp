

#include "NKP_V2.h"
#ifndef I2C_ADDR
#define I2C_ADDR 0x69
#endif


#include "PuppyBotIMU.h"
#include "PuppyBotTurnPID.h"








void setup()
{
	Serial.begin(115200);
	
	NKP_V2();
	beep();
	display.clearDisplay();
    /* setup code */

    /* block setup */
Serial.begin(115200);
}

void loop()
{
    Serial.println(2222);

  
}

