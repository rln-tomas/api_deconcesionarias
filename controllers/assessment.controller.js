class AssessmentController {
	constructor({ AssessmentService }){
		this._assessmentService = AssessmentService; 
	}

	async createAssessment(req, res){
		try{
			const data = req.body; 
			await this._assessmentService.create(data); 
			return res.status(201).send({
				ok: true,
				msg: 'Assessment created successfully!'
			}); 

		}catch(error){
			return res.status(500).send({
				ok: false, 
				error: error
			});
		}
	}

	async getAssessments(req, res){
		try{
			const assessments = await this._assessmentService.getAll(); 
            
			if (!assessments){
				return res.status(400).send({
					ok: false, 
					msg: 'Empty'
				});
			}

			return res.status(200).send({
				ok: true, 
				data: assessments
			});


		}catch(error){
			return res.status(500).send({
				ok: false, 
				error: error
			});
		}
	}

	async getAssessment(req, res){
		try{
			const { id } = req.params; 
			const assessment = await this._assessmentService.get(id); 

			if (!assessment){
				return res.status(400).send({
					ok: false, 
					msg: 'Empty'
				});
			}

			return res.status(200).send({
				ok: true, 
				data: assessment
			});

		}catch(error){
			return res.status(500).send({
				ok: false, 
				error: error
			});
		}
	}

	async deleteAssessment(req, res){
		try{
			const { id } = req.params; 

			await this._assessmentService.delete(id); 

			return res.status(200).send({
				ok: true, 
				msg: 'Assessment deleted successfully'
			});

		}catch(error){
			return res.status(500).send({
				ok: false, 
				error: error
			});
		}
	}

	async updateAssessment(req, res){
		try{
			const { id } = req.params; 
			const data = req.body; 
			await this._assessmentService.update(id, data);
		}catch(error){
			return res.status(500).send({
				ok: false, 
				error: error
			});
		}
	}

}

module.exports = AssessmentController; 
