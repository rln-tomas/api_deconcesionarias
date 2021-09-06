'use strict';
const faker = require('faker');

const createVehicles = () => {
	const vehicles = [];

	for (let i = 1; i < 10; i++){
		vehicles.push({
			id: i,
			name: faker.vehicle.vehicle()
		});
	}

	return vehicles;
};

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Vehicles',createVehicles());
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Vehicles', null, {});
	}
};
