#include "PuppyBotIMU.h"
enum Direction_turnPID { NORTH = 0,
                 EAST = 1,
                 SOUTH = 2,
                 WEST = 3 };

int Direction_turnPIDIndex = NORTH;  
float previousYaw_turnPID = 0;      

float preverror_turnPID = 0;
float integral_turn = 0;
float turnDirection_PID_KP=2,turnDirection_PID_KD=0;
int speedMin_turnDirection = 15,speedMax_turnDirection = 60;
int error_for_turnPID = 1;


void set_data_for_turnDirection(int error_PID,int speedMin,int speedMax,float KP,float KD){
  turnDirection_PID_KP = KP;
  turnDirection_PID_KD = KD;
  speedMin_turnDirection = speedMin;
  speedMax_turnDirection = speedMax;
  error_for_turnPID = error_PID;
}

float shortestAngle(float currentAngle, float targetAngle) {
    float error = fmod((targetAngle - currentAngle + 540), 360) - 180;
    return error;
}

// ฟังก์ชัน normalize มุมให้อยู่ในช่วง 0-360 (ใช้เมื่อจำเป็น)
float normalize360(float angle) {
    while (angle < 0) angle += 360;
    while (angle >= 360) angle -= 360;
    return angle;
}
void turnPID(float targetYaw_turnPID, int speedTurn_min, int speedTurn_max, float kp_turnPID, float kd_turnPID) {
    unsigned long startTime = millis();
    integral_turn = 0;
    int stableCount = 0;
    int overshootCount = 0;
    bool hasOvershoot = false;
    for (int i = 0; i < 10; i++) updateContinuousYaw();

    float preverror_turnPID = shortestAngle(getContinuousYaw(), targetYaw_turnPID);

    while (true) {
        updateContinuousYaw();
        float current_Yaw = getContinuousYaw();

        float error_turnPID = shortestAngle(current_Yaw, targetYaw_turnPID);

        // ตรวจจับ overshoot
        if ((preverror_turnPID > 0 && error_turnPID < 0) || (preverror_turnPID < 0 && error_turnPID > 0)) {
            hasOvershoot = true;
            overshootCount++;
        }

        unsigned long now = millis();
        float deltaTime = max((now - startTime) / 1000.0, 0.001);
        startTime = now;

        integral_turn += error_turnPID * deltaTime;
        integral_turn = constrain(integral_turn, -50, 50);
        float derivative = (error_turnPID - preverror_turnPID) / deltaTime;
        float output = kp_turnPID * error_turnPID + kd_turnPID * derivative;

        int speed_L = constrain(abs(output), speedTurn_min, speedTurn_max);
        int speed_R = constrain(abs(output), speedTurn_min, speedTurn_max);

        if (output < 0) {
            // เลี้ยวซ้าย
            motor(1, -speed_L);
            motor(2, speed_R);
        } else {
            // เลี้ยวขวา
            motor(1, speed_L);
            motor(2, -speed_R);
        }

        if (overshootCount > 5) {
            ao();
            break;
        }

        if (abs(error_turnPID) < error_for_turnPID && hasOvershoot && overshootCount >= 1) {
            stableCount++;
            if (stableCount > 5) {
                ao();
                break;
            }
        } else {
            stableCount = 0;
        }

        if (millis() - startTime > 5000) {
            Serial.println("Timeout! Exiting loop...");
            ao();
            break;
        }
        delay(1);
        preverror_turnPID = error_turnPID;
    }
}
void turnByAngle(float turnAngle) {
  for (int i = 0; i < 10; i++) updateContinuousYaw();
  float currentYaw = getContinuousYaw();  // ห้าม reset ก่อน
  float targetYaw = normalize360(currentYaw + turnAngle);

  Serial.print("From "); Serial.print(currentYaw);
  Serial.print(" → To "); Serial.println(targetYaw);

  turnPID(targetYaw, speedMin_turnDirection, speedMax_turnDirection, turnDirection_PID_KP, turnDirection_PID_KD);

  resetContinuousYaw();  // reset ทีหลัง
}
// // PID สำหรับหมุนไปยัง targetYaw
// void turnPID(float targetYaw_turnPID, int speedTurn_min, int speedTurn_max, float kp_turnPID, float kd_turnPID) {
//     unsigned long startTime = millis();
//     integral_turn = 0;
//     int stableCount = 0;
//     int overshootCount = 0;
//     bool hasOvershoot = false;

