var express = require('express');
var router = express.Router();
var models  = require('../../server/models');

function findOrCreateNewCounter(){
  models.Counter.findById(1).then(function(counter){
    if(counter == null){
      var counter = models.Counter.create().then(function(newCounter) {
        console.log(newCounter);
      });
    } else {
      console.log(counter);
    }
  });
}

function updateCounterWithNewValue(){
  models.Counter.findById(1).then(function (counter) {
    if (counter) {
      var newValue = counter.count + 1
      console.log('NEW VALUE: '+ newValue);
      counter.updateAttributes({
        count: newValue
      }).then(function(){
        console.log('counter was updated to: ' + counter.count);
      });
    }
  });
}

router.get('/', function(req, res){
  findOrCreateNewCounter();
  updateCounterWithNewValue();
  res.json({ increment: 1 });
});

module.exports = router;
