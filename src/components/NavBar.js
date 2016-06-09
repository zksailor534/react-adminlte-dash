import React from 'react';
import radium from 'radium';
import { FaBars } from 'react-icons/lib/fa';
import base from '../styles/base';
import skin from '../styles/skins';
import responsiveStyles from '../styles/responsive';
// import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends React.Component {
  render() {
    return (
      <nav
        style={[
          base.mainHeader,
          base.navbar,
          skin(this.props.skin).navbar,
          responsiveStyles('NavBar', this.props.mobileView, this.props.sidebarMini),
          this.props.style,
        ]}
        className="navbar-static-top"
      >
        <FaBars
          style={{
            float: 'left',
            backgroundColor: 'transparent',
            backgroundImage: 'none',
            margin: '18px',
          }}
        />
      </nav>
    );
  }
}

NavBar.propTypes = {
  mobileView: React.PropTypes.bool,
  sidebarMini: React.PropTypes.bool,
  skin: React.PropTypes.string,
  style: React.PropTypes.object,
};

NavBar.defaultProps = {
  mobileView: false,
  sidebarMini: true,
  skin: 'blue',
  style: {},
};

export default radium(NavBar);