//     //float preverror_turnPID = shortestAngle(getContinuousYaw(), targetYaw_turnPID);
//     float preverror_turnPID = targetYaw_turnPID - getContinuousYaw();

//     while (true) {
//         float current_Yaw = getContinuousYaw();

//         float error_turnPID = targetYaw_turnPID - current_Yaw; // ❗️ ใช้การคำนวณโดยตรง

//         // ตรวจจับ overshoot
//         if ((preverror_turnPID > 0 && error_turnPID < 0) || (preverror_turnPID < 0 && error_turnPID > 0)) {
//             hasOvershoot = true;
//             overshootCount++;
//         }

//         unsigned long now = millis();
//         float deltaTime = max((now - startTime) / 1000.0, 0.001);
//         startTime = now;

//         integral_turn += error_turnPID * deltaTime;
//         integral_turn = constrain(integral_turn, -50, 50);
//         float derivative = (error_turnPID - preverror_turnPID) / deltaTime;
//         float output = kp_turnPID * error_turnPID + kd_turnPID * derivative;

//         int speed_L = constrain(abs(output), speedTurn_min, speedTurn_max);
//         int speed_R = constrain(abs(output), speedTurn_min, speedTurn_max);

//         if (output < 0) {
//             // เลี้ยวซ้าย
//             motor(1, -speed_L);
//             motor(2, speed_R);
//         } else {
//             // เลี้ยวขวา
//             motor(1, speed_L);
//             motor(2, -speed_R);
//         }

//         if (overshootCount > 5) {
//             ao(); delay(10); ao();
//             break;
//         }

//         if (abs(error_turnPID) < error_for_turnPID && hasOvershoot && overshootCount >= 1) {
//             stableCount++;
//             if (stableCount > 5) {
//                 ao(); delay(10); ao();
//                 break;
//             }
//         } else {
//             stableCount = 0;
//         }

//         if (millis() - startTime > 5000) {
//             Serial.println("Timeout! Exiting loop...");
//             ao();
//             break;
//         }

//         preverror_turnPID = error_turnPID;
//     }
// }

// void turnByAngle(float angle) {
//     updateContinuousYaw();
//     float current = getContinuousYaw();
//     float target = current + angle;

//     Serial.print("currentYaw: "); Serial.println(current);
//     Serial.print("targetYaw : "); Serial.println(target);

//     turnPID(target, speedMin_turnDirection, speedMax_turnDirection, turnDirection_PID_KP, turnDirection_PID_KD);

//     resetContinuousYaw();
// }




void turn_45() {
  float targetYaw_turnPID = getOffsetYaw() - 135;
  targetYaw_turnPID = fmod(targetYaw_turnPID, 360);  //รักษาให้อยู่ใน 0-359°
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
  resetContinuousYaw();
}
void turn_90() {
  float targetYaw_turnPID = getOffsetYaw() -90 ;
  targetYaw_turnPID = fmod(targetYaw_turnPID, 360);  //รักษาให้อยู่ใน 0-359°
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
  resetContinuousYaw();
}
void turn_135() {
  float targetYaw_turnPID = getOffsetYaw() -45 ;
  targetYaw_turnPID = fmod(targetYaw_turnPID, 360);  //รักษาให้อยู่ใน 0-359°
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
  resetContinuousYaw();
}
void turn_180() {
  float targetYaw_turnPID = getOffsetYaw() ;
  targetYaw_turnPID = fmod(targetYaw_turnPID, 360);  //รักษาให้อยู่ใน 0-359°
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
  resetContinuousYaw();
}
void turn_225() {
  float targetYaw_turnPID = getOffsetYaw() + 45 ;
  targetYaw_turnPID = fmod(targetYaw_turnPID, 360);  //รักษาให้อยู่ใน 0-359°
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
  resetContinuousYaw();
}
void turn_270() {
  float targetYaw_turnPID = getOffsetYaw() + 90 ;
  targetYaw_turnPID = fmod(targetYaw_turnPID, 360);  //รักษาให้อยู่ใน 0-359°
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
  resetContinuousYaw();
}
void turn_315() {
  float targetYaw_turnPID = getOffsetYaw() +135 ;
  targetYaw_turnPID = fmod(targetYaw_turnPID, 360);  //รักษาให้อยู่ใน 0-359°
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
  resetContinuousYaw();
}
void turn_360() {
  float targetYaw_turnPID = getOffsetYaw() +180 ;
  targetYaw_turnPID = fmod(targetYaw_turnPID, 360);  //รักษาให้อยู่ใน 0-359°
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
  resetContinuousYaw();
}




