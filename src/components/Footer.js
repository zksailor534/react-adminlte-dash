import styled from 'styled-components';

import {
  gray,
  white,
  screenSmMin,
  sidebarWidth,
  sidebarMiniWidth,
  transitionSpeed,
  transitionFn,
} from '../styles/variables';

const Footer = styled.footer`
  -webkit-transition: ${transitionSpeed} ${transitionFn}, width ${transitionSpeed} ${transitionFn};
  -moz-transition: ${transitionSpeed} ${transitionFn}, width ${transitionSpeed} ${transitionFn};
  -o-transition: ${transitionSpeed} ${transitionFn}, width ${transitionSpeed} ${transitionFn};
  transition: ${transitionSpeed} ${transitionFn}, width ${transitionSpeed} ${transitionFn};

  box-sizing: border-box;
  display: block;
  z-index: 820;
  background: ${white};
  padding: 15px;
  color: #444;
  border-top: 1px solid ${gray};
  margin-left: ${props => (props.topNav ? '0' : sidebarWidth)};

  /* theme */
  ${props => (props.theme.contentLeftBorder && `border-left: ${props.theme.contentLeftBorder};`)}

  /* media queries */
  /* sidebar on large screens */
  @media (min-width: ${screenSmMin}) {
    ${props => ((props.sidebarCollapse && props.sidebarMini) && `
      margin-left: ${sidebarMiniWidth} !important;
      z-index: 840;
    `)}
    ${props => ((props.sidebarCollapse && !props.sidebarMini) && 'margin-left: 0;')}
  }
`;

export default Footer;
