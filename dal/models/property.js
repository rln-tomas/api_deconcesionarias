'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Property extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
			Property.belongsToMany(models.Vehicle, {
				through: 'VehicleProperty',
				foreignKey: 'propertyId'
			});
		}
	}
	Property.init({
		name: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Property',
		timestamps: false
	});

	return Property;
};