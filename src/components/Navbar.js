import styled from 'styled-components';
import {
  transitionSpeed,
  transitionFn,
  sidebarWidth,
  navbarHeight,
  screenHeaderCollapse,
} from '../styles/variables';

const Navbar = styled.nav`
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

  color: #333;
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
`;

export default Navbar;
