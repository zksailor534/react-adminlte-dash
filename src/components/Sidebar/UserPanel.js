/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';

import {
  fontFamilyBase,
  fontSizeBase,
  fontWeightBase,
} from '../../styles/variables';

const StyledIcon = styled.i`
  margin-right: 3px;
  color: ${props => (props.online ? '#3c763d' : '#a94442')};
`;

const StyledP = styled.p`
  margin: 0 0 9px 0;
  font-weight: 600;
`;

const StyledLink = styled.a`
  text-decoration: none !important;
  padding-right: 5px;
  margin-top: 3px;
  font-size: 11px;
  background-color: transparent;
  color: ${props => props.theme.userPanelColor || '#fff'} !important;

  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently not supported by any browser */
`;

const StyledInfo = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: ${props => props.theme.userPanelColor || '#fff'};
  display: ${props => (props.collapse ? 'none !important' : 'block')};
  float: left !important;
  padding: 5px 5px 5px 15px;
  line-height: 1;
  position: absolute;
  left: 55px;

  /* collapse transform */
  ${props => props.collapse && '-webkit-transform: translateZ(0);'}
`;

const StyledImage = styled.img`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  float: left!important;
  width: 100%;
  max-width: 45px;
  vertical-align: middle;
  height: auto;
  border-radius: 50%;
  border: 0;

  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently not supported by any browser */
`;

const StyledPanel = styled.div`
  /* clearfix */
  &:before, &:after {
    display: table;
    content: " ";
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  &:after {
    clear: both;
  }

  /* shared */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${fontFamilyBase};
  font-weight: ${fontWeightBase};
  font-size: ${fontSizeBase};
  box-sizing: border-box;

  position: relative;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  display: block;
  white-space: nowrap;
`;

const UserPanel = ({ name, image, href = null, online, collapse }) => (
  <StyledPanel collapse={collapse} >
    <StyledImage src={image} />
    <StyledInfo collapse={collapse} >
      <StyledP>{name}</StyledP>
      <StyledLink href={href}>
        <StyledIcon className="fa fa-circle" online={online} />
        {online ? ' Online' : ' Offline'}
      </StyledLink>
    </StyledInfo>
  </StyledPanel>
);

UserPanel.propTypes = {
  name: React.PropTypes.string,
  image: React.PropTypes.string,
  href: React.PropTypes.string,
  online: React.PropTypes.bool,
  collapse: React.PropTypes.bool,
};

export default UserPanel;
