module.exports = [
    {
        name: "Neopixel",
        blocks: [
            {
                xml:
                    `<block type="neopixel_rgb_begin">
                        <value name="PIN">
                            <shadow type="math_number">
                                <field name="NUM">23</field>
                            </shadow>
                        </value>
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">8</field>
                            </shadow>
                        </value>
                    </block>`
            },
            'neopixel_rgb_clear',
            {
                xml:
                    `<block type="neopixel_rgb_setBrightness">
                        <value name="BRIGHT">
                            <shadow type="math_number">
                                <field name="NUM">128</field>
                            </shadow>
                        </value>
                    </block>`
            },
            {
                xml:
                    `<block type="neopixel_rgb_setPixelColor">
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
            },
            'neopixel_rgb_fillLED',
            {
                xml:
                    `<block type="neopixel_rgb_colorWipe">
                        <value name="TIME">
                            <shadow type="math_number">
                                <field name="NUM">100</field>
                            </shadow>
                        </value>
                    </block>`
            },
            {
                xml:
                    `<block type="neopixel_rgb_theaterChase">
                        <value name="TIME">
                            <shadow type="math_number">
                                <field name="NUM">100</field>
                            </shadow>
                        </value>
                    </block>`
            },
            'neopixel_rgb_rainbow_begin',
            {
                xml:
                    `<block type="neopixel_rgb_rainbow">
                        <value name="TIME">
                            <shadow type="math_number">
                                <field name="NUM">25</field>
                            </shadow>
                        </value>
                    </block>`
            },
            {
                xml:
                    `<block type="neopixel_rgb_rainbowCycle">
                        <value name="TIME">
                            <shadow type="math_number">
                                <field name="NUM">25</field>
                            </shadow>
                        </value>
                    </block>`
            }

        ]
    }
];