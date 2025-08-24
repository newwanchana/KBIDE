module.exports = [
	{
		name : "Smart_Farm",
		blocks : [
		  {
                xml:
                   `<block type="Relay_module">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="status">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
                xml:
                   `<block type="LED_module">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="status">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
          },
		  'soil_Read_analog',
		  'LDR_Read_analog',

		  'DHT_ESP32_Setup',
          'DHT_ESP32_readTemp',
          'DHT_ESP32_readHumid',
          "BH1750FVI_init",
          "BH1750FVI_GetLightIntensity",
          "ds18b20_init",
            {
                xml:
                   `<block type="ds18b20_get_temperature">
                        <value name="device">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
            },
            {
                xml:
                   `<block type="ds18b20_get_temperature_f">
                        <value name="device">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
            },
            'SHT31_Setup',
          'SHT31_readTemp',
          'SHT31_readHumid',
          { xml : 
              `<block type="Blynk_V2">
                  <value name="Text">
                      <shadow type="basic_string">
                          <field name="VALUE">https://github.com/PrinceBot-Ratthanin/kbide-blynkV2</field>
                      </shadow>
                  </value>                                    
              </block>`
          },
          { xml : 
              `<block type="HandySense">
                  <value name="Text">
                      <shadow type="basic_string">
                          <field name="VALUE">https://github.com/PrinceBot-Ratthanin/HandySense</field>
                      </shadow>
                  </value>                                    
              </block>`
          },
			
		]
	}	
];