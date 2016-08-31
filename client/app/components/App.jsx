// import react
import $ from "jQuery";
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
    $.ajax({url: "/api/user/current", method: "GET"}, function(data){
      console.log(data);
    })
    .done(function(data){
      console.log(data);
      Store.dispatch({
        type: "INITIAL_USER",
        user: data
      });
    })
    .fail(function(data){
      console.log(data);
    });
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
          <NavBar {...this.state} />
          <main>
            <div className="wrap container-flud">
              {this.props.children && React.cloneElement(this.props.children, this.state)}
            </div>
          </main>
        </div>
    );
  }
}

module.exports = App;
