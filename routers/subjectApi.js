const Subject = require('../models/subjectShema');
const User = require('../models/userShema');
const router = require('express').Router();

router.post('/addSubject', async function (req, res) {
  var subject = new Subject(req.body);
  await subject.save(function (err, subject) {
    if (err) {
      res.send(err);
    }
    res.send(subject);
  })
})

router.post('/addVoteYes/:id/:idUser', async function (req, res) {
  await Subject.findByIdAndUpdate({ _id: req.params.id }, { $inc: { numberOfVotesYes: 1, totalVotes: 1 } }).exec(function (err, subject) {
    if (err) {
      res.send(err);
    }
    User.findById({ _id: req.params.idUser }, function (err2, user) {
      if (err2) { res.send(err2) }
      if (user.dailyVotes < 6) {
        User.findByIdAndUpdate({ _id: req.params.idUser }, { $inc: { dailyVote: 1 } }).exec(function (err3, user2) {
          if (err3) { res.send(err3) }
          res.send(user2)
          if (user2.dailyVotes === 5) {
            User.findByIdAndUpdate({ _id: req.params.idUser }, { $set: { dateOfLastVote: date.setDate(date.getDate()) } }).exec(function (err4, dt) {
              if (err4) { res.send(err4) };
            })
          }
        })
      }
    })
  })
})

router.post('/addVoteNo/:id/:idUser', async function (req, res) {
  var date = new Date();
  await Subject.findByIdAndUpdate({ _id: req.params.id }, { $inc: { numberOfVotesNo: 1, totalVotes: 1 } }).exec(function (err, subject) {
    if (err) {
      res.send(err);
    }
    User.findById({ _id: req.params.idUser }, function (err2, user) {
      if (err2) { res.send(err2) }
      if (user.dailyVotes < 6) {
        User.findByIdAndUpdate({ _id: req.params.idUser }, { $inc: { dailyVotes: 1 } }).exec(function (err3, user2) {
          if (err3) { res.send(err3) }
          res.send(user2)
          if (user2.dailyVotes === 5) {
            User.findByIdAndUpdate({ _id: req.params.idUser }, { $set: { dateOfLastVote: date.setDate(date.getDate()) } }).exec(function (err4, dt) {
              if (err4) { res.send(err4) };
            })
          }
        })
      }
    })
  })
})

router.get('/getAllSubjects', async function (req, res) {
  await Subject.find().exec(function (err, subjects) {
    if (err) {
      res.send(err);
    }
    res.send(subjects);
  })
})

module.exports = router;
