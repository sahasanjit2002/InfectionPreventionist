const routes = require('express')();
const controller = require('../controller/patientDataController');
const bodyParser = require('body-parser');

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));

routes.post('/patientRegister',controller.patientRegister)

module.exports = routes;