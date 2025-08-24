#include <Arduino.h>
#include <vector>
#include <WiFi.h>
#include <Wire.h>
#include "SPI.h"
#include "Adafruit_GFX.h"
#include "Adafruit_LEDBackpack.h"
#include "MCP7941x.h"

MCP7941x rtc = MCP7941x();

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

  Serial.begin(115200);
}
void loop() {
  if ((rtc.getDayofWeek()) == 1) {
    Serial.println(String("Monday"));
  } else if ((rtc.getDayofWeek()) == 2) {
    Serial.println(String("Tuesday"));
  } else if ((rtc.getDayofWeek()) == 3) {
    Serial.println(String("Wedneday"));
  } else if ((rtc.getDayofWeek()) == 4) {
    Serial.println(String("Thursday"));
  } else if ((rtc.getDayofWeek()) == 5) {
    Serial.println(String("Friday"));
  } else if ((rtc.getDayofWeek()) == 6) {
    Serial.println(String("Saturday"));
  } else if ((rtc.getDayofWeek()) == 7) {
    Serial.println(String("Sunday"));
  }
  Serial.println(
      ((String("Date : ") + String((rtc.getDay())) + String("-") +
        String((rtc.getMonth())) + String("-") + String((rtc.getYear())))));
  Serial.println(
      ((String("Time : ") + String((rtc.getHour())) + String(":") +
        String((rtc.getMinute())) + String(":") + String((rtc.getSecond())))));
  Serial.println(String("-----------------"));
  delay(1000);
}