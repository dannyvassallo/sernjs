// import jquery and enable sidenav
import React from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';

class NavBar extends React.Component {
  // const { main } = this.props;
  render() {
    return (
      <div className="navbar-fixed">
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <nav>
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">Logo</Link>
              <a href="#" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><Link to="about">Sass</Link></li>
              </ul>
              <ul className="side-nav" id="mobile-nav">
                <li><Link to="about">Sass</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

}

export default NavBar;
