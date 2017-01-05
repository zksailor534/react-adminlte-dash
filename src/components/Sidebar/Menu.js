/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const StyledHeader = styled.li`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: ${props => (props.collapse ? 'none !important' : 'list-item')};
  text-align: -webkit-match-parent;
  position: relative;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  padding: 10px 25px 10px 15px;
  font-size: 12px;
  background-attachment: scroll;
  background-clip: initial;
  background-image: none;
  background-origin: initial;
  background-position: initial;
  background-repeat: initial;
  background-size: initial;
  text-overflow: clip;

  /* collapse transform */
  ${props => props.collapse && '-webkit-transform: translateZ(0);'}

  /* theme */
  color: ${props => props.theme.sidebarHeaderColor || '#fff'}
  background-color: ${props => props.theme.sidebarHeaderBg || '#fff'}
`;

const StyledMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    overflow: visible;
  }
`;

const renderChildren = (children, sidebarCollapse) => (
  React.Children.map(children, child =>
    React.cloneElement(child, {
      collapse: sidebarCollapse,
    }),
  )
);

const Menu = ({ children, header, collapse }) => (
  <StyledMenu collapse={collapse} >
    <StyledHeader collapse={collapse} >{header}</StyledHeader>
    {renderChildren(children, collapse)}
  </StyledMenu>
);

Menu.propTypes = {
  children: React.PropTypes.node,
  header: React.PropTypes.string,
  collapse: React.PropTypes.bool,
};

Menu.Item = MenuItem;

export default Menu;
