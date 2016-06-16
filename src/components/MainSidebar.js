import React from 'react';

class MainSidebar extends React.Component {
  render() {
    return (
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {this.props.children}
        </section>
        {/* /.sidebar */}
      </aside>
    );
  }
}

MainSidebar.propTypes = {
  children: React.PropTypes.node,
};

MainSidebar.defaultProps = {
};

export default MainSidebar;
