int last_value_analog = 0;
float control_voltage = 0.0;
int select_conection_i2c = 0;

void i2c_send(byte data) {
  if(select_conection_i2c == 0){
    Wire.beginTransmission(0x20);
    Wire.write(data);
    Wire.endTransmission();
  }
  else {
    Wire1.beginTransmission(0x20);
    Wire1.write(data);
    Wire1.endTransmission();
  }
}
void i2c_send_buff(byte *data, uint8_t len_data) {
  if(select_conection_i2c == 0){
    Wire.beginTransmission(0x20);
    Wire.write(data, len_data);
    Wire.endTransmission();
    Wire.flush();
  }
  else {
    Wire1.beginTransmission(0x20);
    Wire1.write(data, len_data);
    Wire1.endTransmission();
    Wire1.flush();
  }
}
int i2c_request(int byte_num) {
  int num_lenght = 0;
  int data_in[5];
  if(select_conection_i2c == 0){
    int n = Wire.requestFrom(0x20, byte_num);
    if (n < 1) {
      Wire.endTransmission();
      Serial.println("Read data error");
      return 0;
    } else if (n == 2) {
      data_in[0] = Wire.read();
      data_in[1] = Wire.read();
    }
  }
  else{
    int n = Wire1.requestFrom(0x20, byte_num);
    if (n < 1) {
      Wire1.endTransmission();
      Serial.println("Read data error");
      return 0;
    } else if (n == 2) {
      data_in[0] = Wire1.read();
      data_in[1] = Wire1.read();
    }
  }


  int data_value = data_in[1] * 256 + data_in[0];
  if (data_value >= 0 && data_value <= 4095) {
    return data_value;
  } else {
    return 0;
  }
}
int ADC(uint8_t port_analog){
  // int analog_data = 0;
  //   uint8_t buff_data[3] = {0XFF,9,port_analog};
  //   i2c_send_buff(buff_data,3);
  //   int analog_data_buffer = (i2c_request(2));
    return analogRead(port_analog);
}

float map_F(float x, float in_max, float out_min, float out_max) {
  return (x - 0.0) * (out_max - out_min) / (in_max - 0.0) + out_min;
}
float Volt_input(){
  return (((float)ADC(9))*(3.3/1023.0)*5.05);
}


void motor(int pin, int Speeds) {
  int _SpeedsA;
  int _SpeedsB;
  int _SpeedsC;
  int _SpeedsD;
  if (pin == 2) {
    _SpeedsA = abs(Speeds);
    _SpeedsA = _SpeedsA * 2.55;
    if (_SpeedsA > 255){_SpeedsA = 255;}
    else if (_SpeedsA < -255){_SpeedsA = -255;}
    if (Speeds > 0) {
      ledcWrite(7, 255 - abs(_SpeedsA));
      ledcWrite(6, 255);
    }
    else if (Speeds <= 0) {
      ledcWrite(7, 255);
      ledcWrite(6, 255 - abs(_SpeedsA));
    }
  }
  if (pin == 1) {
    _SpeedsB = abs(Speeds);
    
    _SpeedsB = _SpeedsB * 2.55;
    if (_SpeedsB > 255){_SpeedsB = 255;}
    else if (_SpeedsB < -255){_SpeedsB = -255;}
    if (Speeds > 0) {
      ledcWrite(4, 255 - abs(_SpeedsB));
      ledcWrite(5, 255);
    }
    else if (Speeds <= 0) {
      ledcWrite(4, 255);
      ledcWrite(5, 255 - abs(_SpeedsB));
    }
  }
  if (pin == 3) {
    _SpeedsC = abs(Speeds);
    
    _SpeedsC = _SpeedsC * 2.55;
    if (_SpeedsC > 255){_SpeedsC = 255;}
    else if (_SpeedsC < -255){_SpeedsC = -255;}
    if (Speeds <= 0) {
      ledcWrite(3, 255 - abs(_SpeedsC));
      ledcWrite(2, 255);
    }
    else if (Speeds > 0) {
      ledcWrite(3, 255);
      ledcWrite(2, 255 - abs(_SpeedsC));
    }
  }
  if (pin == 4) {
    _SpeedsD = abs(Speeds);
    
    _SpeedsD = _SpeedsD * 2.55;
    if (_SpeedsD > 255){_SpeedsD = 255;}
    else if (_SpeedsD < -255){_SpeedsD = -255;}
    if (Speeds <= 0) {
      ledcWrite(8, 255 - abs(_SpeedsD));
      ledcWrite(9, 255);
    }
    else if (Speeds > 0) {
      ledcWrite(8, 255);
      ledcWrite(9, 255 - abs(_SpeedsD));
    }
  }
  delay(1);
}
void motor_control(uint8_t state, float _speed) {
 switch(state){
    case 0:{motor(1,_speed);}break;
    case 1:{motor(1,-_speed);}break;
    case 2:{motor(2,_speed);}break;
    case 3:{motor(2,-_speed);}break;
    case 4:{motor(3,_speed);}break;
    case 5:{motor(3,-_speed);}break;
    case 6:{motor(4,_speed);}break;
    case 7:{motor(4,-_speed);}break;
    // case 8:{motor(5,_speed);}break;
    // case 9:{motor(5,-_speed);}break;
    // case 10:{motor(6,_speed);}break;
    // case 11:{motor(6,-_speed);}break;

    case 12:{motor(1,_speed);motor(2,_speed);motor(3,_speed);motor(4,_speed);}break;
    case 13:{motor(1,-_speed);motor(2,-_speed);motor(3,-_speed);motor(4,-_speed);}break;
    case 14:{motor(1,0);motor(2,0);motor(3,0);motor(4,0);delay(20);}break;


    case 15:{motor(1,_speed);motor(3,_speed);}break;
    case 16:{motor(1,-_speed);motor(3,-_speed);}break;
    case 17:{motor(2,_speed);motor(4,_speed);}break;
    case 18:{motor(2,-_speed);motor(4,-_speed);}break;
    

  
    case 19:{motor(1,_speed);motor(4,_speed);}break;
    case 20:{motor(1,-_speed);motor(4,-_speed);}break;
    case 21:{motor(2,_speed);motor(3,_speed);}break;
    case 22:{motor(2,-_speed);motor(3,-_speed);}break;

  }
}

// void MT(int speeda, int speedb,int time_speed){ 
//   motor(1,1,speeda);
//   motor(2,1,speeda);
//   delay(time_speed);
// }
void ao(){
  motor_control(14,0);
}
void aot(int _timer){
  motor_control(14,0);
  delay(_timer);
}
void fd(int _Speed){
  motor(1,_Speed);
  motor(2,_Speed);
  motor(3,_Speed);
  motor(4,_Speed);
}
void bk(int _Speed){
  motor_control(13,_Speed);
}
void sl(int _Speed){
  // motor(1,2,_Speed);
  // motor(2,1,_Speed);
}
void sr(int _Speed){
  // motor(1,1,_Speed);
  // motor(2,2,_Speed);
}
