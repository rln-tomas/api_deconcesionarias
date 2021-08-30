const BaseService = require('./base.service');
class VehicleService extends BaseService{
	constructor({ VehicleBussiness }){
		super(VehicleBussiness);
	}
}

module.exports = VehicleService;