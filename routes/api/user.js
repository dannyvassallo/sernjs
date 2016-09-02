var express = require('express');
var router = express.Router();
var models  = require('../../server/models');
var counterValue = 0;

function setEncryptedUser(loggedInUser, res) {
  console.log(loggedInUser);
  const cookieParams = {
    httpOnly: true,
    signed: true,
    maxAge: 300000,
  };
  res.cookie('user', loggedInUser.id, cookieParams);
  res.end('new cookie set (user)');
}

router.post('/login', function(req, res){
  var email = req.body.email,
  password = req.body.password;
  console.log("Email is: " + email);
  console.log("Password is: " + password);
  models.User.find({where: { email_address: email, password: password}})
  .then(function(loggedInUser) {
    setEncryptedUser(loggedInUser, res);
  });
});

router.post('/signup', function(req, res){
  var email = req.body.email,
  password = req.body.password;
  models.User.create({
    email_address: email,
    password: password
  }).then(function(newUser) {
    setEncryptedUser(newUser, res);
    res.status(200).json(newUser);
  });
});

router.get('/logout', function(req, res) {
  res.clearCookie('user');
  res.redirect('/');
});

router.get('/current', function(req, res){
  // res.status(200).json({"id": "1"});
  var userId = req.signedCookies.user.id
  res.status(200).json({"userId": userId});
});

module.exports = router;
