Blockly.JavaScript['line_set_token'] = function (block) {
    var line_set_token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
        #EXTINC#include <TridentTD_LineNotify.h>#END
        #SETUPLINE.setToken(${line_set_token});#END
    `;
    return code;
};
Blockly.JavaScript['line_notify'] = function (block) {
    var line_notify = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
        LINE.notify(${line_notify});
    `;
    return code;
};
Blockly.JavaScript['line_sticker'] = function (block) {
    var packageId = block.getFieldValue('packageId');
    var stickerId = block.getFieldValue('stickerId');
    var code = `
        LINE.notifySticker(${packageId},${stickerId});
    `;
    return code;
};
Blockly.JavaScript['line_sticker_msg'] = function (block) {
    var line_notify = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
    var packageId = block.getFieldValue('packageId');
    var stickerId = block.getFieldValue('stickerId');
    var code = `
        LINE.notifySticker(${line_notify},${packageId},${stickerId});
    `;
    return code;
};
Blockly.JavaScript['line_notify_picture'] = function (block) {
    var url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
        LINE.notifyPicture(${url});
    `;
    return code;
};
Blockly.JavaScript['line_notify_picture_msg'] = function (block) {
    var url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
    var msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
        LINE.notifyPicture(${msg},${url});
    `;
    return code;
};