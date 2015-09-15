var express = require ('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	_ = require('lodash');

// tell app to use bodyParser middleware for REST API
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

// app.use('/', function(req, res, next) {
// 	res.send('Hello World');
// 	next();
// });

// Connect to MongoDB
mongoose.connect('mongodb://localhost/vot4');
mongoose.connection.once('open', function() {

// Load the models
app.models = require('./models/index');

//Load the routes
var routes = require('./routes');
_.each(routes, function(controller, route) {
	app.use(route, controller(app, route));
});

	console.log('Listening on port 3000...');
	app.listen(3000);
});
