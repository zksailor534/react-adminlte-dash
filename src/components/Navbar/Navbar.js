/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';

import ToggleButton from './ToggleButton';

import {
  transitionSpeed,
  transitionFn,
  screenSmMin,
  sidebarWidth,
  sidebarMiniWidth,
  navbarHeight,
  screenHeaderCollapse,
} from '../../styles/variables';

const StyledNavbarMenuList = styled.ul`
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 40px;
  box-sizing: border-box;
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;

  /* media queries */
  @media (max-width: ${screenHeaderCollapse}) {
    float: left;
  }
  @media (min-width: ${screenSmMin}) {
    float: right;
  }
`;

const StyledNavbarMenu = styled.div`
  box-sizing: border-box;
  display: block;
  float: right;
`;

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

  color: ${props => props.theme.navbarFontColor || '#333'};
  display: block;
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
  <StyledNavbar
    topNav={props.topNav}
    sidebarMini={props.sidebarMini}
    collapse={props.collapse}
  >
    <ToggleButton name="sidebar-toggle" className="fa fa-bars" onClick={props.toggle} />

    <StyledNavbarMenu>
      <StyledNavbarMenuList name="navbar-menu-wrapper">
        {props.children}
      </StyledNavbarMenuList>
    </StyledNavbarMenu>
  </StyledNavbar>
);

Navbar.propTypes = {
  children: React.PropTypes.node,
  toggle: React.PropTypes.func.isRequired,
  topNav: React.PropTypes.bool,
  sidebarMini: React.PropTypes.bool,
  collapse: React.PropTypes.bool,
};

export default Navbar;
