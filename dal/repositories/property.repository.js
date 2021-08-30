const BaseRepository = require('./base.repository'); 

class PropertyRepository extends BaseRepository {
	constructor({db}){
		super(db, 'Property');
	}
}

module.exports = PropertyRepository;