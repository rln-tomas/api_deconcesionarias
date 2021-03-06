class BaseRepository {
	constructor(db, entity){
		this._db = db; 
		this._entity = entity; 
	}

	async getAll(toWhere = null){
		try {
			if (toWhere){
				return await this._db[this._entity].findAll({where: toWhere});

			}
			return await this._db[this._entity].findAll();
			
		}catch(error){
			console.log(error);
			return; 
		}
	}

	async get(id, toWhere=null){
		try {
			if (toWhere){
				return await this._db[this._entity].findOne({ where: toWhere });
			}
			
			return await this._db[this._entity].findByPk(id);
		}catch(error){
			return ; 
		}
	}

	

	async create(data){
		try{
			return await this._db[this._entity].create(data); 
		}catch(error){
			return; 
		}
	}

	async delete(id){
		try{
			return await this._db[this._entity].destroy({where: {id:id}});
		}catch(error){
			return; 
		}
	}

	async update(id, data){
		try{
			const entityUpdated = this._db[this._entity].update(data, { where: { id:id } }); 
			return entityUpdated;
		}catch(error){
			return; 
		}
	}

}

module.exports = BaseRepository;