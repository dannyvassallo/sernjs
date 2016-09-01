var express = require('express');
var router = express.Router();
var models  = require('../../server/models');
var counterValue = 0;

router.post('/login', function(req, res){
  var email = req.body.email,
  password = req.body.password;
  console.log("Email is: " + email);
  console.log("Password is: " + password);
  models.User.find({where: { email_address: email, password: password}})
  .then(function(loggedInUser) {
    console.log(loggedInUser);
    res.status(200).json(loggedInUser);
  });
});

router.post('/signup', function(req, res){
  var email = req.body.email,
  password = req.body.password;
  models.User.create({
    email_address: email,
    password: password
  }).then(function(newUser) {
    res.status(200).json(newUser);
  });
});

router.get('/current', function(req, res){
  // res.status(200).json({"id": "1"});
  res.status(500).json({"errors": "No way jose."});
});

module.exports = router;
