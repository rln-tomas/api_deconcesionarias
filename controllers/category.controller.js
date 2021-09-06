
class CategoryController {
	constructor({CategoryService}){
		this._categoryService = CategoryService; 
	}

	async getCategories(req, res){
		try{
			const categories = await this._categoryService.getAll(); 
			if (!categories){
				return res.status(404).send({
					ok: false, 
					msg: 'Empty'
				});
			}
			return res.status(200).send({
				data: categories, 
				ok: true
			});
		}catch(error){
			return res.status(500).send({
				error: error, 
				ok: false
			});
		}
	}

	async getCategory(req, res){
		try{
			const { id }  = req.params; 
			const category = await this._categoryService.get(id); 
			if (!category){
				return res.status(404).send({
					ok: false, 
					msg: 'Empty'
				});
			}
			return res.status(200).send({
				ok: true, 
				data: category
			});
		}catch(error){
			return res.status(500).send({
				ok: false, 
				error: error
			});
		}
	}

	async createCategory(req, res){
		try{
			const data = req.body; 
			const created = await this._categoryService.create(data); 
			if (!created){
				return res.status(400).send({
					ok: false, 
					msg: 'Error'
				});
			}

			return res.status(201).send({
				ok: true, 
				msg: 'Successfully created'
			});
		}catch(error){
			return res.status(500).send({
				error: error, 
				ok: false
			});
		}
	}

	async deleteCategory(req, res){
		try{
			const { id } = req.params; 

			const category = await this._categoryService.get(id); 

			if (!category){
				return res.status(404).send({
					ok: false, 
					msg: 'Not found'
				});
			}

			await this._categoryService.delete(id);
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

	async updateCategory(req, res){
		try{
			const { id } = req.params; 
			const data = req.body; 
			const categoryUpdated = await this._categoryService.update(id, data); 
			return res.status(200).send({
				data: categoryUpdated,
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

module.exports = CategoryController; 