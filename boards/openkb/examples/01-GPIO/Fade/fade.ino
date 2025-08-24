#include <Arduino.h>
#include <vector>
#include <WiFi.h>
#include <Wire.h>
#include "SPI.h"
#include "Adafruit_GFX.h"
#include "Adafruit_LEDBackpack.h"

#include "KB_initBoard.h"
#include "KB_music.h"
#include "KB_LDR.h"
#include "KB_LM73.h"
#include "KB_ht16k33.h"

KB_board board = KB_board();
KB_music music = KB_music();
KB_LDR ldr = KB_LDR();
KB_LM73 lm73 = KB_LM73();
KB_8x16Matrix matrix = KB_8x16Matrix();

typedef int Number;
typedef int Boolean;
using namespace std;

int i;

void setup() {
  board.begin();
  music.begin();
  lm73.begin();
  matrix.displayBegin();
  ldr.begin();
  ledcSetup(0, 5000, 8);
  ledcAttachPin(17, 0);
  pinMode(17, OUTPUT);
}
void loop() {
  for (i = 0; i <= 255; i += 8) {
    matrix.printText(0, 0, String(i));
    ledcWrite(0, i);
    delay(100);
  }
  for (i = 255; i >= 0; i -= 8) {
    matrix.printText(0, 0, String(i));
    ledcWrite(0, i);
    delay(100);
  }
}