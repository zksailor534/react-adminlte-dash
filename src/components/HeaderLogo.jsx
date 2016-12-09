import React from 'react';

const HeaderLogo = ({ link, logoLg, logoSm }) => (
  <a
    className="logo"
    href={link}
  >
    {/* mini logo for sidebar mini 50x50 pixels */}
    <div className="logo-mini">{logoSm}</div>
    {/* logo for regular state and mobile devices */}
    <div className="logo-lg">{logoLg}</div>
  </a>
);

HeaderLogo.propTypes = {
  link: React.PropTypes.string,
  logoLg: React.PropTypes.element,
  logoSm: React.PropTypes.element,
};

HeaderLogo.defaultProps = {
  link: '/',
  logoLg: <span><b>Admin</b>LTE</span>,
  logoSm: <span><b>A</b>LT</span>,
};

export default HeaderLogo;
