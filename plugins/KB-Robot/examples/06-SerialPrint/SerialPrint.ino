#include <Arduino.h>
#include <vector>
#include <WiFi.h>
#include <Wire.h>
#include "SPI.h"
#include "Adafruit_GFX.h"
#include "Adafruit_LEDBackpack.h"

#include <iKB-1.h>
#include <iKB-1_UART.h>
#include <Wire.h>

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

iKB_1 ikb(&Wire1);

void setup() {
  board.begin();
  music.begin();
  lm73.begin();
  matrix.displayBegin();
  ldr.begin();

  Wire1.begin(4, 5);
  ikb.begin();
  ikb.Serial->begin(9600);
  matrix.scrollText(String(String("Serial MotorKB")));
  pinMode(16, INPUT_PULLUP);
}
void loop() {
  if (ikb.Serial->available()) {
    matrix.printText(0, 0, String((ikb.Serial->readString())));
  }
  if (!(int)digitalRead(KB_BUTTON1)) {
    ikb.Serial->print(String("Hello World!"));
  }
}