int getClosestAngle(float currentAngle) {
    // ปรับให้อยู่ในช่วง 0-360
    while (currentAngle < 0) currentAngle += 360;
    while (currentAngle >= 360) currentAngle -= 360;

    int angles[] = {0, 90, 180, 270, 360};
    int closest = angles[0];
    float minDiff = fabs(currentAngle - angles[0]);

    for (int i = 1; i < 5; i++) {
        float diff = fabs(currentAngle - angles[i]);
        if (diff < minDiff) {
            minDiff = diff;
            closest = angles[i];
        }
    }

    // แปลง 360 กลับเป็น 0 เพื่อความสอดคล้อง
    if (closest == 360) closest = 0;

    return closest;
}
void turnByAngle_fix(int turnAngle) {
  for (int i = 0; i < 10; i++) updateContinuousYaw();
  //updateContinuousYaw();                      // อัปเดตค่า Yaw ต่อเนื่อง
  float currentYaw = getContinuousYaw();      // อ่านค่า Yaw ปัจจุบัน

  float roughTargetYaw = currentYaw + turnAngle;  // มุมเป้าหมายโดยตรง
  int snappedTargetYaw = getClosestAngle(roughTargetYaw);  // Snap ไปมุม 0,90,180,270,360

  // เรียกใช้ PID เพื่อเลี้ยวไปที่มุมที่ snap แล้ว
  turnPID(snappedTargetYaw, speedMin_turnDirection, speedMax_turnDirection, turnDirection_PID_KP, turnDirection_PID_KD);

  resetContinuousYaw();  // รีเซ็ต Yaw หลังเลี้ยวเสร็จ
}


float normalizeAngle(float angle) {
    while (angle > 180) angle -= 360;
    while (angle <= -180) angle += 360;
    return angle;
}

void moveStraightPID(int Movedirection, float targetYaw_straight, int speedBase, float duration, float kp_straight, float ki_straight, float kd_straight,int Slow) {
    unsigned long startTime = millis();
    unsigned long startTime_reduc = millis();
    unsigned long endTime = startTime + duration; 
    float integral_straight = 0, preverror_straight = 0;

    while (millis() < endTime) {  
        updateContinuousYaw();  
        float current_Yaw = getContinuousYaw();
        
        // 🔥 ใช้ normalizeAngle() เพื่อลดปัญหาการเปลี่ยนทิศทางผิดพลาด
        float error_straight = normalizeAngle(targetYaw_straight - current_Yaw);

        unsigned long now = millis();
        float deltaTime = max((now - startTime) / 1000.0, 0.001);
        startTime = now;

        integral_straight += error_straight * deltaTime;
        integral_straight = constrain(integral_straight, -50, 50);  
        float derivative = (error_straight - preverror_straight) / deltaTime;
        float output = kp_straight * error_straight + ki_straight * integral_straight + kd_straight * derivative;

        preverror_straight = error_straight;
        int rightSpeed;
        int leftSpeed;

        if(Slow == 1){
          unsigned long elapsedTime = now - startTime_reduc;
          long timeError = endTime - now;
          float speedReduction;
          if (timeError <= 500 && timeError > 0) {
            speedReduction = timeError * 0.01;
            speedReduction = constrain(speedReduction, 0, speedBase);
          } else if (timeError <= 0) {
            speedReduction = 0;  // หยุดเมื่อครบเวลา
          } else {
            speedReduction = speedBase; // ก่อนถึงช่วงชะลอ ให้เต็มที่
          }
          rightSpeed = constrain(speedReduction - output, 10, 100);
          leftSpeed = constrain(speedReduction + output, 10, 100);
        }
        else{
          rightSpeed = constrain(speedBase - output, 20, 100);
          leftSpeed = constrain(speedBase + output, 20, 100);
        }

    
        if (Movedirection == 0) {  // เดินหน้า
            motor(1, leftSpeed);
            motor(2, rightSpeed);

        } else {  // ถอยหลัง
            motor(1, -rightSpeed);
            motor(2, -leftSpeed);
        }

        // 🔍 Debug แสดงค่ามุมและค่า PID
        // Serial.print("Current Yaw: "); Serial.print(current_Yaw);
        // Serial.print(" Target Yaw: "); Serial.print(targetYaw_straight);
        // Serial.print(" Error: "); Serial.print(error_straight);
        // Serial.print(" PID Output: "); Serial.print(output);
        // Serial.print(" Left Speed: "); Serial.print(leftSpeed);
        // Serial.print(" Right Speed: "); Serial.println(rightSpeed);
    }

    ao(); delay(10);
    ao(); delay(10);
}


