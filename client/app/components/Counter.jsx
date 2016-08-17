import React from 'react';
import Store from '../reducers/store.js';

class Counter extends React.Component {

  componentDidMount(){
    fetch('/api/counter/value')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        let initialValue = parseInt(json.initialValue)
        console.log(initialValue)
        Store.dispatch({
          type: "DEFAULT_VALUE",
          initialValue: initialValue
        });
      })
  }

  _myAction (){
    fetch('/api/counter/increment')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        let integer = parseInt(json.updatedValue)
        Store.dispatch({
          type: "INCREMENT",
          amount: integer
        });
      })
  }

  render (){
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            <h2>Counter: {this.props.counter}</h2>
          </div>
          <div className="col s12 center-align">
            <a onClick={this._myAction.bind(this)} className="btn-large">INCREMENT COUNTER</a>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Counter;
