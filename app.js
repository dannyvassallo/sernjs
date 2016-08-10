var express = require('express');
var app = express();
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './client/public');
var APP_DIR = path.resolve(__dirname, './client/app');

app.get('/', function (req, res) {
  res.sendFile(path.join(BUILD_DIR + '/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
