var mongoose = require('mongoose');

//create a CandidateSchema
var CandidateSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	party: {
		type: String,
		required: true
	},
	votes: {
		type: Number,
		required: true
	}
});

// Export the model Schema
module.exports = CandidateSchema;