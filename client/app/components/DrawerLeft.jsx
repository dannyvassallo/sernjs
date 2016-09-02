import React from 'react';
import $ from 'jquery';
import { Link, browserHistory } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Store from '../reducers/store.js';

class DrawerLeft extends React.Component {

  _handleClose(){
    Store.dispatch({
      type: "CLOSE_DRAWER",
      open: false
    });
    console.log('closed');
  }

  _handleLogout(e, _handleClose){
    e.preventDefault();
    $.get( "api/user/logout")
      .done(function(data){
        console.log('logged out');
        Store.dispatch({
          type: "USER_SESSION",
          user: null
        });
        browserHistory.push('/');
        setTimeout(function(){
          Store.dispatch({
            type: "CLOSE_DRAWER",
            open: false
          });
        }, 100);
      })
      .fail(function(data){
        console.log(data);
      });
  }

  render() {

    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.props.drawerOpen}
          onRequestChange={(open) => this._handleClose() }
          disableSwipeToOpen={true}
        >
          <Link to="/" className="menu-link"><MenuItem onTouchTap={this._handleClose}>Home</MenuItem></Link>
          <Link to="about" className="menu-link"><MenuItem onTouchTap={this._handleClose}>About</MenuItem></Link>
          {
            this.props.user ?  (
              [
                <Link to="/" key="logout" className="menu-link"><MenuItem onTouchTap={this._handleLogout}>Log Out</MenuItem></Link>
              ]
            ) : (
              [
                <Link to="login" key="login" className="menu-link"><MenuItem onTouchTap={this._handleClose}>Login</MenuItem></Link>,
                <Link to="signup" key="signup" className="menu-link"><MenuItem onTouchTap={this._handleClose}>Sign Up</MenuItem></Link>
              ]
            )
          }
        </Drawer>
      </div>
    );
  }
}

module.exports = DrawerLeft;
