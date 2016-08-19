import React from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Store from '../reducers/store.js';

class DrawerLeft extends React.Component {

  _handleClose(){
    setTimeout(function(){
      Store.dispatch({
        type: "CLOSE_DRAWER",
        open: false
      });
    }, 100);
    console.log('closed');
  }

  render() {

    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.props.drawerOpen}
          onRequestChange={(open) => this._handleClose() }
        >
          <Link to="/" className="menu-link"><MenuItem onTouchTap={this._handleClose}>Home</MenuItem></Link>
          <Link to="about" className="menu-link"><MenuItem onTouchTap={this._handleClose}>About</MenuItem></Link>
        </Drawer>
      </div>
    );
  }
}

module.exports = DrawerLeft;
