import React from 'react';
import Store from '../reducers/store.js';

class Counter extends React.Component {

  _myAction (){
    fetch('/api/counter')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        let integer = parseInt(json.increment)
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
