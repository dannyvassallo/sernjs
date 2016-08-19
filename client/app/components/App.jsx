// import react
import React from 'react';
import {render} from 'react-dom';
import NavBar from './NavBar.jsx';
import Favicon from 'react-favicon';
import Store from '../reducers/store.js';
import 'whatwg-fetch';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = Store.getState();
  }

  componentDidMount (){
    Store.subscribe(this._getState.bind(this));
  }

  _getState (){
    this.setState(Store.getState());
  }

  render () {
    return (
        <div>
          <Favicon url={[
            'https://github.com/apple-touch-icon-180x180.png'
            // ,'https://scotch.io/wp-content/themes/scotchpress/img/favicons/favicon-228.png'
          ]}/>
          <NavBar state={this.props.children && React.cloneElement(this.props.children, this.state)} />
          <main className="container">
              {this.props.children && React.cloneElement(this.props.children, this.state)}
          </main>
        </div>
    );
  }
}

module.exports = App;
