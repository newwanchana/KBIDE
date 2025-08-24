Blockly.Blocks['line_set_token'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("LINE Set Token");
        this.appendValueInput("token")
            .appendField("TOKEN: ");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("LINE Set Token");
        this.setHelpUrl("https://notify-bot.line.me/");
    }
};
Blockly.Blocks['line_notify'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("LINE Notify");
        this.appendValueInput("msg")
            .appendField("Message: ");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("LINE Notify");
        this.setHelpUrl("https://notify-bot.line.me/doc/en/");
    }
};

Blockly.Blocks['line_sticker'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Line Sticker")
            .appendField("PackageId: ")
            .appendField(new Blockly.FieldTextInput("3"), "packageId")
            .appendField("StickerId: ")
            .appendField(new Blockly.FieldTextInput("240"), "stickerId");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("Line Sticker");
        this.setHelpUrl("https://devdocs.line.me/files/sticker_list.pdf");
    }
};
Blockly.Blocks['line_sticker_msg'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Line Message & Sticker")
        this.appendValueInput("msg")
                .appendField("Message: ");
        this.appendDummyInput()
            .appendField("PackageId: ")
            .appendField(new Blockly.FieldTextInput("1"), "packageId")
            .appendField("StickerId: ")
            .appendField(new Blockly.FieldTextInput("2"), "stickerId");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("Line Sticker");
        this.setHelpUrl("https://devdocs.line.me/files/sticker_list.pdf");
    }
};
Blockly.Blocks['line_notify_picture'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("LINE Picture");
        this.appendValueInput("url")
            .appendField("URL: ");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("LINE Picture");
        this.setHelpUrl("https://notify-bot.line.me/doc/en/");
    }
};

Blockly.Blocks['line_notify_picture_msg'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("LINE Message & Picture");
        this.appendValueInput("msg")
                .appendField("Message: ");
        this.appendValueInput("url")
            .appendField("URL: ");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("LINE Picture");
        this.setHelpUrl("https://notify-bot.line.me/doc/en/");
    }
};