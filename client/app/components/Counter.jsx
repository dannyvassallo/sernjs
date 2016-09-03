import React from 'react';
import AjaxPromise from 'ajax-promise';
import Store from '../reducers/store.js';
import RaisedButton from 'material-ui/RaisedButton';

class Counter extends React.Component {

  _myAction (){
    AjaxPromise.get('/api/counter/increment')
      .then(function(response) {
        let integer = parseInt(response.updatedValue)
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
