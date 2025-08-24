bool isYawAligned(float yaw, float tolerance = 2.0) {
    int angles[] = {0, 90, 180, 270, 360};
    for (int i = 0; i < 5; i++) {
        float diff = fabs(yaw - angles[i]);
        if (diff <= tolerance || fabs(diff - 360.0) <= tolerance) {
            return true;
        }
    }
    return false;
}
void readAllData(){
  ADC_L[1] = ADC(1);
	ADC_L[2] = ADC(2);
	ADC_L[3] = ADC(3);
	ADC_L[4] = ADC(4);
	ADC_L[5] = ADC(5);
	ADC_L[6] = ADC(6);
	ADC_L[7] = ADC(7);
	ADC_L[8] = ADC(8);
	ADC_L[9] = ADC(9);
	distance_Raw = sensor.getDistance();
	conYaw = getContinuousYaw();
	offset_Yaw = getOffsetYaw();
	Yaw_loop1 = getYaw();

}


int ADC_Loop1(int analog_CH){
  return ADC_L[analog_CH];
}
void setCalibrate(int round){
  if(first_state_for_calribrate == 0){
    for (uint8_t i = 0; i < 9; i++)
    {
      PID_Max[i] = 0;
      PID_Min[i] = 1023;
    }
    first_state_for_calribrate = 1;
  }
  for(int roundOfCalribtate = 0; roundOfCalribtate < round ;roundOfCalribtate++ ){
    ADC_L[1] = ADC(1);
	ADC_L[2] = ADC(2);
	ADC_L[3] = ADC(3);
	ADC_L[4] = ADC(4);
	ADC_L[5] = ADC(5);
	ADC_L[6] = ADC(6);
	ADC_L[7] = ADC(7);
	ADC_L[8] = ADC(8);
	ADC_L[9] = ADC(9);
    for (uint8_t i = 0; i < 9; i++)
    {
      if(ADC_Loop1(PID_SetupPin[i]) > PID_Max[i] || PID_Max[i] >= 1023 ){
        PID_Max[i]  = ADC_Loop1(PID_SetupPin[i]);
        if(PID_Max[i] > 1023 )PID_Max[i] = 1023;
      }
    }
    for (uint8_t i = 0; i < 9; i++)
    {
      if(ADC_Loop1(PID_SetupPin[i]) < PID_Min[i] || PID_Min[i] == 0){
        PID_Min[i] = ADC_Loop1(PID_SetupPin[i]);
        if(PID_Min[i] < 0) PID_Min[i] = 0;
      }
    }
    delay(1);
  }
}
void wait_SW1_setup1() {
  
  display.clearDisplay();
  display.setTextSize(1);
  do{
    readAllData();
    display.clearDisplay();
    drawString(0,0,String(String("A1::")));
    drawString(28,0,String(ADC_Loop1(1)));
    drawString(65,0,String(String("A2::")));
    drawString(93,0,String(ADC_Loop1(2)));
    drawString(0,10,String(String("A3::")));
    drawString(28,10,String(ADC_Loop1(3)));
    drawString(65,10,String(String("A4::")));
    drawString(93,10,String(ADC_Loop1(4)));
    drawString(0,20,String(String("A5::")));
    drawString(28,20,String(ADC_Loop1(5)));
    drawString(65,20,String(String("A6::")));
    drawString(93,20,String(ADC_Loop1(6)));
    drawString(0,30,String(String("A7::")));
    drawString(28,30,String(ADC_Loop1(7)));
    drawString(65,30,String(String("A8::")));
    drawString(93,30,String(ADC_Loop1(8)));
    drawString(0,40,String(String("A9::")));
    drawString(28,40,String(ADC_Loop1(9)));
    drawString(65,40,String(String("E:")));
    drawString(93,40,String(get_pulse_Encoder()));
    drawString(0,50,String(String("Gy:")));
    drawString(20,50,String(conYaw));
    drawString(65,50,String(String("Dis:")));
    drawString(90,50,String(distance_Raw));
    
    if(BOOTSEL == 1){
        display.clearDisplay();
        // buzzer(1500,200);
        
        drawString(0,0,"Calibrate");
        display.display();
        delay(500);
        motor(1,20);
        motor(2,20);
        setCalibrate(500);
        ao();
        display.clearDisplay();
            drawString(0,0,String(String("A1::")));
            drawString(28,0,String(PID_Min[0]));
            drawString(65,0,String(String("A2::")));
            drawString(93,0,String(PID_Min[4]));
            drawString(0,10,String(String("A3::")));
            drawString(28,10,String(PID_Min[2]));
            drawString(65,10,String(String("A4::")));
            drawString(93,10,String(PID_Min[3]));
            drawString(0,20,String(String("A5::")));
            drawString(28,20,String(PID_Min[4]));
            drawString(65,20,String(String("A6::")));
            drawString(93,20,String(PID_Min[5]));
            drawString(0,30,String(String("A7::")));
            drawString(28,30,String(PID_Min[6]));
            drawString(65,30,String(String("A8::")));
            drawString(93,30,String(PID_Min[7]));
            drawString(0,40,String(String("A9::")));
            drawString(28,40,String(PID_Min[8]));
            display.display();
        while(BOOTSEL == 0);
        motor(1,-20);
        motor(2,-20);
        setCalibrate(500);
        ao();
        
        display.clearDisplay();
        drawString(0,0,String(String("A1::")));
            drawString(28,0,String(PID_Max[0]));
            drawString(65,0,String(String("A2::")));
            drawString(93,0,String(PID_Max[1]));
            drawString(0,10,String(String("A3::")));
            drawString(28,10,String(PID_Max[2]));
            drawString(65,10,String(String("A4::")));
            drawString(93,10,String(PID_Max[3]));
            drawString(0,20,String(String("A5::")));
            drawString(28,20,String(PID_Max[4]));
            drawString(65,20,String(String("A6::")));
            drawString(93,20,String(PID_Max[5]));
            drawString(0,30,String(String("A7::")));
            drawString(28,30,String(PID_Max[6]));
            drawString(65,30,String(String("A8::")));
            drawString(93,30,String(PID_Max[7]));
            drawString(0,40,String(String("A9::")));
            drawString(28,40,String(PID_Max[8]));
            display.display();
            while(BOOTSEL == 0);
            delay(200);
    }

    delay(50);
    display.display();
  } while (digitalRead(9) == 1);
  state_waitSW1 = 1;
  
}
void wait_state_SW1(){
  Serial.begin(115200);
 do{
  
    Serial.println(state_waitSW1);
    delay(200);
    if(state_waitSW1 == 1){
      break;
    }
  } while(1);
  buzzer(1500,200);
  buzzer(300,100);
  delay(500);
}
void moveStraightPID_Encoder_andSensor(int Movedirection, float targetYaw_straight, int speedBase, int target_encoder, float kp_straight, float ki_straight, float kd_straight,int function) {
    long initialEncoderCount = get_pulse_Encoder();
    unsigned long startTime = millis();
    float integral_straight = 0, preverror_straight = 0;
    while (abs(get_pulse_Encoder() - initialEncoderCount) < target_encoder) { 
    	if(function == 0){
    		if(Read_status_sensor(7) and Read_status_sensor(8)){break;}
    	}
    	else if(function == 1){
    		if(Read_status_sensor(7)){break;}
    	}
    	else if(function == 2){
    		if(Read_status_sensor(8)){break;}
    	}
      else if(function == 3 ){
        if((Read_status_sensor(0) and Read_status_sensor(6)) or (Read_status_sensor(1) and Read_status_sensor(5))) {break;}
      }
      else if(function == 4 ){
        if((!Read_status_sensor(0) and !Read_status_sensor(1)) or (!Read_status_sensor(5) and !Read_status_sensor(6))) {delay(100);break;}
      }
        float current_Yaw = conYaw;
        float error_straight = normalizeAngle(targetYaw_straight - current_Yaw);
      static unsigned long previousTime = millis();
		  unsigned long now = millis();
		  float deltaTime = max((now - previousTime) / 1000.0, 0.001);
		  previousTime = now;
        float derivative = (error_straight - preverror_straight) / deltaTime;
        float output = kp_straight * error_straight  + kd_straight * derivative;
        preverror_straight = error_straight;
        int rightSpeed;
        int leftSpeed;
          rightSpeed = constrain(speedBase - output, 0, 100);
          leftSpeed = constrain(speedBase + output, 0, 100);

        if (Movedirection == 0) {  // เดินหน้า
            motor(1, leftSpeed);
            motor(2, rightSpeed);

        } else {  // ถอยหลัง
            motor(1, -rightSpeed);
            motor(2, -leftSpeed);

        }
    }
    ao();
    
}
int getClosestAngle45(float currentAngle) {
    // ปรับให้อยู่ในช่วง 0-360
    while (currentAngle < 0) currentAngle += 360;
    while (currentAngle >= 360) currentAngle -= 360;

    int angles[] = {0,45, 90,135, 180,225, 270,315, 360};
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
void moveStraightSnapToNearest_andSensor(int Movedirection, int speedBase, int target_encoder, float kp, float ki, float kd, int function) {
  float currentYaw = conYaw;   // อ่านมุมจริงจาก Gyro
    int snappedYaw = getClosestAngle(currentYaw);
    moveStraightPID_Encoder_andSensor(Movedirection, snappedYaw, speedBase, target_encoder, kp, ki, kd, function);
}
int readline_2(int function_read)   
{                
  int onLine = 0;
  long avg = 0;
  long sum = 0;
  for (uint8_t i = 0; i < PID_NumPin ; i++) 
  {
    long value;
    if(Front_color == 0){
      value = map(ADC(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 100, 0);
    }
    else {
      value = map(ADC(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 0, 100);
    }
    value = constrain(value,0,100);      
    if (value > 100 - 50) { 
      onLine = 1;
    }
    if (value > 5){
      avg += (long)value * (i * 100)+ 50;
      sum += value;
    }
  }
   if (onLine == 0)
  {
    
    if(function_read == 0){
        if (_lastPosition < 300) {
          return 0; // หันซ้าย
        } else  {
          return (600); // หันขวา
        } 
    }
    else if(function_read == 1){
        int leftThreshold = ((PID_NumPin - 1) * 100) / 3;
        int rightThreshold = ((PID_NumPin - 1) * 100) * 2 / 3;
        int center = ((PID_NumPin - 1) * 100) / 2;

        if (_lastPosition < leftThreshold) {
          return 0; // หันซ้าย
        } else if (_lastPosition > rightThreshold) {
          return ((PID_NumPin - 1) * 100); // หันขวา
        } else {
          return center; // วิ่งตรง
        }
    }
    else if(function_read == 2){
        return 0;
    }
    else if(function_read == 3){
        return 600;
    }
    else{
        return 300;
    }
  }

  if (sum == 0) return _lastPosition; // ป้องกันหาร 0
  _lastPosition = avg / sum;
  return _lastPosition;
}

void Run_PID_2(int RUN_PID_speed, float RUN_PID_KP, float RUN_PID_KD, int function_read) {
  
  int present_position = readline_2(function_read);
  int setpoint = ((PID_NumPin - 1) * 100) / 2;
  int errors = present_position - setpoint;
  static int previous_error = 0;
  int derivative = errors - previous_error;
  int output = RUN_PID_KP * errors + RUN_PID_KD * derivative;
  output = constrain(output, -100, 100);
  int m1Speed = RUN_PID_speed + output;
  int m2Speed = RUN_PID_speed - output;
  m1Speed = constrain(m1Speed, -80, 80);
  m2Speed = constrain(m2Speed, -80, 80);
  motor(1, m1Speed);
  motor(2, m2Speed);

  delay(1);
  previous_error = errors;
}

void Run_PID_until_frontSensor(int RUN_PID_speed,float RUN_PID_KP,float RUN_PID_KD,int sumValue_traget,int function_read){
  do
  {
    int present_position = readline_2(function_read);
    int setpoint = (((PID_NumPin - 1) * 100) / 2) + offset_setpoint ;
    errors = present_position - setpoint;
	  static int previous_error = 0;
    derivative = (errors - previous_error) ;
    output = RUN_PID_KP * errors  + RUN_PID_KD * derivative;
    if((Read_status_sensor(0) and Read_status_sensor(1) and Read_status_sensor(3)) or Read_status_sensor(3) and Read_status_sensor(5)and Read_status_sensor(6) ){
    	break;
    }

    int m1Speed = RUN_PID_speed + output ;
    int m2Speed = RUN_PID_speed - output;
    m1Speed = constrain(m1Speed, -80, 80);
    m2Speed = constrain(m2Speed, -80, 80);
    motor(1,m1Speed);
    motor(2,m2Speed);
    delay(1);
    
    previous_error = errors;
  }while(Read_sumValue_sensor() < sumValue_traget);
  mst();
}
void Run_PID_until_encoder(int RUN_PID_speed,float RUN_PID_KP,float RUN_PID_KD,int target_encoder,int function_read){
    long initialEncoderCount = get_pulse_Encoder();
  	
  do
  {
    int present_position = readline_2(function_read);
    int setpoint = (((PID_NumPin - 1) * 100) / 2) + offset_setpoint ;
    errors = present_position - setpoint;
	static int previous_error = 0;
    derivative = (errors - previous_error) ;
    output = RUN_PID_KP * errors  + RUN_PID_KD * derivative;
    
    int m1Speed = RUN_PID_speed + output ;
    int m2Speed = RUN_PID_speed - output;
    m1Speed = constrain(m1Speed, -80, 80);
    m2Speed = constrain(m2Speed, -80, 80);
    motor(1,m1Speed);
    motor(2,m2Speed);
    delay(2);
    previous_error = errors;

  }while (abs(get_pulse_Encoder() - initialEncoderCount) < target_encoder) ;
  ao();
}
void Run_PID_until_can(int RUN_PID_speed,float RUN_PID_KP,float RUN_PID_KD,int target_encoder,int function_read){  
  state_readDistance = 1; 
  do
  {
    int present_position = readline_2(function_read);
    int setpoint = (((PID_NumPin - 1) * 100) / 2) + offset_setpoint ;
    errors = present_position - setpoint;
    static int previous_error = 0;
    derivative = (errors - previous_error) ;
    output = RUN_PID_KP * errors  + RUN_PID_KD * derivative;
    int m1Speed = RUN_PID_speed + output;
    int m2Speed = RUN_PID_speed - output;
    m1Speed = constrain(m1Speed, -80, 80);
    m2Speed = constrain(m2Speed, -80, 80);
    if(!Read_status_sensor(0) and !Read_status_sensor(1) and !Read_status_sensor(2) and !Read_status_sensor(3)and !Read_status_sensor(4) and !Read_status_sensor(5) and !Read_status_sensor(6)){
      ao();
      delay(100);
      break;
    }
    motor(1,m1Speed);
    motor(2,m2Speed);
    delay(1);
    previous_error = errors;
    //int Distance = sensor.getDistance();
      int Distance = distance_Raw;
    if(Distance < target_encoder and Distance >10){
        ao();
        delay(100);
        break;
    }

  }while (1) ;
  ao();
  state_readDistance = 0;
}
void Run_PID_until_sensorback(int RUN_PID_speed,float RUN_PID_KP,float RUN_PID_KD,int direction_sensor,int function_read){
  
  do
  {
    int present_position = readline_2(function_read);
    int setpoint = (((PID_NumPin - 1) * 100) / 2) + offset_setpoint ;
    errors = present_position - setpoint;
	  static int previous_error = 0;
    derivative = (errors - previous_error) ;
    output = RUN_PID_KP * errors  + RUN_PID_KD * derivative;
    
    int m1Speed = RUN_PID_speed + output ;
    int m2Speed = RUN_PID_speed - output;
    m1Speed = constrain(m1Speed, -80, 80);
    m2Speed = constrain(m2Speed, -80, 80);
    motor(1,m1Speed);
    motor(2,m2Speed);
    previous_error = errors;
    if(direction_sensor == 0){
        if(Read_status_sensor(7)){
            break;
        }
    }
    else if(direction_sensor == 1){
         if(Read_status_sensor(8)){
            break;
        }
    }
    else if(direction_sensor == 2){
         if(Read_status_sensor(7) and Read_status_sensor(8)){
            break;
        }
    }
    else{
        if(Read_status_sensor(7)<700 or Read_status_sensor(8)){
            break;
        }
    }
    delay(1);
  }while (1) ;
  mst();
}


void Run_PID_front_check_back(int check_state,int count_of_encoder)
{
  long initialEncoderCount_check = get_pulse_Encoder();
  int targetDistance_ = count_of_encoder;
	//display.clearDisplay();display.setTextSize(3);drawString(0, 0, String(0));display.display();
	 while(1){
        Run_PID_2(30,0.2,2,4);
         if((abs(get_pulse_Encoder() - initialEncoderCount_check) > targetDistance_))	  {
             break; 
          }
        if(Read_status_sensor(0) and (Read_status_sensor(5) or Read_status_sensor(6)) ){
           // display.clearDisplay();display.setTextSize(3);drawString(0, 0, String(1));display.display(); 
           break;
        }
        if(Read_status_sensor(6) and (Read_status_sensor(0) or Read_status_sensor(1))){
            // display.clearDisplay();display.setTextSize(3);drawString(0, 0, String(2));display.display(); 
            break;
        }
        else if(Read_status_sensor(0) and Read_status_sensor(1) and Read_status_sensor(2)and Read_status_sensor(3) and (check_state == 1 or check_state == 0)){
        	// display.clearDisplay();display.setTextSize(3);drawString(0, 0, String(3));display.display(); 
        	break;
        }
        else if(Read_status_sensor(6) and Read_status_sensor(5) and Read_status_sensor(4) and Read_status_sensor(3) and (check_state == 2 or check_state == 0)){
        	// display.clearDisplay();display.setTextSize(3);drawString(0, 0, String(4));display.display(); 
        	break;
        }
        else if(Read_sumValue_sensor() > 500){
        	// display.clearDisplay();display.setTextSize(3);drawString(0, 0, String(5));display.display(); 
        	break;
        }
        
    }
    initialEncoderCount_check = get_pulse_Encoder();
    int targetDistance = 350; 
    if(check_state == 0){
    	while(!Read_status_sensor(7) and !Read_status_sensor(8)){
	    	motor(1,30);motor(2,30);
        if((abs(get_pulse_Encoder() - initialEncoderCount_check) > targetDistance))	  {
             break; 
          }

	    }
	    delay(40);
	    ao();
    }
    else if(check_state == 1){
    	while(!Read_status_sensor(7)){
	    	motor(1,30);motor(2,30);
        if((abs(get_pulse_Encoder() - initialEncoderCount_check) > targetDistance))	  {
             break; 
          }

	    }
	    delay(30);
	    ao();
    }
    else if(check_state == 2){
    	while(!Read_status_sensor(8)){
	    	motor(1,30);motor(2,30);
        if((abs(get_pulse_Encoder() - initialEncoderCount_check) > targetDistance))	  {
             break; 
          }

	    }
	    delay(30);
	    ao();
    }
}
void move_SQ_4d(int direction_turn,int direction_exit){
   while(!Read_status_sensor(1) or !Read_status_sensor(5) ){
        Run_PID_2(30,0.2,1,4);
        if(Read_status_sensor(0) and (Read_status_sensor(5) or Read_status_sensor(6)) ){
            break;
        }
        if(Read_status_sensor(6) and (Read_status_sensor(0) or Read_status_sensor(1))){
            break;
        }
        else if(Read_sumValue_sensor() > 420){
        	break;
        }
        
    }
    long initialEncoderCount_check = get_pulse_Encoder();
    int targetDistance = 300; 
  while(!Read_status_sensor(7) and !Read_status_sensor(8)){
    	motor(1,30);motor(2,30);
      if((abs(get_pulse_Encoder() - initialEncoderCount_check) > targetDistance))	  {
        break; 
      }

    }
    delay(40);
    ao();
  //   delay(200);
  buzzer(500,100);
  if(direction_turn == 1){
    turnByAngle_fix(90);
    ao();delay(50);
    moveStraightSnapToNearest(0, 40, 550, 0.5, 0, 0, 0);
   ao();delay(50);
    turnByAngle_fix(-90);
    if(direction_exit == 1){
    	ao();delay(50);
    	moveStraightSnapToNearest(0, 40, 700, 0.5, 0, 0, 0);
        ao();delay(50);
         turnByAngle_fix(90);

    }
    else if(direction_exit == 2){
        
        moveStraightSnapToNearest(0, 40, 1300, 0.5, 0, 0, 0);
        ao();delay(50);
        turnByAngle_fix(-90);
        moveStraightSnapToNearest(0, 40, 550, 0.5, 0, 0, 0);
        ao();delay(50);
        turnByAngle_fix(90);
    }
  }
  if(direction_turn == 2){
    turnByAngle_fix(-90);
    ao();delay(50);
    moveStraightSnapToNearest(0, 40, 550, 0.5, 0, 0, 0);
    ao();delay(50);
    turnByAngle_fix(90);
    ao();delay(50);
    if(direction_exit == 1){
    	moveStraightSnapToNearest(0, 40, 700, 0.5, 0, 0, 0);
      ao();delay(50);
      turnByAngle_fix(-90);
      ao();delay(50);

    }
    else if(direction_exit == 2){
        
        moveStraightSnapToNearest(0, 40, 1300, 0.5, 0, 0, 0);
        ao();delay(50);
        turnByAngle_fix(90);
        ao();delay(50);
        moveStraightSnapToNearest(0, 40, 550, 0.5, 0, 0, 0);
        ao();delay(50);
        turnByAngle_fix(-90);
    }
  }
}
void move_SQ_2d(int direction_turn){
  while(!Read_status_sensor(0) or !Read_status_sensor(6) ){
        Run_PID_2(30,0.2,1,4);
        if(Read_status_sensor(7) or Read_status_sensor(8)){
            break;
        }
        if(Read_status_sensor(0) and (Read_status_sensor(5) or Read_status_sensor(6)) ){
            break;
        }
        if(Read_status_sensor(6) and (Read_status_sensor(0) or Read_status_sensor(1))){
            break;
        }
        else if(Read_sumValue_sensor() > 420){
        	break;
        }
        
    }
    long initialEncoderCount_check = get_pulse_Encoder();
    int targetDistance = 300; 
    while(!Read_status_sensor(7) and !Read_status_sensor(8)){
    	motor(1,30);motor(2,30);
      if((abs(get_pulse_Encoder() - initialEncoderCount_check) > targetDistance))	  {
        break; 
      }

    }
    delay(50);
    ao();

  if(direction_turn == 1){
    turnByAngle_fix(90);
    ao();delay(50);
    Run_PID_front_check_back(1,600);
    turnByAngle_fix(-90);
    ao();delay(50);
    Run_PID_front_check_back(1,1400);
    turnByAngle_fix(-90);
    ao();delay(50);
    Run_PID_front_check_back(2,700);
    turnByAngle_fix(90);
    }
  else if(direction_turn == 2){
    turnByAngle_fix(-90);
    ao();delay(50);
    Run_PID_front_check_back(2,600);
    //moveStraightPID_Encoder(0, getContinuousYaw(), 40, 600, 0.5, 0, 0, 0);
    turnByAngle_fix(90);
    //moveStraightPID_Encoder(0, getContinuousYaw(), 40, 1400, 0.5, 0, 0, 0);
    ao();delay(50);
    Run_PID_front_check_back(2,1400);
    turnByAngle_fix(90);
    ao();delay(50);
    Run_PID_front_check_back(1,700);
    //moveStraightPID_Encoder(0, getContinuousYaw(), 40, 700, 0.5, 0, 0, 0);
    turnByAngle_fix(-90);
  }
}

void wait_check_line(){
 float last_yaw = 0;
 unsigned long time_out = millis();
 last_yaw = conYaw;
 while(!Read_status_sensor(0) and !Read_status_sensor(1) and !Read_status_sensor(2) and !Read_status_sensor(3)and !Read_status_sensor(4) and !Read_status_sensor(5) and !Read_status_sensor(6)){
    if(millis() - time_out > 1500){
      break;
      turnPID(last_yaw,10,50,2,0.05);
    }
  }
  ao();
}


void move_diamond(int direction_turn, int direction_exit,int checkline) {
  int state_of_break_loop = 0;
  if(checkline == 0){
      while(!Read_status_sensor(1) or !Read_status_sensor(5) ){
          Run_PID_2(30,0.4,2,4);
          if(Read_status_sensor(0) and Read_status_sensor(1) and Read_status_sensor(2)and Read_status_sensor(3)){state_of_break_loop = 1;break;}
          else if(Read_status_sensor(6) and Read_status_sensor(5) and Read_status_sensor(4) and Read_status_sensor(3) ){state_of_break_loop = 2;break;}
          else if(Read_status_sensor(0) and (Read_status_sensor(5) or Read_status_sensor(6)) ){state_of_break_loop = 3;break;}
          else if(Read_status_sensor(6) and (Read_status_sensor(0) or Read_status_sensor(1))){state_of_break_loop = 4;break;}
          else if(Read_sumValue_sensor() > 420){break;state_of_break_loop = 5;}
      }
      
      if(state_of_break_loop == 1 ){ao();turnByAngle_fix(-2);ao();delay(50);}
      else if(state_of_break_loop == 2 ){ao();turnByAngle_fix(2);ao();delay(50);}

      long initialEncoderCount_check = get_pulse_Encoder();
      int targetDistance = 350; 
      while(!Read_status_sensor(7) && !Read_status_sensor(8)) {
          motor(1, 30);
          motor(2, 30);
          if((abs(get_pulse_Encoder() - initialEncoderCount_check) > targetDistance)){
        break; 
        }
      }
      delay(50);
      if(direction_exit >= 3){
        delay(20);
      }
      ao();
  }
  
 //ตัวใหม่                                                      
  if (direction_turn == 1) {             // Turn RIGHT
        if (direction_exit == 1) {
          motor(1,25);motor(2,-25);delay(200);
          wait_check_line();
          Run_PID_front_check_back(1,450);
          turnByAngle_fix(45);
          //motor(1,25);motor(2,-25);delay(150);ao();

          } else if (direction_exit == 2) {
          motor(1,25);motor(2,-25);delay(200);
          wait_check_line();
          Run_PID_front_check_back(1,350);
          motor(1,-45);motor(2,45);delay(200);ao();
          Run_PID_front_check_back(1,850);
          
          motor(1,25);motor(2,-25);delay(150);ao();
        }
        else if (direction_exit == 3) {
          turn_check(90,15,45,300,1);
          turnByAngle_fix(1);
      }
    }

  if (direction_turn == 2) {            // Turn LEFT
        if (direction_exit == 1) {
          motor(1,-25);motor(2,25);delay(200);
          wait_check_line();
          Run_PID_front_check_back(1,450);
          turnByAngle_fix(-45);
          //motor(1,-25);motor(2,25);delay(150);ao();
          
          } else if (direction_exit == 2) {
          motor(1,-25);motor(2,25);delay(200);
          wait_check_line();
          Run_PID_front_check_back(1,700);
          motor(1,45);motor(2,-45);delay(200);ao();
          Run_PID_front_check_back(1,350);
          motor(1,-25);motor(2,25);delay(200);ao();
        }
         else if (direction_exit == 3) {
          turn_check(-90,15,45,300,1);
          turnByAngle_fix(1);

        }
      }
    }
    
/*
//  ตัวเก่า
    if (direction_turn == 1) {            // Turn RIGHT

        if (direction_exit == 1) {
          turnByAngle(45);
          motor(1,20);
          motor(2,-20);
          wait_check_line();
          Run_PID_front_check_back(1,450);
          turnByAngle_fix(45);
        } else if (direction_exit == 2) {
          turnByAngle(45);
          motor(1,20);
          motor(2,-20);
          wait_check_line();
            Run_PID_front_check_back(1,450);
            turnByAngle(-90);
            Run_PID_front_check_back(1,450);
            turnByAngle_fix(45);
        }
        else if (direction_exit == 3) {

          motor(1,45);motor(2,5);
          delay(200);
          ao();
          motor(1,30);motor(2,20);
          delay(50);
          ao();
          motor(1,50);motor(2,5);
          delay(80);
          ao();
          motor(1,20);motor(2,20);
          delay(50);
          ao();
          turnByAngle_fix(1);


        }
    }

    if (direction_turn == 2) {			// Turn LEFT
        if (direction_exit == 1) {
          turnByAngle(-45);
          motor(1,-20);
          motor(2,20);
          wait_check_line();
          Run_PID_front_check_back(2,500);
            turnByAngle_fix(-45);
        } else if (direction_exit == 2) {
          turnByAngle(-45);
          motor(1,-20);
            motor(2,20);
          wait_check_line();
            Run_PID_front_check_back(2,500);
            turnByAngle(90);
            Run_PID_front_check_back(2,500);
            turnByAngle_fix(-45);
        }
        else if (direction_exit == 3) {
          motor(1,5);motor(2,45);
          delay(200);
          ao();
          motor(1,20);motor(2,30);
          delay(50);
          ao();
          motor(1,0);motor(2,50);
          delay(90);
          ao();
          motor(1,20);motor(2,20);
          delay(50);
          ao();
          turnByAngle_fix(1);

        }
    }
}
*/
void move_cross(int direction_turn){
  if(direction_turn >= 4 ){
    Run_PID_until_frontSensor(30,0.2,2,500,4);
    if(direction_turn == 4){
      turn_check(-90,15,45,300,1);
      // motor(1,0);motor(2,45);
      // delay(300);
      // ao();
      // turnByAngle_fix(1);
      //Run_PID_until_encoder(30, 0.2, 1, 80,1);
    }
    else if(direction_turn == 5){
      turn_check(90,15,45,300,1);
      // motor(1,45);motor(2,0);
      // delay(300);
      // ao();
      // turnByAngle_fix(1);
      //Run_PID_until_encoder(30, 0.2, 1, 80,1);
    }
  }
  else if(direction_turn < 3){
    Run_PID_front_check_back(0,1000);
    if(direction_turn == 0){                        //turn Left
      turnByAngle_fix(-90);
      Run_PID_until_encoder(30, 0.2, 1, 180,1); //จาก300
    }
    else if(direction_turn == 1){
      Run_PID_until_encoder(30, 0.2, 1, 400,1);     //Go stress//จาก600
    }
    else if(direction_turn == 2){
      turnByAngle_fix(90);
      Run_PID_until_encoder(30, 0.2, 1, 180,1);//จาก300
    
    }
  }
}
void move_tri(int direction_turn){
  if(direction_turn >= 4 ){
    Run_PID_until_frontSensor(30,0.2,2,500,4);
    if(direction_turn == 4){
      motor(1,0);motor(2,45);
      delay(300);
      ao();
      // turnByAngle_fix(1);
      Run_PID_until_encoder(30, 0.2, 1, 100,1);
    }
    else if(direction_turn == 5){
      motor(1,45);motor(2,0);
      delay(300);
      ao();
      // turnByAngle_fix(1);
      Run_PID_until_encoder(30, 0.2, 1, 100,1);
    }
  }
  else {
    Run_PID_front_check_back(0,1000);
    if(direction_turn == 0){
      ao();
      // turnByAngle_fix(-90);
      Run_PID_until_encoder(40, 0.5, 2, 250,0);
    }
    else if(direction_turn == 1){
      ao();
      // turnByAngle_fix(90);
      Run_PID_until_encoder(40, 0.5, 2, 250,0);
    }
    else{
      Run_PID_until_encoder(40, 0.5, 2, 600,0);
    }
  }
	
}





void move_number2(int direction_turn){
  if(direction_turn == 1){
    Run_PID_until_encoder(30,0.5,2,3900,2);
  }
  else if(direction_turn == 2){
    Run_PID_until_encoder(30,0.5,2,4000,3);
  }
  ao();
  delay(100);
}
void move_start(int pluse_dis){
    MoveStraightDirection_Encoder(0, 0, 40, pluse_dis, 0.5, 0, 0, 0);
}
void move_straight(int pluse_dis){
    Run_PID_until_encoder(40, 0.2, 1, pluse_dis,4);
}
void move_back(int pluse_dis){
    //Run_PID_until_encoder(50, 0.5, 2, 5000,4);
    moveStraightSnapToNearest(1,30, pluse_dis,0.5,0,0.1,0);
}
void move_original_angle(int direction,int speed,int pluse,int state){
  if(state == 0){
    moveStraightSnapToNearest(direction,speed, pluse,0.5,0,0.1,0);
  }
  else{
    long initialEncoderCount = get_pulse_Encoder();
    do{
      if(direction == 0){motor(1,speed);motor(2,speed);}
      if(direction == 1){motor(1,-speed);motor(2,-speed);}
    }
    while(abs(get_pulse_Encoder() - initialEncoderCount) < pluse);
    ao();delay(100);
  }
}
void move_chopsticks(int pluse_dis ,int servo_up,int servo_down){

    servoRun(4, servo_up);
    delay(250);
    moveStraightSnapToNearest(0,20, pluse_dis,0.7,0,0.1,0);
    ao();
  	servoRun(4, servo_down);
  	delay(100);
  	motor(1, -10);
  	motor(2, -10);
  	delay(700);
    
}
void move_snake(int pluse_dis){
    //Run_PID_until_encoder(25, 0.5, 5, 3300,0);
    Run_PID_until_encoder(25, 0.3, 1, pluse_dis,0);
}
void move_triangle(int pluse_dis){
    
    Run_PID_until_encoder(30, 0.2, 1, pluse_dis,0);
}
void move_Sixsax(int pluse_dis){
    //Run_PID_until_encoder(50, 0.5, 2, 5000,4);
    Run_PID_until_encoder(30, 0.3, 2, pluse_dis,0);
}
void move_S(int pluse_dis){
    Run_PID_until_encoder(20,0.4,2,pluse_dis,0);
    //Run_PID_until_encoder(35,0.4,5,4500,0);
}
void move_kong(int pluse_dis){
    
    Run_PID_until_encoder(30,0.4,1,pluse_dis,0);
}
void Turn_ultil_check_Sensor(int direction_turn){
	if(direction_turn == 2){
		motor(1,-20);
        motor(2,-20);
        delay(10);
	}
    else if(direction_turn == 0){
        motor(1,-50);
        motor(2,50);
    }
    else{
        motor(1,50);
        motor(2,-50);
    }
}
void move_check_back(int speed){
  moveStraightSnapToNearest_andSensor(1, speed,1500,0.5,0,0.0,3);
  ao();
  delay(100);
  moveStraightSnapToNearest_andSensor(0, speed,1500,0.5,0,0.0,4);
  delay(20);
  mst();
}
void move_gripecan_4d(int direction_turn,int direction_exit){
   while(!Read_status_sensor(1) or !Read_status_sensor(5) ){
        Run_PID_2(30,0.2,1,4);
        if(Read_status_sensor(0) and (Read_status_sensor(5) or Read_status_sensor(6)) ){
            break;
        }
        if(Read_status_sensor(6) and (Read_status_sensor(0) or Read_status_sensor(1))){
            break;
        }
        else if(Read_sumValue_sensor() > 420){
        	break;
        }
        
    }
  while(!Read_status_sensor(7) and !Read_status_sensor(8)){
    	motor(1,30);motor(2,30);
    }
    delay(50);
    ao();
  //   delay(200);
  buzzer(500,100);
  if(direction_turn == 1){
    turnByAngle_fix(90);
    // moveStraightSnapToNearest(0, 40, 550, 0.5, 0, 0, 0);
    Run_PID_front_check_back(1,1000);
    if(direction_exit == 1){
    delay(100);
    turnByAngle(-45);
    delay(100);
    servoRun(3,130);
    servoRun(2,10);
    delay(100);
    motor(1,15);
    motor(2,15);
    delay(140);
    ao();
    servoRun(3,20);
    delay(250);
    servoRun(2,90);
    delay(200);
    motor(1,-15);
    motor(2,-15);
    delay(140);
    ao();
    delay(100);
    turnByAngle_fix(-45);
    // moveStraightSnapToNearest(0, 40, 550, 0.5, 0, 0, 0);
    Run_PID_front_check_back(2,1000);
    delay(100);
    turnByAngle_fix(-90);
    moveStraightSnapToNearest(1, 20, 900, 0.5, 0, 0, 0);
    }
    else if(direction_exit == 2){
    turnByAngle_fix(-90);
    moveStraightSnapToNearest(0, 30, 1500, 0.5, 0, 0, 0);
    delay(100);
    turnByAngle(-45);
    delay(100);
    servoRun(3,130);
    servoRun(2,10);
    delay(100);
    motor(1,15);
    motor(2,15);
    delay(140);
    ao();
    servoRun(3,20);
    delay(250);
    servoRun(2,90);
    delay(200);
    motor(1,-15);
    motor(2,-15);
    delay(140);
    ao();
    delay(100);
    turnByAngle_fix(-45);
    // moveStraightSnapToNearest(0, 40, 550, 0.5, 0, 0, 0);
    Run_PID_front_check_back(2,1000);
    delay(100);
    turnByAngle_fix(-90);
    moveStraightSnapToNearest(1, 20, 900, 0.5, 0, 0, 0);
    }
  }
  if(direction_turn == 2){
    turnByAngle_fix(-90);
    // moveStraightSnapToNearest(0, 40, 550, 0.5, 0, 0, 0);
    Run_PID_front_check_back(2,1000);
    if(direction_exit == 1){
    delay(100);
    turnByAngle(45);
    delay(100);
    servoRun(3,130);
    servoRun(2,10);
    delay(100);
    motor(1,15);
    motor(2,15);
    delay(140);
    ao();
    servoRun(3,20);
    delay(250);
    servoRun(2,90);
    delay(200);
    motor(1,-15);
    motor(2,-15);
    delay(140);
    ao();
    delay(100);
    turnByAngle_fix(45);
    // moveStraightSnapToNearest(0, 30, 550, 0.5, 0, 0, 0);
    Run_PID_front_check_back(1,1000);
    delay(100);
    turnByAngle_fix(90);
    moveStraightSnapToNearest(1, 20, 900, 0.5, 0, 0, 0);
    }
    else if(direction_exit == 2){
    turnByAngle_fix(90);
    moveStraightSnapToNearest(0, 30, 1500, 0.5, 0, 0, 0);
    delay(100);
    turnByAngle(45);
    delay(100);
    servoRun(3,130);
    servoRun(2,10);
    delay(100);
    motor(1,15);
    motor(2,15);
    delay(140);
    ao();
    servoRun(3,20);
    delay(250);
    servoRun(2,90);
    delay(200);
    motor(1,-15);
    motor(2,-15);
    delay(140);
    ao();
    delay(100);
    turnByAngle_fix(45);
    // moveStraightSnapToNearest(0, 30, 550, 0.5, 0, 0, 0);
    Run_PID_front_check_back(1,1000);
    delay(100);
    turnByAngle_fix(90);
    moveStraightSnapToNearest(1, 20, 900, 0.5, 0, 0, 0);
    }
  }
}

void move_gripecan_2d(int direction_turn){
   while(!Read_status_sensor(1) or !Read_status_sensor(5) ){
        Run_PID_2(30,0.2,1,4);
        if(Read_status_sensor(0) and (Read_status_sensor(5) or Read_status_sensor(6)) ){
            break;
        }
        if(Read_status_sensor(6) and (Read_status_sensor(0) or Read_status_sensor(1))){
            break;
        }
        else if(Read_sumValue_sensor() > 420){
        	break;
        }
        
    }
  while(!Read_status_sensor(7) and !Read_status_sensor(8)){
    	motor(1,30);motor(2,30);
    }
    delay(50);
    ao();
  //   delay(200);
  buzzer(500,100);
  if(direction_turn == 1){
    turnByAngle_fix(90);
    // moveStraightSnapToNearest(0, 30, 550, 0.5, 0, 0, 0);
    Run_PID_front_check_back(1,1000);
    turnByAngle_fix(-90);
    moveStraightSnapToNearest(0, 30, 1500, 0.5, 0, 0, 0);
    delay(100);
    turnByAngle(-45);
    delay(100);
    servoRun(3,130);
    servoRun(2,10);
    delay(100);
    motor(1,15);
    motor(2,15);
    delay(140);
    ao();
    servoRun(3,20);
    delay(250);
    servoRun(2,90);
    delay(200);
    motor(1,-15);
    motor(2,-15);
    delay(140);
    ao();
    delay(100);
    turnByAngle_fix(-45);
    moveStraightSnapToNearest(0, 30, 700, 0.5, 0, 0, 0);
    // Run_PID_front_check_back(2);
    delay(100);
    turnByAngle_fix(-90);
    moveStraightSnapToNearest(1, 20, 900, 0.5, 0, 0, 0);
    }
  else if(direction_turn == 2){    
    turnByAngle_fix(-90);
    // moveStraightSnapToNearest(0, 30, 550, 0.5, 0, 0, 0);
    Run_PID_front_check_back(2,1000);
    turnByAngle_fix(90);
    moveStraightSnapToNearest(0, 30, 1500, 0.5, 0, 0, 0);
    delay(100);
    turnByAngle(45);
    delay(100);
    servoRun(3,130);
    servoRun(2,10);
    delay(100);
    motor(1,15);
    motor(2,15);
    delay(140);
    ao();
    servoRun(3,20);
    delay(250);
    servoRun(2,90);
    delay(200);
    motor(1,-15);
    motor(2,-15);
    delay(140);
    ao();
    delay(100);
    turnByAngle_fix(45);
    moveStraightSnapToNearest(0, 30, 700, 0.5, 0, 0, 0);
    // Run_PID_front_check_back(1);
    delay(100);
    turnByAngle_fix(90);
    moveStraightSnapToNearest(1, 20, 900, 0.5, 0, 0, 0);
  }
}

void test_diamond(int direction_turn,int direction_exit,int checkline) {
  int state_of_break_loop = 0;
  if(checkline == 0){
      while(!Read_status_sensor(1) or !Read_status_sensor(5) ){
          Run_PID_2(30,0.4,2,4);
          if(Read_status_sensor(0) and Read_status_sensor(1) and Read_status_sensor(2)and Read_status_sensor(3)){state_of_break_loop = 1;break;}
          else if(Read_status_sensor(6) and Read_status_sensor(5) and Read_status_sensor(4) and Read_status_sensor(3) ){state_of_break_loop = 2;break;}
          else if(Read_status_sensor(0) and (Read_status_sensor(5) or Read_status_sensor(6)) ){state_of_break_loop = 3;break;}
          else if(Read_status_sensor(6) and (Read_status_sensor(0) or Read_status_sensor(1))){state_of_break_loop = 4;break;}
          else if(Read_sumValue_sensor() > 420){break;state_of_break_loop = 5;}
      }
      
      if(state_of_break_loop == 1 ){ao();turnByAngle_fix(-2);ao();delay(50);}
      else if(state_of_break_loop == 2 ){ao();turnByAngle_fix(2);ao();delay(50);}

      while(!Read_status_sensor(7) and !Read_status_sensor(8)){
          motor(1,20);motor(2,20);
      }
      delay(20);
      ao();
      
  }

    if (direction_turn == 1) {            // Turn RIGHT

        if (direction_exit == 1) {
          turnByAngle(45);
          while(!Read_status_sensor(6) and !Read_status_sensor(5) and !Read_status_sensor(4) and !Read_status_sensor(3)){
            motor(1,20);
            motor(2,-20);
          } 
          servoRun(3,130);
            servoRun(2,10);
	    while(1){
        Run_PID_2(25,0.2,1,4);
        if(Read_status_sensor(0) and (Read_status_sensor(5) or Read_status_sensor(6))){
           break;
      }
        if(Read_status_sensor(6) and (Read_status_sensor(0) or Read_status_sensor(1))){
            break;
      }
        else if(Read_status_sensor(0) and Read_status_sensor(1) and Read_status_sensor(2)and Read_status_sensor(3)){
        	break;
      }
        else if(Read_status_sensor(6) and Read_status_sensor(5) and Read_status_sensor(4) and Read_status_sensor(3)){
        	break;
      }
        else if(Read_sumValue_sensor() > 500){
        	break;
      }
    } 
    ao();
      // motor(1,15);
      // motor(2,15);
      // delay(100);
      ao();
      turnByAngle(15);
      delay(200);
      motor(1,15);
      motor(2,15);
      delay(250);
      ao();
       servoRun(3,20);
       delay(250);
      servoRun(2,90);
      motor(1,15);
      motor(2,15);
      delay(150);
      moveStraightSnapToNearest(0,20,300,0.5,0,0,0);
      turnByAngle_fix(-180);
  }   
        else if (direction_exit == 2) {
          turnByAngle(45);
          while(!Read_status_sensor(6) and !Read_status_sensor(5) and !Read_status_sensor(4) and !Read_status_sensor(3)){
            motor(1,20);
            motor(2,-20);
          }
            Run_PID_front_check_back(1,1000);
            turnByAngle(-90);
            servoRun(3,130);
            servoRun(2,10);
            	    while(1){
        Run_PID_2(25,0.2,1,4);
        if(Read_status_sensor(0) and (Read_status_sensor(5) or Read_status_sensor(6))){
           break;
      }
        if(Read_status_sensor(6) and (Read_status_sensor(0) or Read_status_sensor(1))){
            break;
      }
        else if(Read_status_sensor(0) and Read_status_sensor(1) and Read_status_sensor(2)and Read_status_sensor(3)){
        	break;
      }
        else if(Read_status_sensor(6) and Read_status_sensor(5) and Read_status_sensor(4) and Read_status_sensor(3)){
        	break;
      }
        else if(Read_sumValue_sensor() > 500){
        	break;
      }
    } 
    ao();
      motor(1,15);
      motor(2,15);
      delay(50);
      ao();
      turnByAngle(15);
      delay(200);
      motor(1,15);
      motor(2,15);
      delay(200);
      ao();
       servoRun(3,20);
       delay(250);
      servoRun(2,90);
      motor(1,15);
      motor(2,15);
      delay(150);
      moveStraightSnapToNearest(0,20,300,0.5,0,0,0);
      turnByAngle_fix(-180);

  }
} 
    if (direction_turn == 2) {			// Turn LEFT
        if (direction_exit == 1) {
          turnByAngle(-45);
          while(!Read_status_sensor(0) and !Read_status_sensor(1) and !Read_status_sensor(2) and !Read_status_sensor(3)){
            motor(1,-20);
            motor(2,20);
          }
          servoRun(3,130);
          servoRun(2,10);
          while(1){
        Run_PID_2(25,0.2,1,4);
        if(Read_status_sensor(0) and (Read_status_sensor(5) or Read_status_sensor(6))){
           break;
      }
        if(Read_status_sensor(6) and (Read_status_sensor(0) or Read_status_sensor(1))){
            break;
      }
        else if(Read_status_sensor(0) and Read_status_sensor(1) and Read_status_sensor(2)and Read_status_sensor(3)){
        	break;
      }
        else if(Read_status_sensor(6) and Read_status_sensor(5) and Read_status_sensor(4) and Read_status_sensor(3)){
        	break;
      }
        else if(Read_sumValue_sensor() > 500){
        	break;
      }
    } 
    ao();
      turnByAngle(-20);
      delay(200);
      motor(1,15);
      motor(2,15);
      delay(150);
      ao();
       servoRun(3,20);
       delay(250);
      servoRun(2,90);
      motor(1,15);
      motor(2,15);
      delay(200);
      moveStraightSnapToNearest(0,20,400,0.5,0,0,0);
      turnByAngle_fix(180);


        } else if (direction_exit == 2) {
          turnByAngle(-45);
          while(!Read_status_sensor(0) and !Read_status_sensor(1) and !Read_status_sensor(2) and !Read_status_sensor(3)){
            motor(1,-20);
            motor(2,20);
          }
            Run_PID_front_check_back(2,1000);
            turnByAngle(90);
            servoRun(3,130);
            servoRun(2,10);
            while(1){
        Run_PID_2(25,0.2,1,4);
        if(Read_status_sensor(0) and (Read_status_sensor(5) or Read_status_sensor(6))){
           break;
      }
        if(Read_status_sensor(6) and (Read_status_sensor(0) or Read_status_sensor(1))){
            break;
      }
        else if(Read_status_sensor(0) and Read_status_sensor(1) and Read_status_sensor(2)and Read_status_sensor(3)){
        	break;
      }
        else if(Read_status_sensor(6) and Read_status_sensor(5) and Read_status_sensor(4) and Read_status_sensor(3)){
        	break;
      }
        else if(Read_sumValue_sensor() > 500){
        	break;
      }
    } 
    ao();
      turnByAngle(-20);
      delay(200);
      motor(1,15);
      motor(2,15);
      delay(100);
      ao();
       servoRun(3,20);
       delay(250);
      servoRun(2,90);
      motor(1,15);
      motor(2,15);
      delay(150);
      moveStraightSnapToNearest(0,20,400,0.5,0,0,0);
      turnByAngle_fix(180);

        }
    }
} 
