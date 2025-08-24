module.exports = function(Blockly){
'use strict';

Blockly.JavaScript['sensor_lm73'] = function(block) {
	return [
		'lm73.readTemp()',
		Blockly.JavaScript.ORDER_ATOMIC
	];
};

Blockly.JavaScript['sensor_ldr'] = function(block) {
	return [
		'ldr.getLDR()',
		Blockly.JavaScript.ORDER_ATOMIC
	];
};

Blockly.JavaScript['sensor_ldr_map'] = function(block) {
	return [
		'ldr.mapLDR()',
		Blockly.JavaScript.ORDER_ATOMIC
	];
};

Blockly.JavaScript['sensor_switch1'] = function(block) {
	return [ '!(int)digitalRead(KB_BUTTON1)',
		Blockly.JavaScript.ORDER_ATOMIC
	];
};

Blockly.JavaScript['sensor_switch2'] = function(block) {
	return [ '!(int)digitalRead(KB_BUTTON2)',
		Blockly.JavaScript.ORDER_ATOMIC
	];
};

};