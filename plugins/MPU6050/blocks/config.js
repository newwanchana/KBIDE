{
  module.exports = [
    {
        name: "MPU6050",
        blocks: [
          	{
          		xml:
                    `<block type="mpu6050_begin">
                        <value name="pin_sda">
                            <shadow type="math_number">
                                <field name="NUM">21</field>
                            </shadow>
                        </value>
                        <value name="pin_scl">
                            <shadow type="math_number">
                                <field name="NUM">22</field>
                            </shadow>
                        </value>
                    </block>`
            }, 
			"mpu6050_get_acc_x", 
			"mpu6050_get_acc_y", 
			"mpu6050_get_acc_z", 
			"mpu6050_get_gyro_x", 
			"mpu6050_get_gyro_y", 
			"mpu6050_get_gyro_z",  
			"mpu6050_get_angle_x",
			"mpu6050_get_angle_y", 
			"mpu6050_get_angle_z", 
			"mpu6050_get_angle_gyro_x", 
			"mpu6050_get_angle_gyro_y", 
			"mpu6050_get_angle_gyro_z"
        ]
    }
  ];
}