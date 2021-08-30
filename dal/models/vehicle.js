'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Vehicle extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
			Vehicle.hasMany(models.Property,{
				foreignKey: 'vehicleId'
			});
		}
	}
	Vehicle.init({
		name: DataTypes.STRING,
		assessmentId: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Vehicle',
	});

	Vehicle.associate = function(models){
		Vehicle.hasMany(models.Property,{
			foreignKey: 'id'
		});
	};
	
	return Vehicle;
};