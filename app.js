var express = require('express');
var http = require('http');
var path = require('path');
var reload = require('reload');
var bodyParser = require('body-parser');
var logger = require('morgan');
var watch = require('watch');

var app = express();

var BUILD_DIR = path.resolve(__dirname, './client/public');
var APP_DIR = path.resolve(__dirname, './client/app');
var PORT_NUM = 5000
// SET PORT FOR HEROKU DEPLOYMENT
app.set('port', (process.env.PORT || PORT_NUM));
app.use(logger('dev'))
app.use(bodyParser.json()) // Parses json, multi-part (file), url-encoded

app.use(express.static(path.join(__dirname, './client/public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(BUILD_DIR + '/index.html'));
});

var server = http.createServer(app);

// Reload code here
var reloadServer = reload(server, app);

watch.watchTree(__dirname + "/client", function (f, curr, prev) {
    // Fire server-side reload event
    reloadServer.reload();
});

server.listen(app.get('port'), function () {
  console.log('App is listening on port '+PORT_NUM+'! Visit localhost:'+PORT_NUM+' in your browser.');
});
