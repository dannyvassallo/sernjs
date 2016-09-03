import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import Store from '../reducers/store.js';
import {Card, CardTitle, CardText, RaisedButton, TextField} from 'material-ui';

var Users = React.createClass({

  componentDidMount: function() {
    fetch('/api/user/index')
      .then(function(response) {
        return response.json()
      })
      .then(function(users) {
        Store.dispatch({
          type: "LOAD_USERS",
          users: users
        });
      })
      .catch(function(errors){
        console.log("Users errors", errors);
      })
  },

  render: function() {
    let user = {
      email_address: "pooo!"
    }
    console.log("props.users", this.props.users);

    return (
      <div className="users-table">
        <div className="row">
          <Card className="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6">
            <CardTitle title={user.email_address} />
            <CardText>Hello</CardText>
          </Card>
        </div>

      </div>
    );
  }
});

module.exports = Users;
