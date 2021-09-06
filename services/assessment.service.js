const BaseService = require('./base.service'); 

class AssessmentService extends BaseService {
	constructor({ AssessmentBussiness }){
		super(AssessmentBussiness);
	}
}

module.exports = AssessmentService; 
