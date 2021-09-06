'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class VehicleProperty extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
		}
	}
	VehicleProperty.init({
		vehicleId: DataTypes.INTEGER,
		propertyId: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'VehicleProperty',
		tableName: 'VehicleProperty'
	});
	return VehicleProperty;
};