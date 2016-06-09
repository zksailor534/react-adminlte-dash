import React from 'react';

class NavbarLogo extends React.Component {
  render() {
    return (
      <a href={this.props.link} className="logo">
        {/* mini logo for sidebar mini 50x50 pixels */}
        <span className="logo-mini">{this.props.textSm}</span>
        {/* logo for regular state and mobile devices */}
        <span className="logo-lg">{this.props.textLg}</span>
      </a>
    );
  }
}

NavbarLogo.propTypes = {
  link: React.PropTypes.string,
  textLg: React.PropTypes.element,
  textSm: React.PropTypes.element,
};

NavbarLogo.defaultProps = {
  link: '#',
  textLg: <div><b>Admin</b>LTE</div>,
  textSm: <div><b>A</b>LT</div>,
};

export default NavbarLogo;
