module.exports = [
    {
        name: "KB_Exten",
        blocks: [
            {
              xml: `<sep gap="32"></sep><label text="KB_Exten Setup ตั้งค่า " web-class="headline"></label>`
            },
            'KB_Exten_setup',
            'KB_Exten_set_ultrasonic',
            'KB_Exten_set_ds18b20',
            'KB_Exten_set_dht',
            {
              xml: `<sep gap="32"></sep><label text="Sensor เซนเซอร์ " web-class="headline"></label>`
            },
            'KB_Exten_digital_Write',
            'KB_Exten_analog',
            'KB_Exten_digital_Read',
            {
              xml: `<sep gap="32"></sep><label text="ตั้งค่า pin ก่อนใช้งาน" web-class="headline"></label>`
            },
            'KB_Exten_read_ultrasonic',
            'KB_Exten_read_ds18b20',
            'KB_Exten_read_dht',
            {
              xml: `<sep gap="32"></sep><label text="Motor มอเตอร์" web-class="headline"></label>`
            },
            {
                    xml : 
                    `<block type="KB_Exten_Servo_motor">
                        <value name="degree">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                    </block>`
                },
            {
                    xml : 
                    `<block type="KB_Exten_motor_stop_ch">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="KB_Exten_motor_forward">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="KB_Exten_motor_backward">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="KB_Exten_motor_turn">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="KB_Exten_motor_spin">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="KB_Exten_motor">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="KB_Exten_Servo_motor_Moving">
                        <value name="present_angle">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                        <value name="traget_angle">
                            <shadow type="math_number">
                                <field name="NUM">120</field>
                            </shadow>
                        </value>
                        <value name="speed_servo">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="KB_Exten_Servo_run">
                        <value name="traget_angle">
                            <shadow type="math_number">
                                <field name="NUM">120</field>
                            </shadow>
                        </value>
                        <value name="speed_servo">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="servo_dif">
                            <shadow type="math_number">
                                <field name="NUM">2</field>
                            </shadow>
                        </value>
                    </block>`
                },


        ]
    }
];