var express = require('express');
var router = express.Router();
var models = require('../../server/models');
var validator = require('validator');
var sessionHelper = require('../../server/helpers/session');
var counterValue = 0;
var passport = require("passport");
router.get('/', function(req, res){
  var userId = sessionHelper.currentUserId(req, res);

  if(userId) {
    models.user.findAll()
    .then(function(allUsers) {
      res.status(200).json(allUsers);
    });
  }
  else {
    res.status(403).json({ errors: { user: ["must_be_signed_in"] } });
  }
});

router.post('/login', passport.authenticate('local'), function(req, res){
  sessionHelper.setCurrentUserId(req, res, req.user.id);
  res.status(200).json(req.user);
});



router.post('/signup', function(req, res){
  var email = req.body.email,
  password = req.body.password,
  validateEmail = validator.isEmail(email);

  if(validateEmail){
    models.user.create({
      email: email,
      password: password
    }).then(function(newUser) {
      sessionHelper.setCurrentUserId(req, res, newUser.id);
      res.status(200).json(newUser);
    })
    .catch(function(error) {
      res.status(500).json(error);
    });
  } else {
    res.status(403).json({ errors: { user: ["invalid_email"] } });
  }
});

router.get('/logout', function(req, res) {
  req.session.destroy(function (err) {
    sessionHelper.clearCurrentUserId(req, res);
    res.status(200).end();
  });
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
