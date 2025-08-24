const dirIcon = Vue.prototype.$global.board.board_info.dir;
module.exports = function(Blockly){
  'use strict';

Blockly.Blocks["Move_To_partA"] = {
  init: function () {

    const imageOptions = [
      [{src: `file:///${dirIcon}/static/icons/7.png`, width: 60, height: 60, alt: "1"}, "icon1"],
      [{src: `file:///${dirIcon}/static/icons/7_1.png`, width: 60, height: 60, alt: "2"}, "icon2"]
    ];
    
    const row = this.appendDummyInput().appendField("เดินไปตามทางโค้ง รูปงู");
    row.appendField(new Blockly.FieldDropdown(imageOptions), `IMG_SELECT_${1}`);
    this.appendValueInput("S0")
      .appendField("ระยะทาง = ");
    this.setInputsInline(true);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("แสดงรูปภาพจาก Path ที่ถูกต้อง");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["Move_To_partB"] = {
  init: function () {

    
     const imageOptions = [
      [{src: `file:///${dirIcon}/static/icons/3.png`, width: 60, height: 60, alt: "1"}, "icon1"],
      [{src: `file:///${dirIcon}/static/icons/3_1.png`, width: 60, height: 60, alt: "2"}, "icon2"]
    ];
    
    const row = this.appendDummyInput().appendField("เดินไปตามทางโค้ง ซิกแซกสามเหลี่ยม");
    row.appendField(new Blockly.FieldDropdown(imageOptions), `IMG_SELECT_${1}`);
    this.appendValueInput("S0")
      .appendField("ระยะทาง = ");
    this.setInputsInline(true);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("แสดงรูปภาพจาก Path ที่ถูกต้อง");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["Move_To_partC"] = {
  init: function () {
    const imageOptions = [
      [{src: `file:///${dirIcon}/static/icons/8_1.png`, width: 60, height: 60, alt: "1"}, "icon1"],
      [{src: `file:///${dirIcon}/static/icons/8_2.png`, width: 60, height: 60, alt: "2"}, "icon2"]
    ];
    const row = this.appendDummyInput().appendField("เดินไปตามทางโค้ง หมายเลข 2 ให้เลือกทางเข้า");
    row.appendField(new Blockly.FieldDropdown(imageOptions), `IMG_SELECT_${1}`);
    // const imagePath1 = `file:///${dirIcon}/static/icons/8_1.png`;
    // const imagePath2 = `file:///${dirIcon}/static/icons/8_2.png`;
    // this.appendDummyInput()
    //   .appendField("เดินไปตามทางโค้ง หมายเลข 2")
    //   .appendField(new Blockly.FieldImage(imagePath, 80, 80, "*"));

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("เลือกทิศทางให้ถูกต้อง");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["Move_To_partD"] = {
  init: function () {

    const imageOptions = [
      [{src: `file:///${dirIcon}/static/icons/10.png`, width: 60, height: 60, alt: "1"}, "icon1"],
      [{src: `file:///${dirIcon}/static/icons/10_1.png`, width: 60, height: 60, alt: "2"}, "icon2"]
    ];
    
    const row = this.appendDummyInput().appendField("เดินไปตามทางโค้ง รูปตัว S ");
    row.appendField(new Blockly.FieldDropdown(imageOptions), `IMG_SELECT_${1}`);
    this.appendValueInput("S0")
      .appendField("ระยะทาง = ");
    this.setInputsInline(true);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("แสดงรูปภาพจาก Path ที่ถูกต้อง");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["Move_To_partE"] = {
  init: function () {

    const imagePath = `file:///${dirIcon}/static/icons/2.png`;
    this.appendDummyInput()
      .appendField("เลือกทางออกจากรูปสี่แยก สี่เหลี่ยม")
      .appendField(new Blockly.FieldImage(imagePath, 60, 60, "*"));
    this.appendDummyInput()
          .appendField("เลือกทางออก")
          .appendField(new Blockly.FieldDropdown([["ด้านซ้าย","0"], ["ด้านขวา","1"],["ด้านหน้าไปทางข้างซ้าย","2"],["ด้านหน้าไปทางข้างขวา","3"]]), "direction");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("แสดงรูปภาพจาก Path ที่ถูกต้อง");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["Move_To_partEE"] = {
  init: function () {
    const imageOptions = [
      [{src: `file:///${dirIcon}/static/icons/2_1.png`, width: 60, height: 60, alt: "1"}, "icon1"],
      [{src: `file:///${dirIcon}/static/icons/2_2.png`, width: 60, height: 60, alt: "2"}, "icon2"]
    ];
    const row = this.appendDummyInput().appendField("เดินเข้าไปจับ รูปสี่เหลี่ยม");
    row.appendField(new Blockly.FieldDropdown(imageOptions), `IMG_SELECT_${1}`);

    this.appendDummyInput()
          .appendField("เลือกทางเข้าไปจับกระป๋อง")
          .appendField(new Blockly.FieldDropdown([["ด้านซ้ายเข้าจับ","0"], ["ด้านขวาเข้าจับ","1"],["ด้านหน้าไปทางข้างซ้ายเข้าจับ","2"],["ด้านหน้าไปทางข้างขวาเข้าจับ","3"]]), "direction");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("เลือกทิศทางให้ถูกต้อง");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["Move_To_partF"] = {
  init: function () {

    const imagePath = `file:///${dirIcon}/static/icons/5.png`;
    this.appendDummyInput()
      .appendField("เลือกทางออกจากรูปสี่แยก รูปเพชร")
      .appendField(new Blockly.FieldImage(imagePath, 60, 60, "*"));
    this.appendDummyInput()
          .appendField("เลือกทางออก")
          .appendField(new Blockly.FieldDropdown([["ด้านซ้าย","0"], ["ด้านขวา","1"],["ด้านซ้ายแบบturn","4"], ["ด้านขวาแบบturn","5"],["ด้านหน้าไปทางข้างซ้าย","2"],["ด้านหน้าไปทางข้างขวา","3"]]), "direction");
    this.appendDummyInput()
        .appendField("เลี้ยวไม่ต้องเจอเส้นด้านหน้า")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "checkline");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("แสดงรูปภาพจาก Path ที่ถูกต้อง");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["Move_To_partFF"] = {
  init: function () {

    const imagePath = `file:///${dirIcon}/static/icons/5_1.png`;
    this.appendDummyInput()
      .appendField("เลือกทางเข้าไปจับ รูปเพชร")
      .appendField(new Blockly.FieldImage(imagePath, 60, 60, "*"));
    this.appendDummyInput()
          .appendField("เลือกทางออก")
          .appendField(new Blockly.FieldDropdown([["เข้าไปจับด้านซ้าย","0"], ["เข้าไปจับด้านขวา","1"], ["เข้าไปจับด้านหน้าข้างซ้าย","2"],["เข้าไปจับด้านหน้าข้างขวา","3"]]), "direction");
    this.appendDummyInput()
        .appendField("เลี้ยวไม่ต้องเจอเส้นด้านหน้า")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "checkline");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("แสดงรูปภาพจาก Path ที่ถูกต้อง");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["Move_To_partG"] = {
  init: function () {
    const imageOptions = [
      [{src: `file:///${dirIcon}/static/icons/12.png`, width: 60, height: 60, alt: "1"}, "icon1"],
      [{src: `file:///${dirIcon}/static/icons/12_1.png`, width: 60, height: 60, alt: "2"}, "icon2"]
    ];
    const row = this.appendDummyInput().appendField("เดินทางผ่าน รูปสี่เหลี่ยม");
    row.appendField(new Blockly.FieldDropdown(imageOptions), `IMG_SELECT_${1}`);

    this.appendDummyInput()
      .appendField("เลือกทางวิ่ง")
      .appendField(new Blockly.FieldDropdown([["ด้านซ้าย","2"], ["ด้านขวา","1"]]), "direction");

    // const imagePath1 = `file:///${dirIcon}/static/icons/8_1.png`;
    // const imagePath2 = `file:///${dirIcon}/static/icons/8_2.png`;
    // this.appendDummyInput()
    //   .appendField("เดินไปตามทางโค้ง หมายเลข 2")
    //   .appendField(new Blockly.FieldImage(imagePath, 80, 80, "*"));

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("เลือกทิศทางให้ถูกต้อง");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["Move_To_partGG"] = {
  init: function () {
    const imageOptions = [
      [{src: `file:///${dirIcon}/static/icons/12_3.png`, width: 60, height: 60, alt: "1"}, "icon1"],
      [{src: `file:///${dirIcon}/static/icons/12_4.png`, width: 60, height: 60, alt: "2"}, "icon2"]
    ];
    const row = this.appendDummyInput().appendField("เดินเข้ารูป สี่เหลี่ยมเข้าจับกระป๋อง");
    row.appendField(new Blockly.FieldDropdown(imageOptions), `IMG_SELECT_${1}`);

    this.appendDummyInput()
      .appendField("เลือกทางเข้าไปจับ")
      .appendField(new Blockly.FieldDropdown([["เข้าจับด้านซ้าย","2"], ["เข้าจับด้านขวา","1"]]), "direction");

    // const imagePath1 = `file:///${dirIcon}/static/icons/8_1.png`;
    // const imagePath2 = `file:///${dirIcon}/static/icons/8_2.png`;
    // this.appendDummyInput()
    //   .appendField("เดินไปตามทางโค้ง หมายเลข 2")
    //   .appendField(new Blockly.FieldImage(imagePath, 80, 80, "*"));

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("เลือกทิศทางให้ถูกต้อง");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["Move_To_partH"] = {
  init: function () {

    const imagePath = `file:///${dirIcon}/static/icons/4.png`;
    this.appendDummyInput()
      .appendField("เลือกทิศทางของหุ่นยนต์ รูปสี่แยก")
      .appendField(new Blockly.FieldImage(imagePath, 60, 60, "*"));
    this.appendDummyInput()
          .appendField("เลือกทางออก")
          .appendField(new Blockly.FieldDropdown([["ด้านซ้าย","0"],["ด้านหน้า","1"], ["ด้านขวา","2"],["ด้านซ้าย Turn","4"], ["ด้านขวา Turn","5"]]), "direction");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("แสดงรูปภาพจาก Path ที่ถูกต้อง");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["Move_To_partI"] = {
  init: function () {
    const imageOptions = [
      [{src: `file:///${dirIcon}/static/icons/13.png`, width: 60, height: 60, alt: "1"}, "icon1"],
      [{src: `file:///${dirIcon}/static/icons/13_1.png`, width: 60, height: 60, alt: "2"}, "icon2"]
    ];
    const row = this.appendDummyInput().appendField("เดินตรง");
    row.appendField(new Blockly.FieldDropdown(imageOptions), `IMG_SELECT_${1}`);
    this.appendValueInput("S0")
      .appendField("ระยะทาง = ");
    this.setInputsInline(true);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("เลือกทิศทางให้ถูกต้อง");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["Move_To_partJ"] = {
  init: function () {

    
     const imageOptions = [
      [{src: `file:///${dirIcon}/static/icons/11.png`, width: 60, height: 60, alt: "1"}, "icon1"],
      [{src: `file:///${dirIcon}/static/icons/11_1.png`, width: 60, height: 60, alt: "2"}, "icon2"]
    ];
    
    const row = this.appendDummyInput().appendField("เดินไปตามทางโค้ง สามเหลี่ยม");
    row.appendField(new Blockly.FieldDropdown(imageOptions), `IMG_SELECT_${1}`);
    this.appendValueInput("S0")
      .appendField("ระยะทาง = ");
    this.setInputsInline(true);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("แสดงรูปภาพจาก Path ที่ถูกต้อง");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["Move_To_partK"] = {
  init: function () {

    
     const imageOptions = [
      [{src: `file:///${dirIcon}/static/icons/6.png`, width: 60, height: 60, alt: "1"}, "icon1"],
      [{src: `file:///${dirIcon}/static/icons/6_1.png`, width: 60, height: 60, alt: "2"}, "icon2"],
      [{src: `file:///${dirIcon}/static/icons/1.png`, width: 60, height: 60, alt: "3"}, "icon3"],
      [{src: `file:///${dirIcon}/static/icons/1_1.png`, width: 60, height: 60, alt: "4"}, "icon4"]
    ];
    
    const row = this.appendDummyInput().appendField("เดินไปเจอทาง 3 แยก หรือโค้ง90องศา");
    row.appendField(new Blockly.FieldDropdown(imageOptions), `IMG_SELECT_${1}`);
    this.appendDummyInput()
          .appendField("เลือกทางออก")
          .appendField(new Blockly.FieldDropdown([["ด้านซ้าย","0"],["ด้านหน้า","2"], ["ด้านขวา","1"],["ด้านซ้าย Turn","4"], ["ด้านขวา Turn","5"]]), "direction");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("แสดงรูปภาพจาก Path ที่ถูกต้อง");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["Move_To_partL"] = {
  init: function () {

    
     const imageOptions = [
      [{src: `file:///${dirIcon}/static/icons/9.png`, width: 60, height: 60, alt: "1"}, "icon1"],
      [{src: `file:///${dirIcon}/static/icons/9_1.png`, width: 60, height: 60, alt: "2"}, "icon2"],
    ];
    
    const row = this.appendDummyInput().appendField("เดินตามเส้นทาง โค้งน้อยๆ");
    row.appendField(new Blockly.FieldDropdown(imageOptions), `IMG_SELECT_${1}`);
    this.appendValueInput("S0")
      .appendField("ระยะทาง = ");
    this.setInputsInline(true);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("แสดงรูปภาพจาก Path ที่ถูกต้อง");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["Move_start"] = {
  init: function () {

    const imagePath = `file:///${dirIcon}/static/icons/7.png`;
    this.appendDummyInput()
      .appendField("เดินออกจากจุดเริ่มต้น");
    this.appendValueInput("S0")
      .appendField("ระยะทาง =");
      //.appendField(new Blockly.FieldImage(imagePath, 60, 60, "*"));

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setColour(200);
    this.setTooltip("เดินออกจากจุดเริ่มต้น");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["Move_back"] = {
  init: function () {

    const imagePath = `file:///${dirIcon}/static/icons/7.png`;
    this.appendDummyInput()
      .appendField("ถอยหลัง ครึงแผ่น");
    this.appendValueInput("S0")
      .appendField("ระยะทาง = ");
      //.appendField(new Blockly.FieldImage(imagePath, 60, 60, "*"));

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setColour(200);
    this.setTooltip("เดินออกจากจุดเริ่มต้น");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["Move_chopsticks"] = {
  init: function () {

    this.appendDummyInput()
      .appendField("ข้ามตะเกียบ");
    this.appendValueInput("S0")
      .appendField("ระยะทาง = ");
    this.appendValueInput("S1")
      .appendField("ยกหาง = ");
    this.appendValueInput("S2")
      .appendField("หางลง = ");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setColour(200);
    this.setTooltip("เดินออกจากจุดเริ่มต้น");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["Turn_ultil_check_Sensor"] = {
  init: function () {

    this.appendDummyInput()
          .appendField("เคลื่อนที่")
          .appendField(new Blockly.FieldDropdown([["หมุนด้านซ้าย","0"], ["หมุนด้านขวา","1"], ["ถอยหลัง","2"], ["เดินหน้า","3"]]), "direction");
    this.appendValueInput("S2")
      .setCheck("Boolean")
      .appendField("จนกว่าจะพบเงื่อนไขดังนี้");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    
    this.setColour(200);
    this.setTooltip("เดินออกจากจุดเริ่มต้น");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["move_original_angle"] = {
  init: function () {

    this.appendDummyInput()
          .appendField("สั่งงานหุ่นยนต์")
          .appendField(new Blockly.FieldDropdown([["เดินหน้า","0"], ["ถอยหลัง","1"]]), "direction");
    this.appendDummyInput()
          .appendField(" ");
    this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["แบบล็อคมุม(0,90,180,270)","0"], ["ปกติ","1"]]), "state");
    this.appendValueInput("S0")
      .appendField(" ความเร็ว=");
    this.appendValueInput("S1")
      .appendField("ระยะทาง =");
      
    this.setInputsInline(true);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("เดินออกจากจุดเริ่มต้น");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["move_PID_Encoder"] = {
  init: function () {


    this.appendValueInput("S0")
      .appendField("วิ่งตามเส้น ความเร็ว=");
    this.appendValueInput("S1")
      .appendField("ระยะทาง =");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("เดินออกจากจุดเริ่มต้น");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["move_turn_by_angle"] = {
  init: function () {

    this.appendDummyInput()
          .appendField("สั่งงานหุ่นยนต์")
          .appendField(new Blockly.FieldDropdown([["เลี้ยวซ้าย","-"], ["เลี้ยวขวา",""]]), "direction");
    this.appendDummyInput()
          .appendField("องศา=")
          .appendField(new Blockly.FieldDropdown([["90","90"], ["180","180"]]), "angle");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("เดินออกจากจุดเริ่มต้น");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["move_PID_until_checkSum"] = {
  init: function () {


    this.appendValueInput("S0")
      .appendField("วิ่งตามเส้น ความเร็ว=");
    this.appendValueInput("S1")
      .appendField("จนกว่าเซ็นเซอร์หน้าผลรวม =");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("วิ่งตามเส้น ความเร็ว");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["move_PID_until_sensor"] = {
  init: function () {


    this.appendValueInput("S0")
      .appendField("วิ่งตามเส้น ความเร็ว=");
    this.appendValueInput("S1")
      .appendField("จนกว่า เซ็นเซอร์วัดระยะ < ");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("วิ่งตามเส้น ความเร็ว");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["move_PID_until_checkEncoder"] = {
  init: function () {


    this.appendValueInput("S0")
      .appendField("วิ่งตามเส้น ความเร็ว=");
    this.appendValueInput("S1")
      .appendField("จนกว่า ระยะทาง  > ");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("วิ่งตามเส้น ความเร็ว");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["move_check_back"] = {
  init: function () {


    this.appendValueInput("S0")
      .appendField("ถอยหลังจนกว่าจะเจอเส้นดำทั้งหมด ด้วยความเร็ว =");
    this.appendDummyInput()
          .appendField("และเดินตรงออกจากเส้นดำ")

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip("วิ่งตามเส้น ความเร็ว");
    this.setHelpUrl("");
  }
};





}