const BaseBussiness = require('./base.bussiness');
const { Category } = require('../dal/models');

class CategoryBussiness extends BaseBussiness {
	constructor({ CategoryRepository }){
		super(CategoryRepository, Category);
	}
}


module.exports = CategoryBussiness;