import styled from 'styled-components';

import {
  fontFamilyBase,
  fontSizeBase,
  lineHeightBase,
  fontWeightBase,
  screenXsMax,
  screenSmMin,
  navbarHeight,
  sidebarWidth,
  sidebarMiniWidth,
  transitionSpeed,
  transitionFn,
} from '../styles/variables';

const Content = styled.div`
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
  line-height: ${lineHeightBase};
  box-sizing: border-box;

  /* theme */
  ${props => (props.theme.contentLeftBorder && `border-left: ${props.theme.contentLeftBorder};`)}
  background-color: transparent;

  min-height: 100%;
  margin-left: ${props => (props.topNav ? '0' : sidebarWidth)};
  z-index: 800;

  -webkit-transition: ${transitionSpeed} ${transitionFn}, width ${transitionSpeed} ${transitionFn};
  -moz-transition: ${transitionSpeed} ${transitionFn}, width ${transitionSpeed} ${transitionFn};
  -o-transition: ${transitionSpeed} ${transitionFn}, width ${transitionSpeed} ${transitionFn};
  transition: ${transitionSpeed} ${transitionFn}, width ${transitionSpeed} ${transitionFn};

  /* fixed layout */
  ${props => (props.fixed && `padding-top: ${navbarHeight};`)};

  /* media queries */
  /* sidebar on large screens */
  @media (min-width: ${screenSmMin}) {
    ${props => ((props.sidebarCollapse && props.sidebarMini) && `
      margin-left: ${sidebarMiniWidth} !important;
      z-index: 840;
    `)}
    ${props => ((props.sidebarCollapse && !props.sidebarMini) && 'margin-left: 0;')}
  }
  /* sidebar on small screens */
  @media (max-width: ${screenXsMax}) {
    margin-left: 0;
    ${props => (props.fixed && `padding-top: ${parseInt(navbarHeight, 10) * 2}px;`)};
  }
`;

export default Content;
