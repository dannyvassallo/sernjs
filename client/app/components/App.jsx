// require app scss for compilation
import '../../stylesheets/application.scss';
// import react
import React from 'react';
import {render} from 'react-dom';
// import additional components
import NavBar from './NavBar.jsx';
import Index from './Index.jsx';

class App extends React.Component {
  render () {
    return (
        <div>
          <NavBar />
          <main>
            <Index />
          </main>
        </div>
    );
  }
}

module.exports = App;
