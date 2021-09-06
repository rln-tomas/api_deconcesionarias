const BaseBussiness = require('./base.bussiness'); 
const { Property } = require('../dal/models');  

class PropertyBussiness extends BaseBussiness {
	constructor({ PropertyRepository }){
		super(PropertyRepository, Property);
	}
}

module.exports = PropertyBussiness;