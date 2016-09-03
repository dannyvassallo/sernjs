// import react
import $ from "jquery";
import React from 'react';
import {render} from 'react-dom';
import NavBar from './NavBar.jsx';
import Store from '../reducers/store.js';
import AjaxPromise from 'ajax-promise';
import 'whatwg-fetch';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = Store.getState();
  }

  componentWillMount(){
    Store.dispatch({
      type: "LOADING",
      isLoading: true
    });
  }

  componentDidMount (){
    var initAjax = [
      AjaxPromise
        .get('/api/user/current')
        .then(function (response) {
          console.log(response);
          Store.dispatch({
            type: "INITIAL_USER",
            user: response
          });
        })
        .catch(function(err){
          console.log("/api/user/current error", err);
        }),

      AjaxPromise
        .get('/api/counter/value')
        .then(function (response) {
          console.log(response);
          let initialValue = parseInt(response.initialValue)
          Store.dispatch({
            type: "DEFAULT_VALUE",
            initialValue: initialValue
          });
        })
        .catch(function(err){
          console.log("/api/counter/value error", err);
        })
    ];

    Promise.all(initAjax.map(function(promise){return promise.reflect();})).then(function(){
      console.log("AND THEN");
      Store.dispatch({
        type: "LOADING",
        isLoading: false
      });
    });
    Store.subscribe(this._getState.bind(this));
  }

  _getState (){
    this.setState(Store.getState());
  }

  render () {
    console.log(this.state.isLoading);
    return (
        <div>
          <NavBar {...this.state} />
          <main>
            <div className="wrap container-flud">
              {this.state.isLoading ? "Loading..." : this.props.children && React.cloneElement(this.props.children, this.state)}
            </div>
          </main>
        </div>
    );
  }
}

module.exports = App;
