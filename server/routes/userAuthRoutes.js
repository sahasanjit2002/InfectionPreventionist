const routes = require('express')();
const controller = require('../controller/userAuthController');
const bodyParser = require('body-parser');

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));


routes.post('/login',controller.login)
routes.post('/register',controller.register)
routes.post('/logout',controller.logout)
routes.post('/verify-token',controller.verify)

module.exports = routes;