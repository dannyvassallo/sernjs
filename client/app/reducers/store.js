import { createStore } from 'redux';
import { browserHistory } from 'react-router';

function appStore(state, action) {
  if (typeof state === 'undefined') {
    return {
      counter: 0,
      drawerOpen: false,
      user: null,
      isLoading: true,
      users: null,
      snacks: []
    }
  }

  // Set snacks.
  let newSnacks = action.snacks || [];
  if (action.snack) newSnacks.push(action.snack);
  if (newSnacks.length) state.snacks = state.snacks.concat(newSnacks);

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
    case 'HIDE_SNACKBAR':
      return { ...state, snacks: state.snacks.slice(1, state.snacks.length) }
    default:
      return state
  }
}

module.exports = createStore(appStore);
