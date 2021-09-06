const { Router } = require('express'); 

module.exports = function({ AssessmentController }){
	const router = Router(); 
	router.get('/', AssessmentController.getAssessments.bind(AssessmentController)); 
	router.get('/:id', AssessmentController.getAssessment.bind(AssessmentController)); 
	router.post('/', AssessmentController.createAssessment.bind(AssessmentController)); 
	router.patch('/:id', AssessmentController.updateAssessment.bind(AssessmentController)); 
	router.delete('/:id', AssessmentController.deleteAssessment.bind(AssessmentController)); 

	return router; 
};
