module.exports = function (Blockly) {
	'use strict';

	Blockly.JavaScript["openkb_adc_pin"] = function (block) {
		let dropdown_name = block.getFieldValue("PIN");
		let code = `${dropdown_name}`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript["openkb_io_pin"] = function (block) {
		let dropdown_name = block.getFieldValue("IO_PIN");
		let code = `${dropdown_name}`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['openkb_output_write'] = function (block) {
		let pin = block.getFieldValue('OUTPUT');
		let val = block.getFieldValue('STATUS');
		if (pin.startsWith("KB_LED")) {
			val = "!" + val;
		}
		let code = 'digitalWrite(' + pin + ',' + val + ');\n';
		return code;
	};

	Blockly.JavaScript['openkb_output_toggle'] = function (block) {
		var code = 'digitalWrite(' + block.getFieldValue('OUTPUT') + ', !digitalRead(' + block.getFieldValue('OUTPUT') + '));\n';
		return code;
	};

	Blockly.JavaScript['openkb_output_read'] = function (block) {
		return [
			'digitalRead(' + block.getFieldValue('OUTPUT') + ')',
			Blockly.JavaScript.ORDER_ATOMIC
		];
	};

	Blockly.JavaScript['openkb_input_read'] = function (block) {
		return ['((int)digitalRead(' + block.getFieldValue('INPUT') + '))',
		Blockly.JavaScript.ORDER_ATOMIC
		];

	};

};