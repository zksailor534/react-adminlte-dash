import styled from 'styled-components';

import {
  navbarPaddingHorizontal,
  navbarPaddingVertical,
} from '../styles/variables';

const NavbarButton = styled.button`
  float: left;
  background-color: transparent;
  background-image: none;
  border: none;
  outline: none;
  padding: ${(parseInt(navbarPaddingVertical, 10) + 3)}px ${navbarPaddingHorizontal};
  text-decoration: none;
  color: ${props => props.theme.fontColor || '#fff'};
  &:hover {
    color: #fff;
    background-color: ${props => props.theme.logoBgColor || '#fff'};
  }
  &:focus,
  &:active {
    background: transparent;
  }
`;

export default NavbarButton;
