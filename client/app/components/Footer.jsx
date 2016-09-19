import React from 'react';
import { Link, browserHistory } from 'react-router';

var Footer = React.createClass({

  render: function() {
    return (
      <div id="footer" className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <h2>Links</h2>
            <ul>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="docs" >Documentation</Link></li>
              {
                this.props.user ?  (
                  [
                    <li><Link to="users" key="users" >Users</Link></li>,
                    <li><Link to="/" key="logout" >Logout</Link></li>
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
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">2</div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">3</div>
        </div>
      </div>
    );
  }

});

export default Footer;
