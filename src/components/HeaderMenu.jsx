import React from 'react';
import classNames from 'classnames';

// Header Dropdown Type Options
// messages: fa-envelope-o
// notifications: fa-bell-o
// tasks: fa-flag-o

// Nav Dropdown label color Options
// red: label-danger
// yellow: label-warning
// green: label-success

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this._toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    let menuClass;
    let menuIcon = null;
    let label = null;

    // Menu type
    switch (this.props.type) {
      case 'messages':
        menuClass = 'dropdown messages-menu';
        menuIcon = <i className="fa fa-envelope-o" />;
        break;
      case 'notifications':
        menuClass = 'dropdown notifications-menu';
        menuIcon = <i className="fa fa-bell-o" />;
        break;
      case 'tasks':
        menuClass = 'dropdown tasks-menu';
        menuIcon = <i className="fa fa-flag-o" />;
        break;
      default:
        menuClass = '';
    }

    // Label
    if (this.props.labelText) {
      switch (this.props.labelColor) {
        case 'red':
          label = <span className="label label-danger">{this.props.labelText}</span>;
          break;
        case 'yellow':
          label = <span className="label label-warning">{this.props.labelText}</span>;
          break;
        case 'green':
          label = <span className="label label-success">{this.props.labelText}</span>;
          break;
        default:
          label = <span className="label">{this.props.labelText}</span>;
          break;
      }
    }

    return (
      <li
        className={classNames(menuClass,
        { open: this.state.open })}
      >
        <a
          className="dropdown-toggle"
          data-toggle="dropdown"
          href={this.props.link}
          onClick={this._toggleMenu}
        >
          {menuIcon}
          {label}
        </a>
        <ul className="dropdown-menu">
          {this.props.children}
        </ul>
      </li>
    );
  }
}

HeaderMenu.propTypes = {
  children: React.PropTypes.node,
  link: React.PropTypes.string,
  type: React.PropTypes.string,
  labelColor: React.PropTypes.string,
  labelText: React.PropTypes.string,
};

HeaderMenu.defaultProps = {
  link: '#',
  type: 'messages',
};

export default HeaderMenu;
