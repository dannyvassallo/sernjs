var express = require('express');
var http = require('http');
var path = require('path');
var reload = require('reload');
var bodyParser = require('body-parser');
var logger = require('morgan');
var watch = require('watch');
var sequelize = require('sequelize');
var PrettyError = require('pretty-error');
var cookieParser = require('cookie-parser');
var cookieEncrypter = require('cookie-encrypter');
var models = require("./server/models/");
var session = require('express-session');
var passport = require('passport');

var cookieSecretKey = process.env.COOKIE_SECRET_KEY;
var sessionSecretKey = process.env.SESSION_SECRET_KEY;
var app = express();
var BUILD_DIR = path.resolve(__dirname, './client/public/build');
var APP_DIR = path.resolve(__dirname, './client/app');
var PORT_NUM = 5000;

// Initialize pretty-error
var pe = new PrettyError();
pe.start();

// Set port for heroku deployment
app.set('port', process.env.PORT || PORT_NUM);
app.use(logger('dev'));

// Parses json, multi-part (file), url-encoded
app.use(bodyParser.json());

// passport config
app.use(session({ secret: sessionSecretKey }));
app.use(passport.initialize());
app.use(passport.session());

// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

// Set cookie encryption
app.use(cookieParser(cookieSecretKey));
app.use(cookieEncrypter(cookieSecretKey));

// Service static assets
app.use(express.static(path.join(__dirname, './client/public/')));
app.use(express.static(path.join(__dirname, './client/public/build/')));

// API Routes
app.use('/api/counter', require('./routes/api/counter.js'));
app.use('/api/user', require('./routes/api/user.js'));

// Index Routes
app.use('*', require('./routes/index.js'));

// Sync models THEN start server
models.sequelize.sync().then(function () {

  var server = http.createServer(app);
  server.listen(app.get('port'), function () {
    console.log('App is listening on port '+PORT_NUM+'! Visit localhost:'+PORT_NUM+' in your browser.');
  });

  // Reload code here
  var reloadServer = reload(server, app);

  watch.watchTree(__dirname + "/client", function (f, curr, prev) {
    // Fire server-side reload event
    reloadServer.reload();
  });

});
