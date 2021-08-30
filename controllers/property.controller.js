class PropertyController {
	constructor({ PropertyService }){
		this._propertyService = PropertyService;
	}

	async getProperties(req, res){
		try{
			const properties = await this._propertyService.getAll();
            
			if (!properties){
				return res.status(404).send({
					ok: false, 
					msg: 'Empty'
				});
			}

			return res.status(200).send({
				ok: true, 
				data: properties
			}); 
		}catch(error){
			return res.status(500).send({
				ok: false, 
				error: error
			});
		}
	}

	async getProperty(req, res){
		try{
			const { id } = req.params; 
			const property = await this._propertyService.get(id);
            
			if (!property){
				return res.status(400).send({
					ok: false, 
					msg: 'Empty'
				});
			}

			return res.status(200).send({
				ok: true, 
				data: property
			}); 
		}catch(error){
			return res.status(500).send({
				ok: false, 
				error: error
			});
		}
	}

	async createProperty(req, res){
		try{
			const data = req.body; 
			await this._propertyService.create(data);
			return res.status(201).send({
				ok: true, 
				msg: 'Property created successfully'
			}); 
		}catch(error){
			return res.status(500).send({
				ok:false, 
				error: error
			});
		}
	}

	async deleteProperty(req, res){
		try{
			const { id } = req.params; 

			const property = await this._propertyService.get(id); 

			if (!property){
				return res.status(404).send({
					ok: false, 
					msg: 'Not found'
				});
			}

			await this._propertyService.delete(id);
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

	async updateProperty(req, res){
		try{
			const { id } = req.params; 
			const data = req.body; 
			const propertyUpdated = await this._propertyService.update(id, data); 
			return res.status(200).send({
				data: propertyUpdated,
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

module.exports = PropertyController;