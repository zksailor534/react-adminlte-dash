/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';

import {
  fontFamilyBase,
  fontSizeBase,
  lineHeightBase,
  fontWeightBase,
  navbarHeight,
  navbarPaddingHorizontal,
  navbarPaddingVertical,
} from '../../styles/variables';

const imageSize = `${Math.floor(parseInt(navbarHeight, 10) / 2)}px`;
const imageMarginTop = `-${Math.ceil(
  ((parseInt(imageSize, 10) +
  parseInt(navbarPaddingHorizontal, 10) +
  parseInt(navbarPaddingVertical, 10)) -
  parseInt(navbarHeight, 10)) / 2)}px`;
const imageMarginBottom = `-${Math.floor(
  ((parseInt(imageSize, 10) +
  parseInt(navbarPaddingHorizontal, 10) +
  parseInt(navbarPaddingVertical, 10)) -
  parseInt(navbarHeight, 10)) / 2)}px`;

const StyledImage = styled.img`
  box-sizing: border-box;
  float: left;
  border: 0;
  vertical-align: middle;
  width: ${imageSize};
  height: ${imageSize};
  border-radius: 50%;
  margin-right: 10px;
  margin-top: ${imageMarginTop};
  margin-bottom: ${imageMarginBottom};
  max-width: none;

  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently not supported by any browser */
`;

const StyledLink = styled.a`
  color: ${props => props.theme.navbarFontColor || '#fff'};
  text-decoration: none;
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently not supported by any browser */
`;

const StyledItem = styled.li`
  /* shared */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${fontFamilyBase};
  font-weight: ${fontWeightBase};
  font-size: ${fontSizeBase};
  line-height: ${lineHeightBase};
  box-sizing: border-box;

  float: left;
  background-color: transparent;
  background-image: none;
  border: none;
  outline: none;
  padding: ${navbarPaddingVertical} ${navbarPaddingHorizontal};
  position: relative;
  text-decoration: none;
  cursor: pointer;
  &:focus, &:active { background: transparent; }

  /* theme */
  color: ${props => props.theme.navbarFontColor || '#fff'};
  border-left: ${props => props.theme.navbarItemBorder || 'none'};
  &:hover {
    color: ${props => props.theme.navbarHoverColor || '#fff'};
    background-color: ${props => props.theme.logoBgColor || 'transparent'};
  }
`;

const NavItem = ({ children, onClick, href, image }) => (
  <StyledItem>
    {onClick &&
      <StyledLink onClick={onClick} href="#">
        {image && <StyledImage src={image} />}
        {children}
      </StyledLink>
    }
    {(!onClick && href) &&
      <StyledLink href={href}>
        {image && <StyledImage src={image} />}
        {children}
      </StyledLink>
    }
  </StyledItem>
);

NavItem.propTypes = {
  children: React.PropTypes.node,
  onClick: React.PropTypes.func,
  href: React.PropTypes.string,
  image: React.PropTypes.string,
};

export default NavItem;
