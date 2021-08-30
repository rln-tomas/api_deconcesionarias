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
			Assessment.hasOne(models.Property, {
				foreignKey: 'id'
			});
			Assessment.hasMany(models.Vehicle, {
				foreignKey: 'id'
			});
		}
	}
	Assessment.init({
		value: DataTypes.INTEGER,
	}, {
		sequelize,
		modelName: 'Assessment',
	});

	Assessment.associate = function(models){
		// define association here
		Assessment.hasOne(models.Property, {
			foreignKey: 'assessmentId'
		});
		Assessment.hasMany(models.Vehicle, {
			foreignKey: 'assessmentId'
		});
	};
	return Assessment;
};