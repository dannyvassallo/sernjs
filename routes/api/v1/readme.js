var express = require('express');
var router = express.Router();
var path = require('path');
var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  header: false,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});
var ROOT_DIR = path.resolve(__dirname, '../../../');
var fs = require('fs');
var readMarkdown;

fs.readFile(ROOT_DIR + '/README.md', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  readMarkdown = data;
});

router.get('/json', function(req, res){
  markdown = marked(readMarkdown);
  res.json({ parsedMarkdown: markdown });
});

module.exports = router;
