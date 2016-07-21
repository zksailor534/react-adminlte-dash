import React from 'react';
import classNames from 'classnames';

// Bootstrap variable for re-render to small screen mode
const screenSmMin = 768;

class AdminLTE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenSm: window.innerWidth < screenSmMin,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    this.setState({
      screenSm: (typeof window !== 'undefined') ? window.innerWidth < screenSmMin : undefined,
    });
  }

  render() {
    let skinClass = null;
    let layoutClass = null;

    // Skin color class
    switch (this.props.skin) {
      case 'blue':
        skinClass = 'skin-blue';
        break;
      case 'black':
        skinClass = 'skin-black';
        break;
      case 'purple':
        skinClass = 'skin-purple';
        break;
      case 'green':
        skinClass = 'skin-green';
        break;
      case 'red':
        skinClass = 'skin-red';
        break;
      case 'yellow':
        skinClass = 'skin-yellow';
        break;
      case 'blue-light':
        skinClass = 'skin-blue-light';
        break;
      case 'black-light':
        skinClass = 'skin-black-light';
        break;
      case 'purple-light':
        skinClass = 'skin-purple-light';
        break;
      case 'green-light':
        skinClass = 'skin-green-light';
        break;
      case 'red-light':
        skinClass = 'skin-red-light';
        break;
      case 'yellow-light':
        skinClass = 'skin-yellow-light';
        break;
      default:
        skinClass = 'skin-blue';
    }

    // Layout class
    switch (this.props.layout) {
      case 'fixed':
        layoutClass = 'fixed';
        break;
      case 'boxed':
        layoutClass = 'layout-boxed';
        break;
      case 'nav-on-top':
        layoutClass = 'layout-top-nav';
        break;
      default:
        layoutClass = '';
    }

    return (
      <div
        className={classNames('hold-transition',
          skinClass,
          { 'sidebar-mini': this.props.sidebarMini },
          { 'sidebar-collapse': !this.state.screenSm && this.props.sidebarCollapsed },
          { 'sidebar-open': this.state.screenSm && !this.props.sidebarCollapsed },
          layoutClass)}
        id="adminlte_core"
      >
        <div className="wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

AdminLTE.propTypes = {
  children: React.PropTypes.node,
  skin: React.PropTypes.string,
  sidebarMini: React.PropTypes.bool,
  layout: React.PropTypes.string,
  sidebarCollapsed: React.PropTypes.bool,
};

AdminLTE.defaultProps = {
  skin: 'blue',
  sidebarMini: false,
  sidebarCollapsed: false,
};

export default AdminLTE;
