var express = require('express');
var router = express.Router();
var models  = require('../../server/models');

router.get('/', function(req, res){
  models.Counter.findById(1).then(function(counter){
    if(counter == null){
      var counter = models.Counter.create().then(function(newCounter) {
        console.log(newCounter);
      });
    } else {
      console.log(counter);
    }
  });
  res.json({ increment: 1 });
});

module.exports = router;
