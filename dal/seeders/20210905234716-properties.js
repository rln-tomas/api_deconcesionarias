'use strict';
const faker = require('faker');

const createProperties = () => {
	const properties = [];
	for (let i=1; i<50; i++){
		properties.push({
			id: i, 
			name: faker.random.words(),
			categoryId: faker.datatype.number({
				min: 1, 
				max: 9
			})
		});
	}

	return properties;
};

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Properties', createProperties());
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Properties', null, {});
	}
};
