import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import Store from '../reducers/store.js';
import { Card, CardTitle, CardText, RaisedButton, TextField } from 'material-ui';

var Login = React.createClass({

  _submit: function(e) {
    e.preventDefault();
    // TODO: Use AjaxPromise.
    $.post("api/user/login", $("#login-form").serialize())
      .done(function(data){
        console.log(data);
        Store.dispatch({
          type: "USER_SESSION",
          user: data,
          snack: "Welcome back! We missed you :)"
        });
      })
      .fail(function(data){
        console.log("Login error", data);
      });
  },

  render: function() {
    return (
      <div className="row">
        <Card className="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6">
          <form id="login-form" className="text-center" onSubmit={this._submit}>
            <CardTitle title="Login with Email" />

            <div className="field-line">
              <TextField ref="email" floatingLabelText="Email" name="email" />
            </div>

            <div className="field-line">
              <TextField ref="password" floatingLabelText="Password" type="password" name="password" />
            </div>

            <div className="button-line">
              <RaisedButton type="submit" label="Log in" primary={true} />
            </div>

            <CardText>Don't have an account? <Link to={`/signup`}>Create one</Link></CardText>
          </form>
        </Card>
      </div>
    );
  }
});

module.exports = Login;
