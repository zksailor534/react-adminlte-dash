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
  screenXsMin,
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

const StyledSpan = styled.span`
  @media (max-width: ${screenXsMin}) {
    display: none;
  }
`;

const StyledIcon = styled.i`
  color: inherit;
  box-sizing: border-box;
  float: left;
  border: 0;
  vertical-align: top;
  border-radius: 50%;
  margin-right: 10px;
  max-width: none;
  font-size: 28px;
  margin-top: -4px;

  &:hover {
    color: inherit;
  }

  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently not supported by any browser */
`;

const StyledImage = styled.img`
  color: inherit;
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

  &:hover {
    color: inherit;
  }

  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently not supported by any browser */
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently not supported by any browser */

  color: inherit;
  display: block;
  padding: ${navbarPaddingVertical} ${navbarPaddingHorizontal};
  position: relative;
  background-color: transparent;

  &:hover {
    color: inherit;
    text-decoration: none !important;
  }

  @media (max-width: ${screenXsMin}) {
    padding: ${navbarPaddingVertical} 5px;
  }
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
  display: block;
  background-color: transparent;
  background-image: none;
  border: none;
  outline: none;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  &:focus, &:active {
    background: transparent;
    outline: none;
  }

  /* theme */
  color: ${props => props.theme.navbarFontColor || '#fff'};
  border-left: ${props => props.theme.navbarItemBorder || 'none'};
  &:hover {
    color: ${props => props.theme.navbarHoverColor || '#fff'};
    background-color: ${props => props.theme.logoBgColor || 'transparent'};
  }
`;

const displayImage = (src, icon) => {
  if (src) {
    return <StyledImage src={src} />;
  } else if (icon) {
    return <StyledIcon className={icon} />;
  }
  return null;
};

const NavItem = ({ title, onClick, href, image, iconClass }) => (
  <StyledItem>
    {onClick &&
      <StyledLink onClick={onClick} href={null}>
        {displayImage(image, iconClass)}
        <StyledSpan>{title}</StyledSpan>
      </StyledLink>
    }
    {(!onClick && href) &&
      <StyledLink href={href}>
        {displayImage(image, iconClass)}
        <StyledSpan>{title}</StyledSpan>
      </StyledLink>
    }
  </StyledItem>
);

NavItem.propTypes = {
  title: React.PropTypes.string,
  onClick: React.PropTypes.func,
  href: React.PropTypes.string,
  image: React.PropTypes.string,
  iconClass: React.PropTypes.string,
};

export default NavItem;
