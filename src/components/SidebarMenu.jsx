import React from 'react';

const SidebarMenu = ({ children, title }) => (
  <ul className="sidebar-menu">
    <li className="header">{title}</li>
    {children}
  </ul>
);

SidebarMenu.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string,
};

SidebarMenu.defaultProps = {
  title: 'MENU',
};

export default SidebarMenu;
