// import jquery and enable sidenav
import React from 'react';
import {Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';

class NavBar extends React.Component {
  // const { main } = this.props;
  _goToIndex(){
    alert('will route to index');
  }

  _toggleAppDrawer(){
    alert('will toggle drawer');
  }

  render() {
    return (
      <div>
        <AppBar
          title="SERN.js"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onTitleTouchTap={this._goToIndex.bind(this)}
          onLeftIconButtonTouchTap={this._toggleAppDrawer.bind(this)}
        />
        <Link to="/">Home</Link>
        <Link to="about">about</Link>
      </div>
    );
  }

}

export default NavBar;
