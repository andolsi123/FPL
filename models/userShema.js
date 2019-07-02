const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

  email: String,
  name: String,
  password: String,
  dailyVotes: { type: Number, default: 0 },
  dateOfLastVote: {type: Date, default: (Date.getDate() - 1)},

})

module.exports = mongoose.model('user', UserSchema);
