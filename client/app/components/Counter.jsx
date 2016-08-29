import React from 'react';
import Store from '../reducers/store.js';
import RaisedButton from 'material-ui/RaisedButton';

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
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <h2>Counter: {this.props.counter}</h2>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <RaisedButton primary={true} label="Increment Counter" onClick={this._myAction.bind(this)} />
        </div>
      </div>
    )
  }
}

module.exports = Counter;
