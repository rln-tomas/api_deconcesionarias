const {Router} = require('express'); 

module.exports = function({ PropertyController }){
	const router = Router(); 
	router.get('/all', PropertyController.getProperties.bind(PropertyController)); 
	router.get('/:id', PropertyController.getProperty.bind(PropertyController));
	router.get('/all/:categoryId', PropertyController.getPropertiesByCategory.bind(PropertyController)); 
	router.post('/', PropertyController.createProperty.bind(PropertyController));
	router.get('/one/:categoryId', PropertyController.getPropertyByCategory.bind(PropertyController)); 
	router.delete('/:id', PropertyController.deleteProperty.bind(PropertyController)); 
	router.patch('/:id', PropertyController.updateProperty.bind(PropertyController));
	
	return router;
};