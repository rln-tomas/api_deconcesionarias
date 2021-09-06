const BaseBussiness = require('./base.bussiness'); 
const { Assessment } = require('../dal/models'); 

class AssessmentBussiness extends BaseBussiness {
	constructor({ AssessmentRepository }){
		super(AssessmentRepository, Assessment);
	}
}

module.exports = AssessmentBussiness;