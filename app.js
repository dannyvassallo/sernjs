var express = require('express');
var http = require('http');
var path = require('path');
var reload = require('reload');
var bodyParser = require('body-parser');
var logger = require('morgan');
var watch = require('watch');
var sequelize = require('sequelize');
var models = require("./server/models/");
var PrettyError = require('pretty-error');
var app = express();
var BUILD_DIR = path.resolve(__dirname, './client/public/build');
var APP_DIR = path.resolve(__dirname, './client/app');
var PORT_NUM = 5000

// initialize pretty-error
var pe = new PrettyError();
pe.start();
// SET PORT FOR HEROKU DEPLOYMENT
app.set('port', (process.env.PORT || PORT_NUM));
app.use(logger('dev'));
app.use(bodyParser.json()); // Parses json, multi-part (file), url-encoded
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(path.join(__dirname, './client/public/')));
app.use(express.static(path.join(__dirname, './client/public/build/')));

// API Routes
app.use('/api/counter', require('./routes/api/counter.js'));
app.use('/api/user', require('./routes/api/user.js'));
// Index Routes
app.use('*', require('./routes/index.js'));

// sync models THEN start server
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
