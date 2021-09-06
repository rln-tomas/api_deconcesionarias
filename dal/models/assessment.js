'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Assessment extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
			Assessment.belongsTo(models.Property,{
				foreignKey: 'id'
			});
		}
	}
	Assessment.init({
		value: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Assessment',
		timestamps: false
	});
	return Assessment;
};