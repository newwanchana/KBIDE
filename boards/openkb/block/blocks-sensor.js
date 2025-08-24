module.exports = function(Blockly){
'use strict';

var sensor_colour= Blockly.Msg.SENSOR_HUE ;

Blockly.Blocks["sensor_lm73"] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("/static/block_icons/sot23-6_1.png", 20, 20, "*"))
			.appendField(Blockly.Msg.SENSOR_LM73_TITLE);
		this.setOutput(true, 'Number');
		this.setPreviousStatement(false);
		this.setNextStatement(false);
		this.setColour(sensor_colour);
		this.setTooltip(Blockly.Msg.SENSOR_LM73_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.SENSOR_LM73_HELPURL);
	}
};

Blockly.Blocks["sensor_ldr"] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("/static/block_icons/ldr1.png", 20, 20, "*"))
			.appendField("Light Level Sensor");
		this.setOutput(true, 'Number');
		this.setPreviousStatement(false);
		this.setNextStatement(false);
		this.setColour(sensor_colour);
		this.setTooltip(Blockly.Msg.SENSOR_LDR_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.SENSOR_LDR_HELPURL);
	}
};

Blockly.Blocks["sensor_ldr_map"] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("/static/block_icons/ldr1.png", 20, 20, "*"))
			.appendField("Light Level Sensor (0-100)");
		this.setOutput(true, 'Number');
		this.setPreviousStatement(false);
		this.setNextStatement(false);
		this.setColour(sensor_colour);
		this.setTooltip(Blockly.Msg.SENSOR_LDR_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.SENSOR_LDR_HELPURL);
	}
};

Blockly.Blocks["sensor_switch1"] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("/static/block_icons/sw12x12.png", 20, 20, "*"))
			.appendField(Blockly.Msg.SENSOR_SWITCH1_TITLE);
		this.setOutput(true, ['Number','Boolean']);
		this.setPreviousStatement(false);
		this.setNextStatement(false);
		this.setColour(sensor_colour);
		this.setTooltip(Blockly.Msg.SENSOR_SWITCH1_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.SENSOR_SWITCH1_HELPURL);
	}
};

Blockly.Blocks["sensor_switch2"] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("/static/block_icons/sw12x12.png", 20, 20, "*"))
			.appendField(Blockly.Msg.SENSOR_SWITCH2_TITLE);
		this.setOutput(true, ['Number','Boolean']);
		this.setPreviousStatement(false);
		this.setNextStatement(false);
		this.setColour(sensor_colour);
		this.setTooltip(Blockly.Msg.SENSOR_SWITCH2_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.SENSOR_SWITCH2_HELPURL);
	}
};

};