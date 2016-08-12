// require app scss for compilation
import '../../stylesheets/application.scss';
// import react
import React from 'react';
import {render} from 'react-dom';
// import additional components
import NavBar from './NavBar.jsx';
import Favicon from 'react-favicon';
import Store from '../reducers/store.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = Store.getState();
  }

  componentDidMount (){
    Store.subscribe(this._getState.bind(this));
  }

  componentWillMount() {
    // ASSESS WHETHER LIVERELOAD RUNS OR NOT
    var head = document.getElementsByTagName('body')[0];
    var js = document.createElement("script"),
    hostname = window.location.hostname;

    if (hostname == "localhost"){
     console.log("live reload is active.");
     js.src = "/reload/reload.js";
     js.type = "text/html";
    } else {
     console.log("live reload disabled.");
    }

    head.appendChild(js);
  }

  _getState (){
    this.setState(Store.getState());
  }

  _myAction (arg){
    Store.dispatch({
      type: "INCREMENT",
      amount: arg
   });
  setTimeout(function(){
    Store.dispatch({
      type: "INCREMENT",
      amount: arg
    });
   }, 100);
  }

  render () {
    return (
        <div>
          <Favicon url={[
            'https://github.com/apple-touch-icon-180x180.png',
            'https://scotch.io/wp-content/themes/scotchpress/img/favicons/favicon-228.png'
          ]}/>
          <NavBar />
          <main>
            {this.props.children}
            {this.state.counter}<br/>
            <a onClick={this._myAction.bind(this, 1)}>BUTTON 1</a><br/>
            <a onClick={this._myAction.bind(this, 2)}>BUTTON 2</a>
          </main>
        </div>
    );
  }
}

module.exports = App;
