import { every, each } from "lodash";

function PromiseWaiter () {

  // Private variables:
  var resolvedStatuses = []
    , onRegisterCallbacks = []
    , onAllCompleteCallbacks = [];


  // Public API:
  this.onRegister = function (callback) {
    onRegisterCallbacks.push(callback);
  }.bind(this);

  this.onAllCompelte = function (callback) {
    onAllCompleteCallbacks.push(callback);
  }.bind(this);

  this.waitFor = function (promise) {
    let index = resolvedStatuses.length;
    resolvedStatuses[index] = false;

    promise.reflect().then(resolvePromise.bind(this, index));

    invokeAll(onRegisterCallbacks);
  }.bind(this);


  // Private methods:
  var resolvePromise = function (index) {
    resolvedStatuses[index] = true;
    if (allComplete()) invokeAll(onAllCompleteCallbacks);
  }.bind(this);

  var allComplete = function (index) {
    return every(resolvedStatuses);
  }.bind(this);

  var invokeAll = function (callbackFunctions) {
    each(callbackFunctions, function (callbackFunction) {
      callbackFunction();
    });
  }

}

module.exports = PromiseWaiter;
