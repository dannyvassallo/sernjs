var express = require('express');
var router = express.Router();
var models = require('../../server/models');
var sessionHelper = require('../../server/helpers/session');

var counterValue = 0;

router.get('/', function(req, res){
  var userId = sessionHelper.currentUserId(req, res);

  if (userId) {
    models.User.findAll()
    .then(function(allUsers) {
      res.status(200).json(allUsers);
    });
  }
  else {
    res.status(403).json({ errors: { user: ["must_be_signed_in"] } });
  }
});

router.post('/login', function(req, res){
  var email = req.body.email
    , password = req.body.password;

  models.User.findOne({where: { email_address: email, password: password}})
  .then(function(loggedInUser) {
    if (loggedInUser) {
      sessionHelper.setCurrentUserId(req, res, loggedInUser.id);
      res.status(200).json(loggedInUser);
    }
    else {
      res.status(403).json({ errors: { user: ["does_not_exist"] } });
    }
  })
  .catch(function(error) {
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
    sessionHelper.setCurrentUserId(req, res, newUser.id);
    res.status(200).json(newUser);
  })
  .catch(function(error) {
    res.status(500).json(error);
  });
});

router.get('/logout', function(req, res) {
  sessionHelper.clearCurrentUserId(req, res);
  res.status(200).end();
});

router.get('/current', function(req, res){
  var userId = sessionHelper.currentUserId(req, res);

  if(userId){
    res.status(200).json({"userId": userId});
  } else {
    res.status(403).json({"userId": userId});
  }
});

module.exports = router;
