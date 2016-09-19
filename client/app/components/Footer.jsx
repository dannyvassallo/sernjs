import React from 'react';
import $ from 'jquery';
import Store from '../reducers/store.js';
import { Link, browserHistory } from 'react-router';

var Footer = React.createClass({

  _handleLogout(e){
    e.preventDefault();
    // TODO: Use AjaxPromise.
    $.get("api/user/logout")
      .done(function(data){
        Store.dispatch({
          type: "USER_SESSION",
          user: null,
          snack: "You're logged out. Have a nice day!"
        });
        browserHistory.push('/');
        console.log('logged out');
      })
      .fail(function(data){
        console.log(data);
      });
  },

  render: function() {
    return (
      <div id="footer" className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <h2>Links</h2>
            <ul>
              <li><Link key="home" to="/" >Home</Link></li>
              <li><Link key="docs" to="docs" >Documentation</Link></li>
              {
                this.props.user ?  (
                  [
                    <li><Link to="users" key="users" >Users</Link></li>,
                    <li><Link to="/" key="logout" onTouchTap={this._handleLogout} >Logout</Link></li>
                  ]
                ) : (
                  [
                    <li><Link to="login" key="login" >Login</Link></li>,
                    <li><Link to="signup" key="signup" >Sign Up</Link></li>
                  ]
                )
              }
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <h2>About</h2>
            <p>sern.js is a Full-Stack Javascript for an easy starting point with SequelizeJS, ExpressJS, PassportJS, ReactJS and NodeJS based applications.</p>
            <p>It is designed to give you a quick and organized way to start developing SERN based web apps.</p>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <h2>Info</h2>
            <p>Made with <i className="fa fa-heart" aria-hidden="true"></i> at Trendsetter Media & Marketing by <a href="https://github.com/dannyvassallo" target="_blank">@dannyvassallo</a> <i className="fa fa-github" aria-hidden="true"></i></p>
          </div>
        </div>
      </div>
    );
  }

});

export default Footer;
