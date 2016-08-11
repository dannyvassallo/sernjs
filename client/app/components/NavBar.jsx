// import jquery and enable sidenav
import React from 'react';
import {Link} from 'react-router';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">Logo</Link>
              <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><Link to="about">Sass</Link></li>
                <li><a href="badges.html">Components</a></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li><Link to="about">Sass</Link></li>
                <li><a href="badges.html">Components</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

}

export default NavBar;
