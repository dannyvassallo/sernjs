var express = require('express');
var router = express.Router();
var path = require('path');
var VIEWS_DIR = path.resolve(__dirname, '../client/public/views');

/* GET home page. */
router.get('/', function (req, res) {
  res.sendFile(path.join(VIEWS_DIR ,'/index.html'));
});

module.exports = router;
