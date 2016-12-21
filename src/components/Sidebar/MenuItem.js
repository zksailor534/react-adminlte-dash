/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';

import {
  fontFamilyBase,
  fontSizeBase,
  lineHeightBase,
  fontWeightBase,
} from '../../styles/variables';

const StyledTitle = styled.span`
  cursor: auto;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently not supported by any browser */
`;

const StyledIcon = styled.i`
  width: 20px;
`;

const StyledLink = styled.a`
  cursor: auto;
  text-decoration: none;
  display: block;
  padding: 12px 5px 12px 15px;
  position: relative;

  &:active,
  &:focus {
    outline: none;
    text-decoration: none;
  }

  &:hover { text-decoration: none; }

  /* theme */
  color: ${props => props.theme.sidebarLinkColor || '#b8c7ce'};
  border-left: ${props => props.theme.sidebarLinkBorderLeft || 'none'};
  ${props => (props.theme.sidebarLinkTransition && `
    -webkit-transition: ${props.theme.sidebarLinkTransition};
    -moz-transition: ${props.theme.sidebarLinkTransition};
    -o-transition: ${props.theme.sidebarLinkTransition};
    transition: ${props.theme.sidebarLinkTransition};
  `)}
  ${props => (props.theme.sidebarLinkFontWeight && `
    font-weight: ${props.theme.sidebarLinkFontWeight};
  `)}

  ${props => props.active && `
    color: ${props.theme.sidebarLinkActiveColor || '#fff'};
    background: ${props.theme.sidebarLinkActiveBg || '#1e282c'};
    border-left-color: ${props.theme.sidebarLinkActiveBorderLeftColor || '#3c8dbc'};
    font-weight: ${props.theme.sidebarLinkActiveFontWeight || 'normal'};
  `}
`;

const StyledMenuItem = styled.li`
  /* shared */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${fontFamilyBase};
  font-weight: ${fontWeightBase};
  font-size: ${fontSizeBase};
  line-height: ${lineHeightBase};
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  list-style: none;
  position: relative;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  display: list-item;
  text-align: -webkit-match-parent;
`;

const MenuItem = ({
  children,
  active,
  icon = 'fa-th',
  title = 'Title',
}) => (
  <StyledMenuItem className="menu-item" >
    <StyledLink active={active} >
      <StyledIcon className={`fa ${icon}`} />
      <StyledTitle>{title}</StyledTitle>
    </StyledLink>
    {children}
  </StyledMenuItem>
);

MenuItem.propTypes = {
  children: React.PropTypes.node,
  active: React.PropTypes.bool,
  icon: React.PropTypes.string,
  title: React.PropTypes.string,
};

export default MenuItem;
