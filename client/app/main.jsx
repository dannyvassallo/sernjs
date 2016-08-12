import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

const target = document.getElementById('app');
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About} />
    </Route>
  </Router>,
  target
);
