class VehicleController {
	constructor({ VehicleService }){
		this._vehicleService = VehicleService; 
	}

	async getVehicles(req, res){
		try{
			const vehicles = await this._vehicleService.getAll(); 
			if (!vehicles){
				return res.status({
					ok: false, 
					msg: 'Empty'
				}); 
			}

			return res.status(200).send({
				ok: true, 
				data: vehicles
			});
		}catch(error){
			return res.status(500).send({
				ok: false, 
				error: error
			});
		}
	}

	async getVehicle(req, res){
		try{
			const { id } = req.params; 
			const vehicle = await this._vehicleService.get(id); 
            
			if (!vehicle){
				return res.status({
					ok: false, 
					msg: 'Empty'
				}); 
			}

			return res.status(200).send({
				ok: true, 
				data: vehicle
			});

		}catch(error){
			return res.status(500).send({
				ok: false, 
				error: error
			});
		}
	}

	async createVehicle(req, res){
		try{
			const data = req.body; 
			await this._vehicleService.create(data);
			return res.status(201).send({
				ok: true, 
				msg: 'Vehicle created successfully'
			}); 
		}catch(error){
			return res.status(500).send({
				ok: false, 
				error: error
			});
		}
	}

	async deleteVehicle(req, res){
		try{
			const { id } = req.params; 

			const vehicle = await this._vehicleService.get(id); 

			if (!vehicle){
				return res.status(404).send({
					ok: false, 
					msg: 'Not found'
				});
			}

			await this._vehicleService.delete(id);
			return res.status(200).send({
				ok: true, 
				msg: 'Successfully deleted'
			});
		}catch(error){
			return res.status(500).send({
				error: error, 
				ok: false
			});
		}
	}

	async updateVehicle(req, res){
		try{
			const { id } = req.params; 
			const data = req.body; 
			const vehicleUpdated = await this._vehicleService.update(id, data); 
			return res.status(200).send({
				data: vehicleUpdated,
				ok: true
			});
		}catch(error){
			return res.status(500).send({
				error: error, 
				ok: false
			});
		}
	}
}

module.exports = VehicleController;