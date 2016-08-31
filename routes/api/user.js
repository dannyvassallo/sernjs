var express = require('express');
var router = express.Router();
var models  = require('../../server/models');
var counterValue = 0;

router.post('/login', function(req, res){
  var email = req.body.email,
  password = req.body.password;
  console.log("Email is: " + email);
  console.log("Password is: " + password);
  res.status(200).json({"id": "1"});
});

router.get('/current', function(req, res){
  res.status(200).json({"id": "1"});
});

module.exports = router;
