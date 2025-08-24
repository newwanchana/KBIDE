module.exports = [
	{
		name : "Pulsein",
		blocks : [
			'pulsein_read',
            //'pulsein_read_timeout',
        {
          xml:
          `<block type="pulsein_read_timeout">
            <value name="timeout">
              <block type="math_number">
                <field name="NUM">1000</field>
              </block>
            </value>
          </block>`
        },
			
		]
	}
];