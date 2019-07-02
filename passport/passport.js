const passport = require('passport');
const jwt = require('jsonwebtoken');
const bearerStrategy = require('passport-http-bearer');
const User = require('../models/userShema');
const JWT_SIGN_SECRET = 'KJN4511qkqhxq5585x5s85f8f2x8ww8w55x8s52q5w2q2';

passport.use(new bearerStrategy(function (token, done) {
  jwt.verify(token, JWT_SIGN_SECRET, function (err, decoded) {
    if (err) return (err)
    if (decoded) {
      User.findOne({_id: decoded.data._id}, function (err, user) {
        if (err) { return done(err) }
        if (!user) { return done(null, false) }
        return done(null, true)
      })
    }
  })
}))
