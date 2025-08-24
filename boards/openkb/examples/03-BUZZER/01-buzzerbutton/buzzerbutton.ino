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

void setup() {
  board.begin();
  music.begin();
  lm73.begin();
  matrix.displayBegin();
  ldr.begin();
}
void loop() {
  if (!(int)digitalRead(KB_BUTTON1)) {
    music.tone(2093, 250);
  } else if (!(int)digitalRead(KB_BUTTON2)) {
    music.song(
        (std::vector<int>{262, 523, 220, 440, 233, 466, -1,  -1,  175, 349, 147,
                          294, 156, 311, -1,  -1,  175, 349, 147, 294, 156, 311,
                          -1,  -1,  175, 349, 147, 294, 156, 311, -1,  -1,  311,
                          277, 294, 277, 311, 311, 208, 196, 277, 262, 370, 349,
                          165, 466, 440, 415, 311, 247, 233, 220, 208}),
        250);
  }
}