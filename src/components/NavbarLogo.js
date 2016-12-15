import styled from 'styled-components';
import {
  transitionSpeed,
  transitionFn,
  sidebarWidth,
  navbarHeight,
  screenHeaderCollapse,
} from '../styles/variables';

const NavbarLogo = styled.nav`
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
  float: left;
  height: ${navbarHeight};
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  width: ${sidebarWidth};
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 0 15px;
  font-weight: 300;
  overflow: hidden;

  /* media queries */
  @media (max-width: ${screenHeaderCollapse}) {
    width: 100%;
    float: none;
    display: ${props => (props.collapse ? 'block' : 'none')};
  }
`;

export default NavbarLogo;
