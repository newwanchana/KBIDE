var hexToRgbA = function (hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
  } else {
    console.error(`${hex} is invalid.`);
  }
};

const ORDER_ATOMIC = Blockly.JavaScript.ORDER_ATOMIC;
const valueToCode = (a, b) => Blockly.JavaScript.valueToCode(a, b);

Blockly.JavaScript["neopixel_rgb_begin"] = function (block) {
  let [value_pin, value_num] = [
    valueToCode(block, "PIN", ORDER_ATOMIC),
    valueToCode(block, "NUM", ORDER_ATOMIC)
  ];

  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);

  var code =
    `
#EXTINC#include "Adafruit_NeoPixel.h" #END
#VARIABLE#define PIN            ${value_pin} #END
#VARIABLE#define NUMPIXELS      ${value_num} #END

#VARIABLEAdafruit_NeoPixel ${variable_instance} = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800); #END
${variable_instance}.begin();
\n
`;
  return code;
};

Blockly.JavaScript["neopixel_rgb_clear"] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =
    `
for(int clearPixel = 0; clearPixel < ${variable_instance}.numPixels(); clearPixel++) {
  ${variable_instance}.setPixelColor(clearPixel, ${variable_instance}.Color(0,0,0));	
  ${variable_instance}.show();
  delay(25);
}

`;
  return code;
};

Blockly.JavaScript["neopixel_rgb_show"] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =
    `
${variable_instance}.show();
`;
  return code;
};

Blockly.JavaScript["neopixel_rgb_setBrightness"] = function (block) {
  var value_bright = valueToCode(block, "BRIGHT", ORDER_ATOMIC);
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =
    `
${variable_instance}.setBrightness(${value_bright});
${variable_instance}.show();
`;
  return code;
};

Blockly.JavaScript["neopixel_rgb_setPixelColor"] = function (block) {
  var value_num = valueToCode(block, "NUM", ORDER_ATOMIC);
  var value_color = block.getFieldValue("COLOR");
  var color = hexToRgbA(value_color);
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  if (!color) {
    console.log(`skipped`);
    return;
  }
  let [value_r, value_g, value_b] = color;

  var code =
    `
${variable_instance}.setPixelColor(${value_num}, ${variable_instance}.Color(${value_r}, ${value_g}, ${value_b}));
${variable_instance}.show();
`;
  return code;
};

Blockly.JavaScript["neopixel_rgb_fillLED"] = function (block) {
  var value_color = block.getFieldValue("COLOR");
  var color = hexToRgbA(value_color);
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  
  if (!color) {
    console.log(`skipped`);
    return;
  }
  let [value_r, value_g, value_b] = color;

  var code =
`
for (uint16_t i = 0; i < ${variable_instance}.numPixels(); i++) {
  ${variable_instance}.setPixelColor(i, ${variable_instance}.Color(${value_r}, ${value_g}, ${value_b}));
  ${variable_instance}.show();
  delay(25);
}
`;
  return code;
};

Blockly.JavaScript["neopixel_rgb_colorWipe"] = function (block) {
  var value_time = valueToCode(block, "TIME", ORDER_ATOMIC);
  var value_color = block.getFieldValue("COLOR");
  var color = hexToRgbA(value_color);
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  
  let [value_r, value_g, value_b] = color;

  var code =
`
for (uint16_t i = 0; i < ${variable_instance}.numPixels(); i++) {
  ${variable_instance}.setPixelColor(i, ${variable_instance}.Color(${value_r}, ${value_g}, ${value_b}));
  ${variable_instance}.show();
  delay(${value_time});
}
`;
  return code;
};

Blockly.JavaScript["neopixel_rgb_theaterChase"] = function (block) {
  var value_time = valueToCode(block, "TIME", ORDER_ATOMIC);
  var value_color = block.getFieldValue("COLOR");
  var color = hexToRgbA(value_color);
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  
  let [value_r, value_g, value_b] = color;

  var code =
`
for (int j = 0; j < 10; j++) { 
  for (int q = 0; q < 3; q++) {
    for (uint16_t i = 0; i < ${variable_instance}.numPixels(); i = i + 3) {
      ${variable_instance}.setPixelColor(i + q, ${variable_instance}.Color(${value_r}, ${value_g}, ${value_b}));
    }
    ${variable_instance}.show();
    delay(${value_time});
    for (uint16_t i = 0; i < ${variable_instance}.numPixels(); i = i + 3) {
      ${variable_instance}.setPixelColor(i + q, 0);      
    }
    ${variable_instance}.show();
  }
}
`;
  return code;
};

Blockly.JavaScript["neopixel_rgb_rainbow_begin"] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  
  var code =
`
#VARIABLE  
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos; 
  if (WheelPos < 85) {
    return ${variable_instance}.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  } 
  
  if (WheelPos < 170) {
    WheelPos -= 85;return ${variable_instance}.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  } 
  
  WheelPos -= 170; return ${variable_instance}.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
} 
#END
`;
  return code;
};

Blockly.JavaScript["neopixel_rgb_rainbow"] = function (block) {
  var value_time = valueToCode(block, "TIME", ORDER_ATOMIC);
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =
    `
uint16_t i, j;
for (j = 0; j < 256; j++) {
  for (i = 0; i < ${variable_instance}.numPixels(); i++) {
    ${variable_instance}.setPixelColor(i, Wheel((i + j) & 255));
  }
  ${variable_instance}.show();
  delay(${value_time});
}
`;
  return code;
};

Blockly.JavaScript["neopixel_rgb_rainbowCycle"] = function (block) {
  var value_time = valueToCode(block, "TIME", ORDER_ATOMIC);
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  
  var code =
`
uint16_t k, m;
for (m = 0; m < 256 * 5; m++) { // 5 cycles of all colors on wheel
  for (k = 0; k < ${variable_instance}.numPixels(); k++) {
    ${variable_instance}.setPixelColor(k, Wheel(((k * 256 / ${variable_instance}.numPixels()) + m) & 255));
  }
  ${variable_instance}.show();
  delay(${value_time});
}
`;
  return code;
};