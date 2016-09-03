var express = require('express');
var router = express.Router();
var models = require('../../server/models');
var sessionHelper = require('../../server/helpers/session');

var counterValue = 0;

function setEncryptedUser(loggedInUser, req, res) {
  console.log("setEncryptedUser" + loggedInUser);
  req.session.userId = loggedInUser.id;
}

router.get('/', function(req, res){
  var userId = sessionHelper.currentUserId(req);

  if (userId) {
    models.User.findAll()
    .then(function(allUsers) {
      console.log("All users: " + allUsers);
      res.status(200).json(allUsers);
    });
  }
  else {
    console.log("All users: Not signed in");
    res.status(403).json({ errors: { user: ["must_be_signed_in"] } });
  }
});

router.post('/login', function(req, res){
  var email = req.body.email
    , password = req.body.password;

  console.log("Email is: " + email);
  console.log("Password is: " + password);
  models.User.findOne({where: { email_address: email, password: password}})
  .then(function(loggedInUser) {
    if (loggedInUser) {
      setEncryptedUser(loggedInUser, req, res);
      res.status(200).json(loggedInUser);
    }
    else {
      res.status(403).json({ errors: { user: ["does_not_exist"] } });
    }
  })
  .catch(function(error) {
    console.log("Login error: " + error);
    res.status(500).json(error);
  });
});

router.post('/signup', function(req, res){
  var email = req.body.email
    , password = req.body.password;

  models.User.create({
    email_address: email,
    password: password
  }).then(function(newUser) {
    setEncryptedUser(newUser, req, res);
    res.status(200).json(newUser);
  })
  .catch(function(error) {
    console.log("Signup error: " + error);
    res.status(500).json(error);
  });
});

router.get('/logout', function(req, res) {
  delete req.session.userId;
  res.status(200).end();
});

router.get('/current', function(req, res){
  var userId = sessionHelper.currentUserId(req);

  if(userId){
    console.log("USER ID: "+userId);
    res.status(200).json({"userId": userId});
  } else {
    console.log("USER ID: "+userId);
    res.status(403).json({"userId": userId});
  }
});

module.exports = router;
