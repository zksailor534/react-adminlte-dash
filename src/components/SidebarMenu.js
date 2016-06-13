import React from 'react';

class SidebarMenu extends React.Component {
  render() {
    return (
      <ul className="sidebar-menu">
        <li className="header">{this.props.title}</li>
        {this.props.children}
      </ul>
    );
  }
}

SidebarMenu.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string,
};

SidebarMenu.defaultProps = {
  title: 'MENU',
};

export default SidebarMenu;
