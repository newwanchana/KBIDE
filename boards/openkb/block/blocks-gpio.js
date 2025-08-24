module.exports = function (Blockly) {
	'use strict';
	var io_colour = 45;

	Blockly.Blocks["openkb_adc_pin"] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Analog Pin")
				.appendField(new Blockly.FieldDropdown([
					["ADC4 (PIN32)", "32"],
					["ADC5 (PIN33)", "33"],
					["ADC6 (PIN34)", "34"],
					["ADC7 (PIN35)", "35"]
				]), "PIN");
			this.setOutput(true, null);
			this.setColour(45);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["openkb_io_pin"] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Digital Pin")
				.appendField(new Blockly.FieldDropdown([
					["BT (IO17)", "17"],
					["WIFI (IO02)", "2"],
					["NTP (IO15)", "15"],
					["IOT (IO12)", "12"],
					["SW1 (IO16)", "16"],
					["SW2 (IO14)", "14"],
					["IN1 (IO32)", "32"],
					["IN2 (IO33)", "33"],
					["IN3 (IO34)", "34"],
					["IN4 (IO35)", "35"],
					["OUT1 (IO26)", "26"],
					["OUT2 (IO27)", "27"],
					["DAC1 (IO25)", "25"],
					["SDA1 (IO21)", "21"],
					["SCL1 (IO22)", "22"],
					["SCK (IO18)", "18"],
					["MISO (IO19)", "19"],
					["MOSI (IO23)", "23"],
					["TXD2 (IO17)", "17"],
					["RXD2 (IO16)", "16"]
				]), "IO_PIN");
			this.setOutput(true, null);
			this.setColour(45);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["openkb_output_write"] = {
		init: function () {
			this.appendDummyInput()
				.appendField(Blockly.Msg.OUTPUT_WRITE_TITLE)
				.appendField(new Blockly.FieldDropdown([
					["OUT1", "26"],
					["OUT2", "27"],
					["BT", "KB_LED_BT"],
					["WIFI", "KB_LED_WIFI"],
					["NTP", "KB_LED_NTP"],
					["IOT", "KB_LED_IOT"]
				]), 'OUTPUT')
				.appendField(Blockly.Msg.STATUS)
				.appendField(new Blockly.FieldDropdown([
					[Blockly.Msg.STATUS_OFF, "0"],
					[Blockly.Msg.STATUS_ON, "1"]
				]), 'STATUS');
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(io_colour);
			this.setTooltip(Blockly.Msg.OUTPUT_WRITE_TOOLTIP);
			this.setHelpUrl(Blockly.Msg.OUTPUT_WRITE_HELPURL);
		}
	};

	Blockly.Blocks["openkb_output_toggle"] = {
		init: function () {
			this.appendDummyInput()
				.appendField(Blockly.Msg.OUTPUT_TOGGLE_TITLE)
				.appendField(new Blockly.FieldDropdown([
					["OUT1", "26"],
					["OUT2", "27"],
					["BT", "KB_LED_BT"],
					["WIFI", "KB_LED_WIFI"],
					["NTP", "KB_LED_NTP"],
					["IOT", "KB_LED_IOT"]
				]), 'OUTPUT')
				.appendField(Blockly.Msg.STATUS);
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(io_colour);
			this.setTooltip(Blockly.Msg.OUTPUT_TOGGLE_TOOLTIP);
			this.setHelpUrl(Blockly.Msg.OUTPUT_TOGGLE_HELPURL);
		}
	};

	Blockly.Blocks["openkb_output_read"] = {
		init: function () {
			this.appendDummyInput()
				.appendField(Blockly.Msg.OUTPUT_READ_TITLE)
				.appendField(new Blockly.FieldDropdown([
					["OUT1", "26"],
					["OUT2", "27"]
				]), 'OUTPUT');
			this.setOutput(true, 'Number');
			this.setInputsInline(true);
			this.setPreviousStatement(null);
			this.setNextStatement(null);
			this.setColour(io_colour);
			this.setTooltip(Blockly.Msg.OUTPUT_READ_TOOLTIP);
			this.setHelpUrl(Blockly.Msg.OUTPUT_READ_HELPURL);
		}
	};

	Blockly.Blocks["openkb_input_read"] = {
		init: function () {
			this.appendDummyInput()
				.appendField(Blockly.Msg.INPUT_READ_TITLE)
				.appendField(new Blockly.FieldDropdown([
					["IN1", "KB_INPUT1"],
					["IN2", "KB_INPUT2"],
					["IN3", "KB_INPUT3"],
					["IN4", "KB_INPUT4"]
				]), 'INPUT');
			this.setOutput(true, 'Number');
			this.setInputsInline(true);
			this.setPreviousStatement(null);
			this.setNextStatement(null);
			this.setColour(io_colour);
			this.setTooltip(Blockly.Msg.INPUT_READ_TOOLTIP);
			this.setHelpUrl(Blockly.Msg.INPUT_READ_HELPURL);
		}
	};

};