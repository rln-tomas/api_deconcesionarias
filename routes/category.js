const {Router} = require('express');


module.exports = function({ CategoryController }){
	const router = Router(); 
	router.get('/', CategoryController.getCategories.bind(CategoryController));
	router.get('/:id', CategoryController.getCategory.bind(CategoryController));
	router.post('/', CategoryController.createCategory.bind(CategoryController));
	router.patch('/:id', CategoryController.updateCategory.bind(CategoryController));
	router.delete('/:id', CategoryController.deleteCategory.bind(CategoryController));
	return router; 
};
