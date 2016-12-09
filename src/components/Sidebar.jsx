import React from 'react';

import SidebarMenu from './SidebarMenu';
import SidebarSearch from './SidebarSearch';
import SidebarUser from './SidebarUser';

const Sidebar = ({ children }) => (
  <aside className="main-sidebar">
    {/* sidebar: style can be found in sidebar.less */}
    <section className="sidebar">
      {children}
    </section>
    {/* /.sidebar */}
  </aside>
);

Sidebar.propTypes = {
  children: React.PropTypes.node,
};

Sidebar.Menu = SidebarMenu;
Sidebar.Search = SidebarSearch;
Sidebar.User = SidebarUser;

export default Sidebar;
