var express = require('express');
var router = express.Router();
var models = require('../../../server/models');
var sessionHelper = require('../../../server/helpers/session');
var counterValue = 0;
var passport = require("passport");


function signInUser(req, res, error, user, info){
  if(error) { return res.status(500).json(error); }
  if(!user) { return res.status(401).json(info.message); }
  var userId = user.id;
  sessionHelper.setCurrentUserId(req, res, userId);
  res.status(200).json(user);
}

router.get('/', function(req, res){
  var userId = sessionHelper.currentUserId(req, res);
  if(userId) {
    models.user.findAll()
    .then(function(allUsers) {
      res.status(200).json(allUsers);
    });
  } else {
    res.status(403).json({ errors: { user: ["must_be_signed_in"] } });
  }
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(error, user, info) {
    signInUser(req, res, error, user, info);
  })(req, res, next);
});

router.post('/signup', function(req, res, next){
  passport.authenticate('local-signup', function(error, user, info) {
    signInUser(req, res, error, user, info);
  })(req, res, next);
});

router.get('/logout', function(req, res) {
  req.session.destroy();
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
