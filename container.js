const {asClass, createContainer, asValue, asFunction} = require('awilix');


const container = createContainer(); 
const Server = require('./server'); 
const StartUp = require('./startUp');

//Services: 
const CategoryService = require('./services/category.service');
const PropertyService = require('./services/property.service');
const VehicleService = require('./services/vehicle.service');
const AssessmentService = require('./services/assessment.service'); 

//Controllers: 
const CategoryController = require('./controllers/category.controller'); 
const PropertyController = require('./controllers/property.controller');
const VehicleController = require('./controllers/vehicle.controller');
const AssessmentController = require('./controllers/assessment.controller');

const db = require('./dal/models');
const config = require('./config/config')[process.env.NODE_ENV || 'development'];

//Repositories: 
const CategoryRepository = require('./dal/repositories/category.repositoy'); 
const PropertyRepository = require('./dal/repositories/property.repository');
const VehicleRepository = require('./dal/repositories/vechicle.repository');
const AssessmentRepository = require('./dal/repositories/assessment.repository'); 

//Routes: 
const CategoryRouter = require('./routes/category');
const PropertyRouter = require('./routes/property');
const VehicleRouter = require('./routes/vehicle');
const AssessmentRouter = require('./routes/assessment');
const Routes = require('./routes');

//Bussiness: 
const CategoryBussiness = require('./domain/category.bussiness');
const PropertyBussiness = require('./domain/property.bussiness');
const VehicleBussiness = require('./domain/vehicle.bussiness');
const AssessmentBussiness = require('./domain/assessment.bussiness'); 

container.register({
	CategoryController: asClass(CategoryController).singleton(),
	PropertyController: asClass(PropertyController).singleton(),
	VehicleController: asClass(VehicleController).singleton(),
	AssessmentController: asClass(AssessmentController).singleton()
}).register({
	db: asValue(db),
	config: asValue(config)
}).register({
	CategoryService: asClass(CategoryService).singleton(),
	PropertyService: asClass(PropertyService).singleton(),
	VehicleService: asClass(VehicleService).singleton(),
	AssessmentService: asClass(AssessmentService).singleton()
}).register({
	CategoryBussiness: asClass(CategoryBussiness).singleton(),
	PropertyBussiness: asClass(PropertyBussiness).singleton(),
	VehicleBussiness: asClass(VehicleBussiness).singleton(), 
	AssessmentBussiness: asClass(AssessmentBussiness).singleton()
}).register({
	CategoryRepository: asClass(CategoryRepository).singleton(),
	PropertyRepository:asClass(PropertyRepository).singleton(),
	VehicleRepository: asClass(VehicleRepository).singleton(), 
	AssessmentRepository: asClass(AssessmentRepository).singleton()
}).register({
	CategoryRouter: asFunction(CategoryRouter).singleton(),
	PropertyRouter: asFunction(PropertyRouter).singleton(),
	VehicleRouter: asFunction(VehicleRouter).singleton(),
	AssessmentRouter: asFunction(AssessmentRouter).singleton(),
	router: asFunction(Routes).singleton()
}).register({
	server: asClass(Server).singleton(),
	app: asClass(StartUp).singleton()
})
;

module.exports = container; 
