'use strict';

const faker = require('faker'); 

const createCategories = () => {
	const categories = [];

	for (let i = 1; i < 10; i++){
		categories.push({
			id: i, 
			name: faker.random.words(),
			icon: faker.image.transport()
		});
	}

	return categories; 
};

module.exports = {
	up: async (queryInterface, Sequelize) => {
		queryInterface.bulkInsert('Categories', createCategories());
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Categories', null, {});
	}
};
