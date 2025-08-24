module.exports = {
  blocks: [ // use "blocks : [ " in normally situation but this need to override base block from esp-idf platforms
    {
      name: "Display",
      color: "230",
      icon: "/static/icons/icons8_picture_96px_1.png",
      blocks: [
        {
          xml: `<block type="variables_set">
                  <field name="VAR">img1</field>
                  <value name="VALUE">
                      <block type="i2c128x64_create_image" inline="false"></block>
                  </value>
                </block>`
        }, {
          xml:
            `<block type="i2c128x64_display_image">
                        <value name="img">
                            <block type="variables_get">
                                <field name="VAR">img1</field>
                            </block>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="width">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="height">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                    </block>`
        },
        //"i2c128x64_take_a_photo",
        "i2c128x64_display_clear",
        "i2c128x64_display_display",
        {
          xml:
            `<block type="i2c128x64_display_print">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
        },
        {
          xml:
            `<block type="i2c128x64_display_draw_line">
                        <value name="x0">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="y0">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="x1">
                            <shadow type="math_number">
                                <field name="NUM">100</field>
                            </shadow>
                        </value>
                        <value name="y1">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
        },
        {
          xml:
            `<block type="i2c128x64_display_draw_rect">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="width">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="height">
                            <shadow type="math_number">
                                <field name="NUM">30</field>
                            </shadow>
                        </value>
                    </block>`
        },
        {
          xml:
            `<block type="i2c128x64_display_draw_circle">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">64</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>
                        <value name="r">
                            <shadow type="math_number">
                                <field name="NUM">20</field>
                            </shadow>
                        </value>
                    </block>`
        },
        {
          xml:
            `<block type="i2c128x64_display_draw_progress_bar">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>
                        <value name="width">
                            <shadow type="math_number">
                                <field name="NUM">120</field>
                            </shadow>
                        </value>
                        <value name="height">
                            <shadow type="math_number">
                                <field name="NUM">30</field>
                            </shadow>
                        </value>
                        <value name="progress">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
        },
        {
          xml:
            `<block type="i2c128x64_display_draw_pixel">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">64</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>    
                    </block>`
        },
        {
          xml:
            `<block type="i2c128x64_display_string_width">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                    </block>`
        },
        "i2c128x64_display_width",
        "i2c128x64_display_height",
        "basic_string"
      ]
    },
    {
      name: "Sensor",
      color: "230",
      icon: "/static/icons/icons8_thermometer_96px.png",
      blocks: [
        "button_1_status",
        "button_2_status",
        "bme280_read_temp",
        "bme280_read_humid",
        "bme280_read_pressure",
        "bme280_read_altitude",
        "bh1680_read_light_1",
        "bh1680_read_light_2",
        "bh1745_read_red",
        "bh1745_read_green",
        "bh1745_read_blue",
        "bmx055_read_acc_x",
        "bmx055_read_acc_y",
        "bmx055_read_acc_z",
        "bmx055_read_gyro_x",
        "bmx055_read_gyro_y",
        "bmx055_read_gyro_z",
        "bmx055_read_mag_x",
        "bmx055_read_mag_y",
        "bmx055_read_mag_z"
      ]
    },
    {
      name: "GPIO",
      color: "230",
      icon: "/static/icons/icons8_electronics_96px.png",
      blocks: [
        {
          xml:
            `<block type="task_io_interrupt">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
        },
        "io_board_read",
        "io_board_write",
      ]
    },
    {
      override : false,
      name: "Time",
      color: "230",
      icon: "/static/icons/icons8_Story_Time_96px.png",
      blocks: [
        {
          xml:
            `<block type="time_delay">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">500</field>
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
        "time_micros"
      ]
    }
  ],
};
