const db = require('./database/db.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = require('express')();
const http = require('http').createServer(app);
const userCrud = require('./routers/userApi');
const subjectCrud = require('./routers/subjectApi')
const passport = require('./passport/passport');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use('/users', userCrud)
app.use('/subjects', subjectCrud)

http.listen(3000, () => console.log('listening to 3000'))
