import React from 'react';
import { Link } from 'react-router';
import AjaxPromise from 'ajax-promise';
import Store from '../reducers/store.js';
import loadingUntil from '../reducers/loading.js';
import { Card, CardTitle, CardText, RaisedButton, TextField } from 'material-ui';

var Users = React.createClass({

  componentDidMount: function() {
    if (!this.props.users) {
      let fetchUsers = AjaxPromise
        .get('/api/user')
        .then(function (response) {
          console.log("load users", response);
          Store.dispatch({
            type: "LOAD_USERS",
            users: response
          });
        })
        .catch(function(err){
          console.log("/api/user/index error", err);
        });

      loadingUntil(fetchUsers);
    }
  },

  _renderUser: function(user) {
    return (
      <div className="row" key={user.id}>
        <Card className="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6">
          <CardTitle title={user.email} />
          <CardText>Created at: {user.createdAt}</CardText>
        </Card>
      </div>
    );
  },

  render: function() {
    return (
      <div className="users-table">
        {this.props.users ? this.props.users.map(this._renderUser) : null}
      </div>
    );
  }
});

module.exports = Users;
