import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Store from './reducers/store.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
const target = document.getElementById('app');

injectTapEventPlugin();

function checkCurrentUser(){
  console.log(Store.getState());
}

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About} />
        <Route path="login" component={Login} onEnter={checkCurrentUser}/>
        <Route path="signup" component={SignUp} />
      </Route>
    </Router>
  </MuiThemeProvider>,
  target
);
