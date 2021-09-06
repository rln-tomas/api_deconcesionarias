const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const compression = require('compression');
const morgan = require('morgan');

/* GET home page. */
module.exports = function({ CategoryRouter, PropertyRouter, VehicleRouter, AssessmentRouter }){
	
	const router = Router();
	const apiRouter = Router(); 

	apiRouter.use(cors())
		.use(bodyParser.json())
		.use(compression())
		.use(morgan());

	apiRouter.use('/category',CategoryRouter); 
	apiRouter.use('/property', PropertyRouter);
	apiRouter.use('/assessment', AssessmentRouter);
	apiRouter.use('/vehicle', VehicleRouter);
	router.use('/api', apiRouter);
	
	return router;
};

