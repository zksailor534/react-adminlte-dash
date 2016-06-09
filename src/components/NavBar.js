import React from 'react';
import NavbarLogo from './NavbarLogo';

class Navbar extends React.Component {
  render() {
    return (
      <header className="main-header">
        {this.props.logo}
        <nav className="navbar navbar-static-top">
          {/* Sidebar toggle button */}
          <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>
          {this.props.children}
        </nav>
      </header>
    );
  }
}

Navbar.propTypes = {
  children: React.PropTypes.node,
  logo: React.PropTypes.element,
};

Navbar.defaultProps = {
  logo: <NavbarLogo />,
};

export default Navbar;
