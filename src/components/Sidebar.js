/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';

import UserPanel from './Sidebar/UserPanel';
import Search from './Sidebar/Search';

import {
  screenXsMax,
  screenSmMin,
  sidebarWidth,
  sidebarMiniWidth,
  transitionSpeed,
  transitionFn,
} from '../styles/variables';

const sidebarCollapseProperties = `
  & .sidebar-form,
  & .user-info,
  & .menu-header,
  & .link-text,
  & .treeview-menu,
  & .link-right-icon {
    display: none!important;
    -webkit-transform: translateZ(0);
  }

  & .sidebar-menu,
  & .user-panel,
  & .menu-header {
    white-space: nowrap;
    overflow: hidden;
  }

  & .sidebar-menu:hover {
    overflow: visible;
  }

  & .sidebar-form,
  & .menu-header {
    overflow: hidden;
    text-overflow: clip;
  }

  & .menu-item {
    position: relative;
    .link-right-icon {
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -7px;
    }
  }
`;

const StyledSidebar = styled.aside`
  &:before, &:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  /* theme */
  background-color: ${props => props.theme.sidebarBg}

  position: ${props => (props.fixed ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  padding-top: 50px;
  min-height: 100%;
  width: ${sidebarWidth};
  z-index: 810;

  -webkit-transition: ${transitionSpeed} ${transitionFn}, width ${transitionSpeed} ${transitionFn};
  -moz-transition: ${transitionSpeed} ${transitionFn}, width ${transitionSpeed} ${transitionFn};
  -o-transition: ${transitionSpeed} ${transitionFn}, width ${transitionSpeed} ${transitionFn};
  transition: ${transitionSpeed} ${transitionFn}, width ${transitionSpeed} ${transitionFn};

  /* collapse sidebar */
  ${props => props.collapse && sidebarCollapseProperties}

  /* media queries */
  /* sidebar on large screens */
  @media (min-width: ${screenSmMin}) {
    margin-left: 0;
    ${(props) => {
      if (props.collapse) {
        if (props.mini) {
          return `
            width: ${sidebarMiniWidth};
            z-index: 850;
          `;
        }
        return `
          -webkit-transform: translate(-${sidebarWidth}, 0);
          -ms-transform: translate(-${sidebarWidth}, 0);
          -o-transform: translate(-${sidebarWidth}, 0);
          transform: translate(-${sidebarWidth}, 0);
        `;
      }
      return `
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
      `;
    }}
  }
  /* sidebar on small screens */
  @media (max-width: ${screenXsMax}) {
    padding-top: 100px;
    ${props => (props.collapse ? `
      -webkit-transform: translate(-${sidebarWidth}, 0);
      -ms-transform: translate(-${sidebarWidth}, 0);
      -o-transform: translate(-${sidebarWidth}, 0);
      transform: translate(-${sidebarWidth}, 0);
    ` : `
      -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      transform: translate(0, 0);
    `)};
  }
`;

const Sidebar = ({
  children,
  fixed = false,
  sidebarMini = false,
  sidebarCollapse = false,
}) => (
  <StyledSidebar
    fixed={fixed}
    collapse={sidebarCollapse}
    mini={sidebarMini}
  >
    {children}
  </StyledSidebar>
);

Sidebar.propTypes = {
  children: React.PropTypes.node,
  fixed: React.PropTypes.bool,
  sidebarMini: React.PropTypes.bool,
  sidebarCollapse: React.PropTypes.bool,
};

Sidebar.UserPanel = UserPanel;
Sidebar.Search = Search;

export default Sidebar;
