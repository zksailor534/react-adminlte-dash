/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';

import {
  fontFamilyBase,
  fontSizeBase,
  lineHeightBase,
  fontWeightBase,
  sidebarWidth,
  sidebarMiniWidth,
  screenSmMin,
} from '../../styles/variables';

const RightSpan = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -7px;

  color: ${props => props.theme.sidebarLinkColor || '#fff'};

  /* ----- hover ----- */
  ${props => (props.collapse && props.hover && !props.level) && `
    display: block;
    width: auto;
    left: ${parseInt(sidebarWidth, 10) - 30}px;
    top: 10px!important;
    margin-left: -3px;
    padding: 12px 5px 12px 20px;
    float: right;
  `}
`;

const StyledTitle = styled.span`
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently not supported by any browser */

  /* collapse */
  ${props => (!props.level && props.collapse) &&
    `@media (min-width: ${screenSmMin}) {
      border-top-right-radius: 4px;
      ${(props.hover ?
        `
          display: block !important;
          position: absolute;
          width: ${parseInt(sidebarWidth, 10) - parseInt(sidebarMiniWidth, 10)}px;
          left: ${sidebarMiniWidth};
          top: 0;
          margin-left: -3px;
          padding: 12px 5px 12px 20px;
          background-color: inherit;
        ` :
        `
          display: none !important;
          -webkit-transform: translateZ(0);
        `
      )}
    }`
  }
`;

const StyledRightIcon = styled.i`
  width: auto;
  height: auto;
  padding: 0;
  margin-right: 10px;
  margin-left: .3em;
  float: right;

  ${props => props.open && `
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  `}
`;

const StyledLeftIcon = styled.i`
  width: 20px;
`;

const StyledLink = styled.a`
  cursor: auto;
  text-decoration: none;
  display: block;
  padding: ${props => (!props.level ? '12px 5px 12px 15px' : '5px 5px 5px 15px')};
  position: relative;
  margin: 0;
  font-size: ${fontSizeBase};
  background-color: transparent;

  &:active,
  &:focus,
  &:hover {
    outline: none;
    text-decoration: none;
  }

  /* ----- theme ----- */
  /* text color - different in submenu */
  color: ${props =>
    (props.level ? props.theme.sidebarSubmenuLinkColor : props.theme.sidebarLinkColor)};
  /* left border - none in submenu */
  border-left: ${props => (!props.level ? props.theme.sidebarLinkBorderLeft : 'none')};
  /* transition */
  ${props => (props.theme.sidebarLinkTransition && `
    -webkit-transition: ${props.theme.sidebarLinkTransition};
    -moz-transition: ${props.theme.sidebarLinkTransition};
    -o-transition: ${props.theme.sidebarLinkTransition};
    transition: ${props.theme.sidebarLinkTransition};
  `)}
  /* font weight */
  ${props => (props.theme.sidebarLinkFontWeight && `
    font-weight: ${props.theme.sidebarLinkFontWeight};
  `)}

  /* ----- active or hover properties ----- */
  ${props => (props.active || props.hover) && `
    color: ${props.theme.sidebarLinkActiveColor || '#fff'};
    background: ${!props.level && props.theme.sidebarLinkActiveBg};
    border-left-color: ${props.theme.sidebarLinkActiveBorderLeftColor || '#3c8dbc'};
    font-weight: ${props.theme.sidebarLinkActiveFontWeight || 'normal'};
    text-decoration: none;
  `}
`;

const StyledSubMenu = styled.ul`
  display: ${props => (props.open ? 'block' : 'none')};
  list-style: none;
  padding: 0 0 0 ${props => ((props.level + 1) * 5)}px;

  /* ----- theme ----- */
  margin: ${props => props.theme.sidebarSubmenuMargin || '0'};
  background-color: ${props => props.theme.sidebarSubmenuBg || '#222d32'};

  /* ----- collapse ----- */
  ${props => props.collapse &&
    `@media (min-width: ${screenSmMin}) {
      ${props.theme.sidebarSubmenuLgBorderLeft &&
        `border-left: ${props.theme.sidebarSubmenuLgBorderLeft}`}
    }`
  }
  ${props => (props.collapse && props.open && !props.level) &&
    `@media (min-width: ${screenSmMin}) {
      position: absolute;
      width: ${parseInt(sidebarWidth, 10) - 50}px;
      left: ${sidebarMiniWidth};
      top: 44px;
      margin-left: 0;
      border-bottom-right-radius: 4px;
      ${(props.theme.sidebarSubmenuLgBorderLeft) &&
        `border-left: ${props.theme.sidebarSubmenuLgBorderLeft}`}
    }`
  }
`;

const StyledMenuItem = styled.li`
  /* shared */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${fontFamilyBase};
  font-weight: ${fontWeightBase};
  font-size: ${fontSizeBase};
  line-height: ${lineHeightBase};
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  list-style: none;
  position: relative;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  display: list-item;
  text-align: -webkit-match-parent;

  /* sublevel */
  ${props => props.level &&
    `
    }`
  }
`;

const renderChildren = (children, sidebarCollapse, level, hover) => {
  const newLevel = level + 1;
  return React.Children.map(children, child => (
    React.cloneElement(child, {
      collapse: sidebarCollapse,
      level: newLevel,
      parentHover: hover,
    })
  ));
};

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      hover: false,
    };
    this._toggleMenu = this.toggleMenu.bind(this);
    this._toggleHover = this.toggleHover.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    (nextProps.collapse !== this.props.collapse) &&
      this.setState({ open: false });
  }

  toggleMenu() {
    this.props.children && this.setState({ open: !this.state.open });
  }

  toggleHover(state) {
    this.setState({ hover: state });
    (!this.props.level && this.props.collapse) && this.toggleMenu();
  }

  render() {
    return (
      <StyledMenuItem
        collapse={this.props.collapse}
        hover={this.props.parentHover}
        level={this.props.level}
        onMouseLeave={() => this._toggleHover(false)}
      >
        <StyledLink
          active={this.props.active}
          collapse={this.props.collapse}
          hover={this.state.hover}
          level={this.props.level}
          onClick={this._toggleMenu}
          onMouseEnter={() => this._toggleHover(true)}
        >
          <StyledLeftIcon className={`fa ${this.props.icon}`} />
          <StyledTitle
            collapse={this.props.collapse}
            hover={this.state.hover}
            level={this.props.level}
          >
            {this.props.title}
          </StyledTitle>
          <RightSpan
            collapse={this.props.collapse}
            hover={this.state.hover}
            level={this.props.level}
          >
            {this.props.children && (
              <StyledRightIcon
                className="fa fa-angle-left"
                open={this.state.open}
              />
            )}
          </RightSpan>
        </StyledLink>
        {this.props.children && (
          <StyledSubMenu
            collapse={this.props.collapse}
            hover={this.state.hover}
            level={this.props.level}
            open={this.state.open}
          >
            {renderChildren(
              this.props.children,
              this.props.collapse,
              this.props.level,
              (this.state.hover || this.props.parentHover),
            )}
          </StyledSubMenu>
        )}
      </StyledMenuItem>
    );
  }
}

MenuItem.propTypes = {
  children: React.PropTypes.node,
  active: React.PropTypes.bool,
  icon: React.PropTypes.string,
  title: React.PropTypes.string,
  collapse: React.PropTypes.bool,
  level: React.PropTypes.number,
  parentHover: React.PropTypes.bool,
};

MenuItem.defaultProps = {
  icon: 'fa-circle-o',
  title: 'Title',
  collapse: false,
  level: 0,
  parentHover: false,
};

export default MenuItem;
