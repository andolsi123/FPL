const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({

  title: String,
  description: String,
  numberOfVotesYes: { type: Number, default: 0 },
  numberOfVotesNo: { type: Number, default: 0 },
  totalVotes: { type: Number, default: 0 }

})

module.exports = mongoose.model('subject', SubjectSchema);
