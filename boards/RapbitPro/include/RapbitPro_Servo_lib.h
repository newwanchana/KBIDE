#include "RapbitPro_Servo.h"
#define _servo1 13
#define _servo2 14
#ifndef ALL
#define ALL 100
#endif

Servo servo1;
Servo servo2;
void servo(uint8_t servo, int16_t angle)
{
  if (servo == ALL)
  {
    if (angle == -1)
    {
      servo1.detach();
      servo2.detach();
    }
    else
    {
      if (!(servo1.attached()))
      {
        servo1.attach(_servo1);
      }
      servo1.write(angle);

      if (!(servo2.attached()))
      {
        servo2.attach(_servo2);
      }
      servo2.write(angle);
    }
  }
  if (servo == 1)
  {
    if (angle == -1)
    {
      servo1.detach();
    }
    else
    {
      if (!(servo1.attached()))
      {
        servo1.attach(_servo1);
      }
      servo1.write(angle);
    }
  }
  if (servo == 2)
  {
    if (angle == -1)
    {
      servo2.detach();
    }
    else
    {
      if (!(servo2.attached()))
      {
        servo2.attach(_servo2);
      }
      servo2.write(angle);
    }
  }
}
//Cr. Inex