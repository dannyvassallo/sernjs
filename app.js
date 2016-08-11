var express = require('express');
var app = express();
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './client/public');
var APP_DIR = path.resolve(__dirname, './client/app');

// SET PORT FOR HEROKU DEPLOYMENT
app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, './client/public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(BUILD_DIR + '/index.html'));
});

app.listen(app.get('port'), function () {
  console.log('App is listening on port 3000! Visit localhost:3000 in your browser.');
});
