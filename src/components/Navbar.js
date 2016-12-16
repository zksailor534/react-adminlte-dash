/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';

import 'font-awesome/css/font-awesome.min.css';

import NavbarButton from './NavbarButton';

import {
  transitionSpeed,
  transitionFn,
  screenSmMin,
  sidebarWidth,
  sidebarMiniWidth,
  navbarHeight,
  screenHeaderCollapse,
} from '../styles/variables';

const StyledNavbar = styled.nav`
  /* clearfix */
  &:before, &:after {
    display: table;
    content: " ";
    box-sizing: border-box;
  }
  &:after {
    clear: both;
  }

  /* transitions */
  -webkit-transition: margin-left ${transitionSpeed} ${transitionFn};
  -o-transition: margin-left ${transitionSpeed} ${transitionFn};
  transition: margin-left ${transitionSpeed} ${transitionFn};

  color: ${props => props.theme.fontColor || '#333'};
  display: block;
  width: 100%
  font-weight: 400;
  position: relative;
  min-height: ${navbarHeight};
  z-index: 1000;
  margin-bottom: 0;
  margin-left: ${props => (props.topNav ? '0' : sidebarWidth)};
  border: none;
  border-radius: 0;
  background-color: ${props => props.theme.backgroundColor || '#fff'};

  /* media queries */
  @media (max-width: ${screenHeaderCollapse}) {
    width: 100%;
    float: none;
    margin: 0;
  }
  @media (min-width: ${screenSmMin}) {
    margin-left: ${props => ((!props.topNav && props.sidebarMini && props.collapse) ?
      sidebarMiniWidth :
      sidebarWidth)};
  }
`;

const Navbar = props => (
  <StyledNavbar {...props}>
    <NavbarButton {...props} className="fa fa-bars" onClick={props.toggle} />
    {props.children}
  </StyledNavbar>
);

Navbar.propTypes = {
  children: React.PropTypes.node,
  toggle: React.PropTypes.func.isRequired,
};

export default Navbar;
