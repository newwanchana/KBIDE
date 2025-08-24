Blockly.JavaScript['mlblock_serial_ondata'] = function(block) {
  var dropdown_serial = block.getFieldValue('serial');
  var statements_on_data_func = Blockly.JavaScript.statementToCode(block, 'on_data_func');
  // TODO: Assemble JavaScript into code variable.
  var code = `
#EXTINC
#include "MLBlockSerial.h"
MLBlockSerial mlblock(&${dropdown_serial});
#END

#FUNCTION
void OnResult(MLObject __result){
  ${statements_on_data_func}
}
#END

#BLOCKSETUP
mlblock.setOnResult(OnResult);
#END

mlblock.process();
`;
  return code;
};

Blockly.JavaScript['mlblock_serial_get_data'] = function(block) {
  var dropdown_field = block.getFieldValue('field');
  // TODO: Assemble JavaScript into code variable.
  var code = `__result.${dropdown_field}
  `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};