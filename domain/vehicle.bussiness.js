const BaseBussiness = require('./base.bussiness'); 
const {Vehicle} = require('../dal/models');

class VehicleBussiness extends BaseBussiness {
	constructor({ VehicleRepository }){
		super(VehicleRepository, Vehicle);
	}
}

module.exports = VehicleBussiness;