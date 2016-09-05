import { every } from "lodash";
import Store from './store.js';
import PromiseWaiter from '../lib/PromiseWaiter.js';

// Can be easily adapted to fit multiple stores if required, by creating new PromiseWaiters.

var setLoading = function (value) {
  Store.dispatch({
    type: "LOADING",
    isLoading: value
  });
}

var waiter = new PromiseWaiter();
waiter.onRegister(setLoading.bind(null, true));
waiter.onAllCompelte(setLoading.bind(null, false));

module.exports = waiter.waitFor;
