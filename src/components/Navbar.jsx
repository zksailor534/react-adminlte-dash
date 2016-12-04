import React from 'react';
import NavbarLogo from './NavbarLogo';

const Navbar = ({ children, logo, sidebarToggle }) => (
  <header className="main-header">

    {/* Logo */}
    {logo}

    {/* Header Navbar: style can be found in header.less */}
    <nav className="navbar navbar-static-top">
      {/* Sidebar toggle button*/}
      <button
        className="sidebar-toggle"
        style={{ border: 'none', outline: 'none' }}
        onClick={() => sidebarToggle()}
      >
        <span className="sr-only">Toggle navigation</span>
      </button>

      {/* Navbar Right Menu */}
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          {children}
        </ul>
      </div>

    </nav>
  </header>
);

Navbar.propTypes = {
  children: React.PropTypes.node,
  logo: React.PropTypes.element,
  sidebarToggle: React.PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  logo: <NavbarLogo />,
};

export default Navbar;
