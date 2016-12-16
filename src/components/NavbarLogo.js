/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';

import {
  transitionSpeed,
  transitionFn,
  screenSmMin,
  sidebarWidth,
  sidebarMiniWidth,
  navbarHeight,
  screenHeaderCollapse,
} from '../styles/variables';

const StyledLogo = styled.a`
  /* transitions */
  -webkit-transition: width ${transitionSpeed} ${transitionFn};
  -o-transition: width ${transitionSpeed} ${transitionFn};
  transition: width ${transitionSpeed} ${transitionFn};

  /* theme */
  background-color: ${props => props.theme.logoBgColor || '#fff'};
  color: ${props => props.theme.logoColor || '#000'};
  border-bottom: ${props => props.theme.logoBorderBottom || 'none'};
  &:hover {
    background-color: ${props => props.theme.logoHover || '#f6f6f6'};
  }

  display: block;
  text-decoration: none;
  float: left;
  height: ${navbarHeight};
  font-size: 20px;
  line-height: ${navbarHeight};
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 0 15px;
  font-weight: 300;
  overflow: hidden;

  /* media queries */
  @media (max-width: ${screenHeaderCollapse}) {
    width: 100%;
    float: none;
  }
  @media (min-width: ${screenSmMin}) {
    width: ${props => ((props.sidebarMini && props.collapse) ? sidebarMiniWidth : sidebarWidth)};
    padding: ${props => ((props.sidebarMini && props.collapse) && '0')};
  }
`;

const LargeLogo = styled.span`
  display: block;
  @media (min-width: ${screenSmMin}) {
    display: ${props => ((props.sidebarMini && props.collapse) ? 'none' : 'block')}
  }
`;

const SmallLogo = styled.span`
  display: none;
  @media (min-width: ${screenSmMin}) {
    display: ${props => ((props.sidebarMini && props.collapse) ? 'block' : 'none')}
  }
`;

const NavbarLogo = props => (
  <StyledLogo {...props} >
    <LargeLogo {...props}>{props.logoLg}</LargeLogo>
    <SmallLogo {...props}>{props.logoSm}</SmallLogo>
  </StyledLogo>
);

NavbarLogo.propTypes = {
  logoLg: React.PropTypes.element,
  logoSm: React.PropTypes.element,
};

export default NavbarLogo;
