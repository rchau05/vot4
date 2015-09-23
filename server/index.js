var express = require ('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	_ = require('lodash');

// var db = mongoose.createConnection('localhost', 'clientApp'),
// 		PollSchema = require('./models/Poll.js').PollSchema,
// 		Poll = db.model('polls', PollSchema);
// exports.index = function(req, res) {
//     res.render('index', {title: 'Polls'});
// };
// // JSON API for list of polls
// exports.list = function(req, res) { 
//     Poll.find({}, 'question', function(error, polls) {
//       res.json(polls);
//     });
// };
// // JSON API for getting a single poll
// exports.poll = function(req, res) {  
//     var pollId = req.params.id;
//     Poll.findById(pollId, '', { lean: true }, function(err, poll) {
//       if(poll) {
//         var userVoted = false,
//         userChoice,
//         totalVotes = 0;
//         for(c in poll.choices) {
//         	var choice = poll.choices[c]; 
//         	for(v in choice.votes) {
//         		var vote = choice.votes[v];
//         		totalVotes++;
//         		if(vote.ip === (req.header('x-forwarded-for') || req.ip)) {
//         			userVoted = true;
//         			userChoice = { _id: choice._id, text: choice.text };
//         		}
//         }
//     }
//         			poll.userVoted = userVoted;
//         			poll.userChoice = userChoice;
//         			poll.totalVotes = totalVotes;
//         			res.json(poll);
//         		} else {
//         			res.json({error:true});
//         		}
//         	});
//         };
//         // JSON API for creating a new poll
//         exports.create = function(req, res) {
//         	var reqBody = req.body,
//         	choices = reqBody.choices.filter(function(v) { return v.text != ''; }),
//         	pollObj = {question: reqBody.question, choices: choices};
//         	var poll = new Poll(pollObj);
//         	poll.save(function(err, doc) {
//         		if(err || !doc) {
//         			throw 'Error';
//         		} else {
//         			res.json(doc);
//         		}   
//         	});
//         };

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
