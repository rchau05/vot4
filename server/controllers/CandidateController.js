var restful = require('node-restful');
module.exports = function(app, route) {

	//Setup the controller for REST
	var rest = restful.model(
		'candidate',
		app.models.candidate
	).methods(['get', 'put', 'post', 'delete']);

	// Register this endpoint with application
	rest.register(app, route);

	//Return middeware
	return function(req, res, next) {
		next();
	};
};
