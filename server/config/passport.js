var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
models = require('../../server/models');

module.exports = function(app){
  // Serialize

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  // Deserialize

  passport.deserializeUser(function(user, done) {
    models.user.findById(user.id, function(err, user) {
      done(err, user);
    });
  });

  // For authentication purposes

  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    function(username, password, done){
      models.user.findOne({ where: {email: username} }).then(function(user){
        if (!user) {
          console.log("USER NOT FOUND");
          return done(null, false);
        }
        if (!user.validPassword(password)) {
          return done(null, false);
        }
        return done(null, user);
      });
    }
  ));

}
