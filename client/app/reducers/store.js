import { createStore } from 'redux';

function counter(state, action) {
  if (typeof state === 'undefined') {
    return {
      counter: 0
    }
  }
  switch (action.type) {
    case 'INCREMENT':
      let newValue = state.counter + action.amount;
      return { ...state, counter: newValue }
    default:
      return state
  }
}

module.exports = createStore(counter);
