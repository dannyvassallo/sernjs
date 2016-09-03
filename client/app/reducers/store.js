import { createStore } from 'redux';
import { browserHistory } from 'react-router';

function appStore(state, action) {
  if (typeof state === 'undefined') {
    return {
      counter: 0,
      drawerOpen: false,
      user: null,
      isLoading: true,
      users: null
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
    case 'INITIAL_USER':
      return { ...state, user: action.user }
    case 'USER_SESSION':
      browserHistory.push('/');
      return { ...state, user: action.user }
    case 'LOADING':
      return { ...state, isLoading: action.isLoading }
    case 'LOAD_USERS':
      return { ...state, users: action.users }
    default:
      return state
  }
}

module.exports = createStore(appStore);
