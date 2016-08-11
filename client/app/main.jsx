import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import App from './components/App.jsx';
import Index from './components/Index.jsx';
import About from './components/About.jsx';

let target = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="/about" component={About}></Route>
    </Route>
  </Router>,
  target
);
