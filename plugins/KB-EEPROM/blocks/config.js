module.exports = [
    {
        name: "EEPROM",
        blocks: [
            {
                    xml : 
                    `<block type="EEPROM_Begin">
                        <value name="size">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
            },
            //'EEPROM_commit',
            {
                    xml : 
                    `<block type="EEPROM_write">
                        <value name="address">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="value">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
            },
            {
                    xml : 
                    `<block type="EEPROM_writeString">
                        <value name="address">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="value">
                            <shadow type="basic_string">
                                <field name="VALUE">Test</field>
                            </shadow>
                        </value>
                    </block>`
            },
            {
                    xml : 
                    `<block type="EEPROM_writeLong">
                        <value name="address">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="value">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
            },
            {
                    xml : 
                    `<block type="EEPROM_writeFloat">
                        <value name="address">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="value">
                            <shadow type="math_number">
                                <field name="NUM">0.5</field>
                            </shadow>
                        </value>
                    </block>`
            },
            {
                    xml : 
                    `<block type="EEPROM_read">
                        <value name="address">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
            },
            {
                    xml : 
                    `<block type="EEPROM_readString">
                        <value name="address">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
            },
            {
                    xml : 
                    `<block type="EEPROM_readLong">
                        <value name="address">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
            },
            {
                    xml : 
                    `<block type="EEPROM_readFloat">
                        <value name="address">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
            },
        ]
    }
];