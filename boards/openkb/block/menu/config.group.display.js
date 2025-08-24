// =============================================================================
// Display 18x6 LED Matrix Display
// =============================================================================
const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
    name: "Display",
    index: 10,
    color: "230",
    icon: `file:///${dirIcon}/static/icons/tv.png`,
    blocks: [
        {
            xml: `<sep gap="32"></sep><label text="OpenKB : 16x8 Display" web-class="headline"></label>`
        },
        "display_led16x8",
        "display_led16x8_clr",
        {
            xml: `<block type="display_led16x8_print">
              <value name="VALUE">
                  <block type = "basic_string"></block>>
              </value>
            </block>` },
        {
            xml: `<block type="display_led16x8_scroll">
              <value name="VALUE">
                <block type = "basic_string"></block>>
              </value>
              <value name="SPEED">
                <block type = "math_number">
                    <field name="NUM">50</field>
                </block>
              </value>
            </block>`
        },
        'basic_string'
    ]
};