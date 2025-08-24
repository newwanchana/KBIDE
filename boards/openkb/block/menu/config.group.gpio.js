// =============================================================================
// GPIO
// =============================================================================
const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
    name: "GPIO",
    index: 0,
    color: "230",
    icon: `file:///${dirIcon}/static/icons/chipic.png`,
    blocks: [
        {
            xml: `<sep gap="32"></sep><label text="OpenKB : GPIO" web-class="headline"></label>`
        },
        "openkb_adc_pin",
        "openkb_io_pin",
        "openkb_output_write",
        "openkb_output_toggle",
        "openkb_output_read",
        "openkb_input_read"
    ]
};
