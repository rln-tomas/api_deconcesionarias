'use strict';
const faker = require('faker');

const createAssessments = () => {
	let assessments = [];

	for (let i = 1; i < 50; i++){
		assessments.push({
			id: i,
			value: faker.datatype.number({
				min: 0, 
				max: 5
			})
		});
	}

	return assessments;
};

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Assessments', createAssessments());
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Assessments', null, {});
	}
};
