'use strict';

const createAssociationsVP = () => {
	const associations = []; 

	for (let i = 1; i <10;i++ ){
		for (let j = 1; j<50; j++){
			associations.push({
				vehicleId: i, 
				propertyId: j,
				createdAt: new Date(),
				updatedAt: new Date()
			});
		}
	}

	return associations; 
}; 

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('VehicleProperty', createAssociationsVP());
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('VehicleProperty', null, {});
	}
};
