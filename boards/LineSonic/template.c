#include <Arduino.h>
#include "LineSonic.h"






typedef int Number;
typedef int Boolean;

${EXTINC}

${VARIABLE}

${FUNCTION}

void setup()
{
  pinMode(12,INPUT_PULLUP);
  pinMode(13,OUTPUT);
  for (uint8_t i = 0; i < _NumofSensor; i++)
  {
    _max_sensor_values[i] =  0;
    _min_sensor_values[i] = 1023;
  }
  digitalWrite(13,1);

  ${SETUP_CODE}
  ${BLOCKSETUP}
}
void loop()
{
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
}