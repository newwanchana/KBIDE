module.exports = [
    {
        name: "KB-Robot",
        blocks: [
            'KBIDERobot_setup',
            {
                    xml : 
                    `<block type="adc_AnalogRead">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
            },
            {
                    xml : 
                    `<block type="KBRobot_servo">
                        <value name="angle">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                    </block>`
            },
            'KBRobot_motor_stop_ch',
             {
                    xml : 
                    `<block type="KBRobot_motor_action">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
            },
            {
                xml : 
                `<block type="KBRobot_motor_forward2">
                    <value name="speed1">
                        <shadow type="math_number">
                            <field name="NUM">50</field>""
                        </shadow>
                    </value>
                     <value name="speed2">
                        <shadow type="math_number">
                            <field name="NUM">50</field>""
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml : 
                `<block type="KBRobot_motor_backward2">
                    <value name="speed1">
                        <shadow type="math_number">
                            <field name="NUM">50</field>""
                        </shadow>
                    </value>
                     <value name="speed2">
                        <shadow type="math_number">
                            <field name="NUM">50</field>""
                        </shadow>
                    </value>
                </block>`
            },
            // {
            //     xml : 
            //     `<block type="KBRobot_motor_forward">
            //         <value name="speed">
            //             <shadow type="math_number">
            //                 <field name="NUM">50</field>""
            //             </shadow>
            //         </value>
            //     </block>`
            // },
            // {
            //     xml : 
            //     `<block type="KBRobot_motor_backward">
            //         <value name="speed">
            //             <shadow type="math_number">
            //                 <field name="NUM">50</field>
            //             </shadow>
            //         </value>
            //     </block>`
            // },
            // {
            //     xml : 
            //     `<block type="KBRobot_motor_spin_left">
            //         <value name="speed">
            //             <shadow type="math_number">
            //                 <field name="NUM">50</field>
            //             </shadow>
            //         </value>
            //     </block>`
            // },
            // {
            //     xml : 
            //     `<block type="KBRobot_motor_spin_right">
            //         <value name="speed">
            //             <shadow type="math_number">
            //                 <field name="NUM">50</field>
            //             </shadow>
            //         </value>
            //     </block>`
            // },
            // {
            //     xml : 
            //     `<block type="KBRobot_motor_turn_left">
            //         <value name="speed">
            //             <shadow type="math_number">
            //                 <field name="NUM">50</field>
            //             </shadow>
            //         </value>
            //     </block>`
            // },
            // {
            //     xml : 
            //     `<block type="KBRobot_motor_turn_right">
            //         <value name="speed">
            //             <shadow type="math_number">
            //                 <field name="NUM">50</field>
            //             </shadow>
            //         </value>
            //     </block>`
            // },

            // 'ads1115_read_adc_comparator',
            // 'ads1115_read_alert_status'
        ]
    }
];