import React from 'react';

// Navbar Dropdown Type Options
// messages: fa-envelope-o
// notifications: fa-bell-o
// tasks: fa-flag-o
// user: user image
// control: fa-gears-o

class NavbarDropdown extends React.Component {
  render() {
    let menuClass;
    let menuIcon = null;
    let userImage = <i className="fa fa-user fa-2x"></i>;

    // Use user image if available
    if (this.props.userImage) {
      userImage = <img src={this.props.userImage} className="img-circle" alt="User" />;
    }


    switch (this.props.type) {
      case 'messages':
        menuClass = 'dropdown messages-menu';
        menuIcon = <i className="fa fa-envelope-o"></i>;
        break;
      case 'notifications':
        menuClass = 'dropdown notifications-menu';
        menuIcon = <i className="fa fa-bell-o"></i>;
        break;
      case 'tasks':
        menuClass = 'dropdown tasks-menu';
        menuIcon = <i className="fa fa-flag-o"></i>;
        break;
      case 'user':
        menuClass = 'dropdown user user-menu';
        menuIcon = userImage;
        break;
      case 'control':
        menuClass = '';
        menuIcon = <i className="fa fa-gears-o"></i>;
        break;
      default:
        menuClass = '';
    }

    return (
      <li className={menuClass}>
        <a href={this.props.link} className="dropdown-toggle" data-toggle="dropdown">
          {menuIcon}
          <span className="label label-success">4</span>
        </a>
        {this.props.children}
      </li>
    );
  }
}

NavbarDropdown.propTypes = {
  children: React.PropTypes.node,
  link: React.PropTypes.string,
  type: React.PropTypes.string,
  userImage: React.PropTypes.string,
};

NavbarDropdown.defaultProps = {
  link: '#',
  type: 'control',
};

export default NavbarDropdown;
