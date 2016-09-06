import React from 'react';
import { Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Store from '../reducers/store.js';
import DrawerLeft from './DrawerLeft.jsx';

var NavBar = React.createClass({

  _goToIndex: function(){
    browserHistory.push('/');
  },

  _toggleAppDrawer: function(){
    Store.dispatch({
      type: "OPEN_DRAWER",
      open: true
    });
  },

  render: function() {
    return (
      <div className="navbar">
        <AppBar
          title="sern.js"
          iconClassNameRight="logo"
          onTitleTouchTap={this._goToIndex}
          onLeftIconButtonTouchTap={this._toggleAppDrawer}
        />
        <DrawerLeft {...this.props}/>
      </div>
    );
  }

});

export default NavBar;
