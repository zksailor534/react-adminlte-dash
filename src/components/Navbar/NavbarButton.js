import styled from 'styled-components';

import {
  fontSizeBase,
  fontWeightBase,
  navbarPaddingHorizontal,
  navbarPaddingVertical,
} from '../../styles/variables';

const NavbarButton = styled.button`
  /* shared */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: ${fontWeightBase};
  overflow-x: hidden;
  overflow-y: auto;
  font-size: ${fontSizeBase};
  box-sizing: border-box;

  float: left;
  background-color: transparent;
  background-image: none;
  border: none;
  outline: none;
  padding: ${(parseInt(navbarPaddingVertical, 10) + 3)}px ${navbarPaddingHorizontal};
  text-decoration: none;
  color: ${props => props.theme.navbarFontColor || '#fff'};
  &:focus,
  &:active {
    background: transparent;
  }
  &:hover {
    color: ${props => props.theme.navbarHoverColor || '#fff'};
    background-color: ${props => props.theme.logoBgColor || '#fff'};
  }
`;

export default NavbarButton;
