const BaseService = require('./base.service'); 

class CategoryService extends BaseService{
	constructor({CategoryBussiness}){
		super(CategoryBussiness);
	}
}

module.exports = CategoryService;