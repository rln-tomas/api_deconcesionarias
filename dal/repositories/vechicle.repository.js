const BaseRepository = require('./base.repository'); 

class VehicleRepository extends BaseRepository {
	constructor({db}){
		super(db, 'Vehicle');
	}
}

module.exports = VehicleRepository;