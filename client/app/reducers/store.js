import { createStore } from 'redux';

function counter(state, action) {
  if (typeof state === 'undefined') {
    return {
      counter: 0
    }
  }
  switch (action.type) {
    case 'DEFAULT_VALUE':
      return { ...state, counter: action.initialValue }
    case 'INCREMENT':
      return { ...state, counter: action.amount }
    default:
      return state
  }
}

module.exports = createStore(counter);