void MoveStraightDirection(int Movedirection, int targetYaw_straight, int speedBase, float duration, float kp_straight, float ki_straight, float kd_straight,int Slow) {
    float targetYaw_MovePID = 0;
    float currentYaw = getOffsetYaw(); // อ่านค่าปัจจุบัน

    if (getContinuousYaw() >= 360 || getContinuousYaw() <= 0) {
        resetContinuousYaw();
    }

    // คำนวณเป้าหมายตามทิศทาง
    switch (targetYaw_straight) {
        case 0: // N (North)
            targetYaw_MovePID = currentYaw;
            break;
        case 1: // E (East)
            targetYaw_MovePID = currentYaw + 90;
            break;
        case 2: // S (South)
            targetYaw_MovePID = currentYaw + 180;
            break;
        case 3: // W (West)
            targetYaw_MovePID = currentYaw - 90;
            break;
        case 4: // W (West)
            targetYaw_MovePID = currentYaw - 135;
            break;
        case 5: // W (West)
            targetYaw_MovePID = currentYaw - 45;
            break;
        case 6: // W (West)
            targetYaw_MovePID = currentYaw + 45;
            break;
        case 7: // W (West)
            targetYaw_MovePID = currentYaw + 135;
            break;
    }

    // 🔥 ใช้ normalizeAngle() ป้องกันมุมเกิน 360° หรือติดลบ
    targetYaw_MovePID = normalizeAngle(targetYaw_MovePID);

    Serial.print("Move Direction: "); Serial.print(Movedirection);
    Serial.print(" Target Yaw MovePID: "); Serial.println(targetYaw_MovePID);

    moveStraightPID(Movedirection, targetYaw_MovePID, speedBase, duration, kp_straight, ki_straight, kd_straight,Slow);
}


void MoveDirection_East() {
  float targetYaw_turnPID = getOffsetYaw() + 90;
  //updateContinuousYaw();
  if (getContinuousYaw() < 100) {
    targetYaw_turnPID = targetYaw_turnPID - 360;
  }
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
  resetContinuousYaw();
}

void MoveDirection_South() {
  float targetYaw_turnPID = getOffsetYaw() + 180;
  if (getContinuousYaw() < 100) {
    targetYaw_turnPID = targetYaw_turnPID - 360;
  }
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
  resetContinuousYaw();
}

void MoveDirection_West() {
  float targetYaw_turnPID = getOffsetYaw() - 90;
  if (getContinuousYaw() >= 300) {
    targetYaw_turnPID = targetYaw_turnPID + 360;
  }
  turnPID(targetYaw_turnPID,speedMin_turnDirection,speedMax_turnDirection,turnDirection_PID_KP,turnDirection_PID_KD);
  resetContinuousYaw();
}





