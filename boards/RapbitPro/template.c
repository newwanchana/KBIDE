#include "RapbitPro.h"



${EXTINC}

//Adafruit_NeoPixel pixels(4, 13, NEO_GRB + NEO_KHZ800);

${VARIABLE}

${FUNCTION}

void setup()
{
	RapbitPro();
    /* setup code */
${SETUP_CODE}
    /* block setup */
${BLOCKSETUP}
}

void loop()
{
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
}
