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

Number moving_time;

void setup() {
  board.begin();
  music.begin();
  lm73.begin();
  matrix.displayBegin();
  ldr.begin();

  matrix.scrollText(String(String("Hello KB-IDE!")));
  moving_time = 500;
}
void loop() {
  matrix.drawBitmap(
      0, 0,
      (uint8_t *)"\x0\x0\x0\x0\x0\x0\x0\x31\x49\xb7\xb7\x84\xb7\xb7\x49\x31");
  delay(moving_time);
  matrix.drawBitmap(
      0, 0,
      (uint8_t *)"\x0\x0\x0\x0\x0\x31\x49\xb7\xb7\x84\xb7\xb7\x49\x31\x0\x0");
  delay(moving_time);
  matrix.drawBitmap(
      0, 0,
      (uint8_t *)"\x0\x0\x0\x31\x49\xb7\xb7\x84\xb7\xb7\x49\x31\x0\x0\x0\x0");
  delay(moving_time);
  matrix.drawBitmap(
      0, 0,
      (uint8_t *)"\x0\x31\x49\xb7\xb7\x84\xb7\xb7\x49\x31\x0\x0\x0\x0\x0\x0");
  delay(moving_time);
}