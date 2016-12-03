import React from 'react';
import classNames from 'classnames';
import { Collapse } from 'react-bootstrap';

// Left Icon Options
// plain: fa-circle-o
// important: fa-circle-o text-red
// warning: fa-circle-o text-yellow
// information: fa-circle-o text-aqua
// none: ---
// any other call fontawesome class

// labelType Options (right icon)
// important: red
// warning: yellow
// information: aqua
// green: green
// none: ---

class SidebarMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active,
    };
    this._toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    let leftIcon = null;
    let rightIcon = null;
    let subMenu = null;


    switch (this.props.mainIcon) {
      case 'plain':
        leftIcon = <i className="fa fa-circle-o" />;
        break;
      case 'important':
        leftIcon = <i className="fa fa-circle-o text-red" />;
        break;
      case 'warning':
        leftIcon = <i className="fa fa-circle-o text-yellow" />;
        break;
      case 'information':
        leftIcon = <i className="fa fa-circle-o text-aqua" />;
        break;
      case 'none':
        break;
      default:
        leftIcon = <i className={classNames('fa', this.props.mainIcon)} />;
    }

    // Deal with right icon
    switch (this.props.labelType) {
      case 'important':
        rightIcon = <small className="label pull-right bg-red">{this.props.labelText}</small>;
        break;
      case 'warning':
        rightIcon = <small className="label pull-right bg-yellow">{this.props.labelText}</small>;
        break;
      case 'information':
        rightIcon = (<small className="label label-primary pull-right">
          {this.props.labelText}
        </small>);
        break;
      case 'green':
        rightIcon = <small className="label pull-right bg-green">{this.props.labelText}</small>;
        break;
      default:
        if (this.props.children) {
          rightIcon = <i className="fa fa-angle-left pull-right" />;
        }
    }

    // Deal with submenu
    if (this.props.children) {
      subMenu = (
        <Collapse in={this.state.active} >
          <ul className="treeview-menu">
            {this.props.children}
          </ul>
        </Collapse>
      );
    }

    return (
      <li
        className={classNames(
          { treeview: this.props.children },
          { active: this.state.active })}
      >
        <a href={this.props.link} onClick={this._toggleMenu}>
          {leftIcon}
          <span>{this.props.title}</span>
          {rightIcon}
        </a>
        {subMenu}
      </li>
    );
  }
}

SidebarMenuItem.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string,
  link: React.PropTypes.string,
  mainIcon: React.PropTypes.string,
  active: React.PropTypes.bool,
  labelType: React.PropTypes.string,
  labelText: React.PropTypes.string,
};

SidebarMenuItem.defaultProps = {
  title: 'Tree-View',
  link: '#',
  mainIcon: 'plain',
  active: false,
  labelText: '',
};

export default SidebarMenuItem;