void moveStraightPID_Encoder(int Movedirection, float targetYaw_straight, int speedBase, int target_encoder, float kp_straight, float ki_straight, float kd_straight,int Slow) {
    long initialEncoderCount = get_pulse_Encoder();
    unsigned long startTime = millis();
    float integral_straight = 0, preverror_straight = 0;

    while (abs(get_pulse_Encoder() - initialEncoderCount) < target_encoder) { 
        updateContinuousYaw();  
        float current_Yaw = getContinuousYaw();
        float error_straight = normalizeAngle(targetYaw_straight - current_Yaw);

        unsigned long now = millis();
        float deltaTime = max((now - startTime) / 1000.0, 0.001);
        startTime = now;

        integral_straight += error_straight * deltaTime;
        integral_straight = constrain(integral_straight, -50, 50);  
        float derivative = (error_straight - preverror_straight) / deltaTime;
        float output = kp_straight * error_straight + ki_straight * integral_straight + kd_straight * derivative;

        preverror_straight = error_straight;

        int rightSpeed;
        int leftSpeed;

        if(Slow == 1){
          float kp_encoder = 0.05;  
          long encoderMoved = abs(get_pulse_Encoder() - initialEncoderCount);
          long encoderError = target_encoder - encoderMoved;
          float speedReduction = encoderError * kp_encoder;
          speedReduction = constrain(speedReduction, 10, speedBase);

          rightSpeed = constrain(speedReduction - output, 0, 100);
          leftSpeed = constrain(speedReduction + output, 0, 100);
        }
        else{
          rightSpeed = constrain(speedBase - output, 0, 100);
          leftSpeed = constrain(speedBase + output, 0, 100);

        }
        if (Movedirection == 0) {  // เดินหน้า
            motor(1, leftSpeed);
            motor(2, rightSpeed);

        } else {  // ถอยหลัง
            motor(1, -rightSpeed);
            motor(2, -leftSpeed);

        }
    }

    ao(); delay(10);
    ao(); 
}
void moveStraightSnapToNearest(int Movedirection, int speedBase, int target_encoder, float kp, float ki, float kd, int Slow) {
  for (int i = 0; i < 5; i++) updateContinuousYaw();
    // updateContinuousYaw(); // สำคัญมาก ต้องอัปเดตค่า Yaw ก่อนอ่าน
    float currentYaw = getContinuousYaw();   // อ่านมุมจริงจาก Gyro
    int snappedYaw = getClosestAngle(currentYaw); // หามุมเป้าหมายใกล้สุด เช่น 0, 90, ...

    moveStraightPID_Encoder(Movedirection, snappedYaw, speedBase, target_encoder, kp, ki, kd, Slow);
}
void MoveStraightDirection_Encoder(int Movedirection, int targetYaw_straight, int speedBase, float duration, float kp_straight, float ki_straight, float kd_straight,int Slow) {
    float targetYaw_MovePID = 0;
    float currentYaw = getOffsetYaw(); // อ่านค่าปัจจุบัน

    if (getContinuousYaw() >= 360 || getContinuousYaw() <= 0) {
        resetContinuousYaw();
    }
    switch (targetYaw_straight) {
        case 0: // N (North)
            targetYaw_MovePID = currentYaw;
            break;
        case 1: // E (East)
            targetYaw_MovePID = currentYaw + 90;
            break;
        case 2: // S (South)
            targetYaw_MovePID = currentYaw + 180;
            break;
        case 3: // W (West)
            targetYaw_MovePID = currentYaw - 90;
            break;
        case 4: // W (West)
            targetYaw_MovePID = currentYaw - 135;
            break;
        case 5: // W (West)
            targetYaw_MovePID = currentYaw - 45;
            break;
        case 6: // W (West)
            targetYaw_MovePID = currentYaw + 45;
            break;
        case 7: // W (West)
            targetYaw_MovePID = currentYaw + 135;
            break;
    }
    targetYaw_MovePID = normalizeAngle(targetYaw_MovePID);
    moveStraightPID_Encoder(Movedirection, targetYaw_MovePID, speedBase, duration, kp_straight, ki_straight, kd_straight,Slow);
}