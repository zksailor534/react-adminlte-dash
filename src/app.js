import React from 'react';
import ReactDOM from 'react-dom';
import { NavbarLogo,
  Navbar } from '.';

// Create target element
const target = document.createElement('div');
target.id = 'render-target';
document.body.appendChild(target);

class Demo extends React.Component {
  /* eslint no-alert: 0 */
  constructor(props) {
    super(props);
    this.state = {
      sidebarCollapse: false,
    };
  }

  toggleSidebar() {
    this.setState({ sidebarCollapse: !this.state.sidebarCollapse });
  }

  render() {
    return (
      <header>
        <NavbarLogo
          sidebarMini={this.props.sidebarMini}
          sidebarCollapse={this.state.sidebarCollapse}
          skin={this.props.skin}
        />
        <Navbar
          sidebarMini={this.props.sidebarMini}
          sidebarCollapse={this.state.sidebarCollapse}
          skin={this.props.skin}
          sidebarToggle={this.toggleSidebar.bind(this)}
        />
      </header>
    );
  }
}

Demo.propTypes = {
  sidebarMini: React.PropTypes.bool,
  skin: React.PropTypes.string,
};

Demo.defaultProps = {
  sidebarMini: true,
  skin: 'blue',
};

// Render React components in element
ReactDOM.render(
  <Demo />,
  document.getElementById('render-target')
);
