import { createStore } from 'redux';

function appStore(state, action) {
  if (typeof state === 'undefined') {
    return {
      counter: 0,
      drawerOpen: false
    }
  }
  switch (action.type) {
    case 'DEFAULT_VALUE':
      return { ...state, counter: action.initialValue }
    case 'INCREMENT':
      return { ...state, counter: action.amount }
    case 'OPEN_DRAWER':
      return { ...state, drawerOpen: action.open }
    case 'CLOSE_DRAWER':
      return { ...state, drawerOpen: action.open }
    default:
      return state
  }
}

module.exports = createStore(appStore);
