import React from 'react';

import SidebarMenuItem from './SidebarMenuItem';

const SidebarMenu = ({ children, title = 'MENU' }) => (
  <ul className="sidebar-menu">
    <li className="header">{title}</li>
    {children}
  </ul>
);

SidebarMenu.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string,
};

SidebarMenu.Item = SidebarMenuItem;

export default SidebarMenu;
