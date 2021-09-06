const BaseRepository = require('./base.repository'); 

class AssessmentRepository extends BaseRepository {
	constructor({ db }){
		super(db, 'Assessment');
	}
}

module.exports = AssessmentRepository;