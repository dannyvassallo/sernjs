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


// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));


// Service static assets
app.use(express.static(path.join(__dirname, './client/public/')));
app.use(express.static(path.join(__dirname, './client/public/build/')));

// passport & cookie encryption config
require('./server/config/passport')(app);
app.use(cookieParser(cookieSecretKey));
app.use(cookieEncrypter(cookieSecretKey));
app.use(session({
  secret: sessionSecretKey,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// API Routes
app.use('/api/counter', require('./routes/api/v1/counter.js'));
app.use('/api/user', require('./routes/api/v1/user.js'));
app.use('/api/readme', require('./routes/api/v1/readme.js'));

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
