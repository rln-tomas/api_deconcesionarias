const mapper = require('automapper-js');

class BaseBussiness {
	constructor(EntityRepository, EntityToMap){
		this._entityRepository = EntityRepository; 
		this._entityToMap = EntityToMap; 
	}

	async getAll(toWhere = null){
		try{
			const entities = await this._entityRepository.getAll(toWhere); 
			return entities.map(entity => mapper(this._entityToMap, entity.toJSON())); 
		}catch(error){
			console.log(error);
			return ; 
		}
	}

	async get(id, toWhere=null){
		try{
			let entity; 
			if (toWhere){
				entity = await this._entityRepository.get(id, toWhere); 
			}else{
				entity = await this._entityRepository.get(id); 
			} 
			return mapper(this._entityToMap, entity.toJSON()); 
		}catch(error){
			return;
		}
	}

	async create(data){
		// in this section I can sanity the inputs
		try{
			await this._entityRepository.create(data); 
			return true;
		}catch(error){
			return ;
		}
	}

	async delete(id){
		try{
			await this._entityRepository.delete(id); 
			return true; 
		}catch(error){
			return;
		}
	}

	async update(id, data){
		try{
			const entityUpdated = await this._entityRepository.update(id, data); 
			return entityUpdated;
		}catch(error){
			return;
		}
	}
}

module.exports = BaseBussiness;