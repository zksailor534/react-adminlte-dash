import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';

const Header = ({ children, logo, sidebarToggle }) => (
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

Header.propTypes = {
  children: React.PropTypes.node,
  logo: React.PropTypes.element,
  sidebarToggle: React.PropTypes.func.isRequired,
};

Header.defaultProps = {
  logo: <HeaderLogo />,
};

Header.Logo = HeaderLogo;
Header.Menu = HeaderMenu;

export default Header;
