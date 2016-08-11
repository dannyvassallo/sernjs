import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute } from 'react-router';
import { createHashHistory } from 'history'
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

let target = document.getElementById('app');
let history = createHashHistory();

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About} />
    </Route>
  </Router>,
  target
);
