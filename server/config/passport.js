var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
models = require('../../server/models');

// Serialize

passport.serializeUser(function(user, done) {
  done(null, user);
});

// Deserialize

passport.deserializeUser(function(user, done){
  models.User.find({where: {id: user.id}}).success(function(user){
    done(null, user);
  }).error(function(err){
    done(err, null);
  });
});

// For authentication purposes

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done){
    models.User.find({where: {username: username}}).success(function(user){
      passwd = user ? user.password : '';
      isMatch = models.User.validPassword(password, passwd, done, user);
    })
  }
));
