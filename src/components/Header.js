/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar/Navbar';
import NavbarLogo from './Navbar/NavbarLogo';

const StyledHeader = styled.header`
  /* clearfix */
  &:before, &:after {
    display: table;
    content: " ";
    box-sizing: border-box;
  }
  &:after {
    clear: both;
  }

  position: ${props => (props.fixed ? 'fixed' : 'relative')};
  width: ${props => (props.boxed ? '1024px' : '100%')};
  max-height: 100px;
  z-index: 1030;
`;

const Header = props => (
  <StyledHeader fixed={props.fixed} >
    <NavbarLogo
      collapse={props.sidebarCollapse}
      sidebarMini={props.sidebarMini}
      href="#"
      logoLg={<span><b>Admin</b>LTE</span>}
      logoSm={<span><b>A</b>LT</span>}
    />
    <Navbar
      toggle={props.sidebarToggle}
      collapse={props.sidebarCollapse}
      sidebarMini={props.sidebarMini}
    >
      {props.children}
    </Navbar>
  </StyledHeader>
);

Header.propTypes = {
  children: React.PropTypes.node,
  fixed: React.PropTypes.bool,
  sidebarMini: React.PropTypes.bool,
  sidebarCollapse: React.PropTypes.bool,
  sidebarToggle: React.PropTypes.func.isRequired,
};

Header.defaultProps = {
  fixed: false,
  sidebarMini: false,
  sidebarCollapse: false,
};

export default Header;
