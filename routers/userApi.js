const router = require('express').Router();
const User = require('../models/userShema');

router.post('/login', function (req, res) {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err) {
      res.send(err)
    } if (!user) {
      res.send("wrong eamil")
    } if (user.password === req.body.password) {
      res.send(user)
      if (user.dateOfLastVote !== Date.getDate()) {
        user.findByIdAndUpdate({ _id: user._id }, { $set: { dailyVotes: 0 } }, function (err2) {
          if (err2) { res.send(err2) }
        })
      }
    } else {
      res.send("wrong password")
    }
  })
})

router.post('/addUser', async function (req, res) {
  let user = new User(req.body)
  await user.save(function (err, user) {
    if (err) {
      res.send(err)
    }
    res.send(user)
  })
})

module.exports = router;
