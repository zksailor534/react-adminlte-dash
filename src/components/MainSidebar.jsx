import React from 'react';

const MainSidebar = ({ children }) => (
  <aside className="main-sidebar">
    {/* sidebar: style can be found in sidebar.less */}
    <section className="sidebar">
      {children}
    </section>
    {/* /.sidebar */}
  </aside>
);

MainSidebar.propTypes = {
  children: React.PropTypes.node,
};

export default MainSidebar;
