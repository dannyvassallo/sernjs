// require app scss for compilation
require('../stylesheets/application.scss');
// import react
import React from 'react';
import {render} from 'react-dom';
// import additional components
import AwesomeComponent from './components/AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <AwesomeComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
