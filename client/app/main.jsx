import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import Docs from './components/Docs.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Users from './components/Users.jsx';
import Store from './reducers/store.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
const target = document.getElementById('app');

injectTapEventPlugin();

function redirectIfSignedIn(){
  var state = Store.getState();
  if(state.isLoading) return;

  if(state.user){
    browserHistory.replace('/');
  } else {
    console.log("User is not present");
  }
}

function redirectUnlessSignedIn(){
  var state = Store.getState();
  if(state.isLoading) return;

  if(state.user){
    console.log("User is present");
  } else {
    browserHistory.replace('/');
  }
}

Store.subscribe(refresh);
function refresh() {
  console.log("REFRESH");
  browserHistory.replace(location);
}

var routes = ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="docs" component={Docs} />
        <Route path="login" component={Login} onChange={redirectIfSignedIn} onEnter={redirectIfSignedIn}/>
        <Route path="signup" component={SignUp} onChange={redirectIfSignedIn} onEnter={redirectIfSignedIn}/>
        <Route path="users" component={Users} onChange={redirectUnlessSignedIn} onEnter={redirectUnlessSignedIn}/>
      </Route>
    </Router>
  </MuiThemeProvider>,
  target
);
