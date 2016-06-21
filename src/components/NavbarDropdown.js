import React from 'react';
import classNames from 'classnames';

// Navbar Dropdown Type Options
// messages: fa-envelope-o
// notifications: fa-bell-o
// tasks: fa-flag-o

class NavbarDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    let menuClass;
    let menuIcon = null;

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
      default:
        menuClass = '';
    }

    return (
      <li className={classNames(menuClass,
        { open: this.state.open })}
      >
        <a
          href={this.props.link}
          className="dropdown-toggle"
          data-toggle="dropdown"
          onClick={this.toggleMenu.bind(this)}
        >
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
  type: 'messages',
};

export default NavbarDropdown;
