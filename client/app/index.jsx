// require app scss for compilation
import '../stylesheets/application.scss'

// import react
import React from 'react';
import {render} from 'react-dom';
// import additional components
import NavBar from './components/NavBar.jsx';

class App extends React.Component {
  render () {
    return (
        <div>
          <NavBar />
          <main>
            <p>Content</p>
          </main>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
