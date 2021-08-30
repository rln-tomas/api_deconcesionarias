const {Router} = require('express'); 

module.exports = function({ PropertyController }){
	const router = Router(); 
	router.get('/', PropertyController.getProperties.bind(PropertyController)); 
	router.get('/:id', PropertyController.getProperty.bind(PropertyController)); 
	router.post('/', PropertyController.createProperty.bind(PropertyController));
	
	return router;
};