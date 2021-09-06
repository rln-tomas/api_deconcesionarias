const BaseService = require('./base.service');

class PropertyService extends BaseService {
	constructor({ PropertyBussiness }){
		super(PropertyBussiness);
	}
}

module.exports = PropertyService;