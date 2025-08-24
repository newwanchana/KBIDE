// =============================================================================
// Sensors on Board
// =============================================================================

const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
    name: "Sensor",
    index: 20,
    color: "230",
    icon: `file:///${dirIcon}/static/icons/motion.png`,
    blocks: [
        {
            xml: `<sep gap="32"></sep><label text="OpenKB : Sensors" web-class="headline"></label>`
        },
        "sensor_ldr",
        "sensor_ldr_map",
        "sensor_lm73",
        "sensor_switch1",
        "sensor_switch2"
    ]
};
