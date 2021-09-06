const { Router } = require('express'); 

module.exports = function({ VehicleController }){
	const router = Router(); 

	router.get('/', VehicleController.getVehicles.bind(VehicleController)); 
	router.get('/:id', VehicleController.getVehicle.bind(VehicleController)); 
	router.post('/', VehicleController.createVehicle.bind(VehicleController)); 
    
	return router; 
};