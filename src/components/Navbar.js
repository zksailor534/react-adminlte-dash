import React from 'react';
import NavbarLogo from './NavbarLogo';

class Navbar extends React.Component {
  render() {
    return (
      <header className="main-header">

        {/* Logo */}
        {this.props.logo}

        {/* Header Navbar: style can be found in header.less */}
        <nav className="navbar navbar-static-top">
          {/* Sidebar toggle button*/}
          <a
            className="sidebar-toggle"
            data-toggle="offcanvas"
            role="button"
            onClick={() => this.props.sidebarToggle()}
          >
            <span className="sr-only">Toggle navigation</span>
          </a>

          {/* Navbar Right Menu */}
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              {this.props.children}
            </ul>
          </div>

        </nav>
      </header>
    );
  }
}

Navbar.propTypes = {
  children: React.PropTypes.node,
  logo: React.PropTypes.element,
  sidebarToggle: React.PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  logo: <NavbarLogo />,
};

export default Navbar;
