// =============================================================================
// Real Time Clock
// =============================================================================

module.exports = {
    override: true,
    name: "Time",
    index: 60,
    color: "230",
    icon: "/static/icons/icons8_Story_Time_96px.png",
    blocks: [
        {
            xml: `<sep gap="32"></sep><label text="Delay Time" web-class="headline"></label>`
        },
        {
            xml:
                `<block type="time_delay">
                          <value name="delay">
                              <shadow type="math_number">
                                  <field name="NUM">1000</field>
                              </shadow>
                          </value>
                      </block>`
        },
        {
            xml:
                `<block type="time_delay_microsec">
                          <value name="delay">
                              <shadow type="math_number">
                                  <field name="NUM">1000</field>
                              </shadow>
                          </value>
                      </block>`
        },
        "time_millis",
        "time_micros",
        {
            xml: `<sep gap="32"></sep><label text="Real Time Clock" web-class="headline"></label>`
        },
        // "mcp7941_rtc_begin",
        "mcp7941_rtc_set_datetime",
        "mcp7941_rtc_get_dayOfWeek",
        "mcp7941_rtc_get_hour",
        "mcp7941_rtc_get_minute",
        "mcp7941_rtc_get_second",
        "mcp7941_rtc_get_day",
        "mcp7941_rtc_get_month",
        "mcp7941_rtc_get_year",
        {
            xml: `<sep gap="32"></sep><label text="Internet Time" web-class="headline"></label>`
        },
        {
            xml: `<sep gap="32"></sep><label text="*Connect WIFI before use" web-class="headline"></label>`
        },
        "time_sync",
        "time_get_year",
        "time_get_month",
        "time_get_day",
        "time_get_day_of_week",
        "time_get_hour",
        "time_get_minute",
        "time_get_second"
    ]
};
