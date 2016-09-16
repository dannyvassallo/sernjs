var express = require('express');
var router = express.Router();
var models  = require('../../../server/models');
var counterValue = 0;

function findOrCreateNewCounter(){
  models.counter.findById(1).then(function(counter){
    if(counter == null){
      var counter = models.counter.create().then(function(newCounter) {
        console.log('Counter did not exist -- created one.');
      });
    } else {
      counterValue = parseInt(counter.count);
    }
  });
}

function updateCounterWithNewValue(){
  models.counter.findById(1).then(function (counter) {
    if (counter) {
      var newValue = counter.count + 1
      console.log('NEW VALUE: '+ newValue);
      counter.updateAttributes({
        count: newValue
      }).then(function(){
        console.log('Counter was updated to: ' + counter.count);
        counterValue = parseInt(counter.count);
      });
    }
  });
}

router.get('/increment', function(req, res){
  updateCounterWithNewValue();
  setTimeout(function(){
    res.json({ updatedValue: counterValue });
  }, 100);
});

router.get('/value', function(req, res){
  findOrCreateNewCounter();
  res.json({ initialValue: counterValue });
});

module.exports = router;
