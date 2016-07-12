import React from 'react';

class NavbarLogo extends React.Component {
  render() {
    return (
      <a
        className="logo"
        href={this.props.link}
      >
        {/* mini logo for sidebar mini 50x50 pixels */}
        <div className="logo-mini">{this.props.logoSm}</div>
        {/* logo for regular state and mobile devices */}
        <div className="logo-lg">{this.props.logoLg}</div>
      </a>
    );
  }
}

NavbarLogo.propTypes = {
  link: React.PropTypes.string,
  logoLg: React.PropTypes.element,
  logoSm: React.PropTypes.element,
};

NavbarLogo.defaultProps = {
  link: '#',
  logoLg: <span><b>Admin</b>LTE</span>,
  logoSm: <span><b>A</b>LT</span>,
};

export default NavbarLogo;
