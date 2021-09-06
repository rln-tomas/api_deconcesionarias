class BaseService {
	constructor(EntityBussiness){
		this._entityBussiness = EntityBussiness; 
	}

	async getAll(toWhere = null){
		try{
			return await this._entityBussiness.getAll(toWhere);
		}catch(error){
			return; 
		}
	}

	async get(id, toWhere=null){
		try{
			if (toWhere){
				return await this._entityBussiness.get(id, toWhere);
			}
			return await this._entityBussiness.get(id);
		}catch(error){
			return; 
		}
	}

	async delete(id){
		try{
			await this._entityBussiness.delete(id); 
			return true; 
		}catch(error){
			return; 
		}
	}

	async create(data){
		try{
			await this._entityBussiness.create(data); 
			return true; 
		}catch(error){
			return; 
		}
	}

	async update(id, data){
		try{
			await this._entityBussiness.update(id, data); 
			return true; 
		}catch(error){
			return; 
		}
	}
}

module.exports = BaseService;