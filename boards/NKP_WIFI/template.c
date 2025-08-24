#include <Arduino.h>
#include <vector>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include "SH1106.h"

${EXTINC}

SH1106 display(0x3c, 21, 22);


${VARIABLE}

${FUNCTION}

void setup()
{
  pinMode(25,INPUT);
  display.init();
  display.flipScreenVertically();
  display.setFont(ArialMT_Plain_10);
  ${SETUP_CODE}
  ${BLOCKSETUP}
}
void loop()
{
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
}