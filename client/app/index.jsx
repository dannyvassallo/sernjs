// require app scss for compilation
import '../stylesheets/application.scss';
import Favicon from 'react-favicon';
// import react
import React from 'react';
import {render} from 'react-dom';
// import additional components
import NavBar from './components/NavBar.jsx';

class App extends React.Component {
  render () {
    return (
        <div>
          <Favicon url={[
            'https://github.com/apple-touch-icon-180x180.png',
            'https://scotch.io/wp-content/themes/scotchpress/img/favicons/favicon-228.png'
          ]}/>
          <NavBar />
          <main>
            <p>Content</p>
          </main>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
