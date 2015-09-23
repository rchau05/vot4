var mongoose = require('mongoose'),
    voteSchema = new mongoose.Schema({ ip: 'String' }),
    choiceSchema = new mongoose.Schema({ 
          text: String,
          votes: [voteSchema]
    });
exports.PollSchema = new mongoose.Schema({
    question: { type: String, required: true },
    choices: [choiceSchema]
});