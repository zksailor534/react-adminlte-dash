/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';

import {
  fontFamilyBase,
  fontSizeBase,
  lineHeightBase,
  fontWeightBase,
  sidebarWidth,
  sidebarMiniWidth,
  screenSmMin,
  lightBlue,
  green,
  yellow,
  red,
  aqua,
} from '../../styles/variables';

const Label = styled.div`
  /* shared */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${fontFamilyBase};
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently not supported by any browser */

  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  display: inline;
  padding: .2em .6em .3em .6em;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
  float: right!important;
  color: #fff;
  margin-right: 5px;

  /* ----- color ----- */
  background-color: ${(props) => {
    switch (props.type) {
      case 'primary':
        return lightBlue;
      case 'success':
        return green;
      case 'danger':
        return red;
      case 'warning':
        return yellow;
      case 'information':
        return aqua;
      default:
        return lightBlue;
    }
  }};

  /* ----- collapse ----- */
  ${props => props.collapse && `
    display: ${props.hover ? 'block' : 'none'};
    float: right;
  `}
`;

const RightSpan = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -7px;

  color: ${props => props.theme.sidebarLinkColor || '#fff'};

  /* ----- hover ----- */
  ${props => (props.collapse && props.hover && !props.level) && `
    display: block;
    left: ${parseInt(sidebarWidth, 10) - 30}px;
    top: 10px!important;
    margin-left: -3px;
    padding: 12px 5px 12px 20px;
    float: right;
    overflow-x: visible;
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

  /* ----- collapse ----- */
  ${props => (props.collapse && !props.hover) && 'display: none !important;'};
`;

const StyledLeftIcon = styled.i`
  width: 20px;

  /* ----- color ----- */
  ${(props) => {
    switch (props.color) {
      case 'primary':
        return `color: ${lightBlue};`;
      case 'success':
        return `color: ${green};`;
      case 'danger':
        return `color: ${red};`;
      case 'warning':
        return `color: ${yellow};`;
      case 'information':
        return `color: ${aqua};`;
      default: {
        const c = tinycolor(props.color);
        return c.isValid() ?
          `color: ${c.toString()};` :
          null;
      }
    }
  }};
`;

const StyledLink = styled.a`
  cursor: auto;
  text-decoration: none !important;
  display: block;
  padding: ${props => (!props.level ? '12px 5px 12px 15px' : '5px 5px 5px 15px')};
  position: relative;
  margin: 0;
  font-size: ${fontSizeBase};
  background-color: transparent;

  &:active,
  &:focus,
  &:hover {
    outline: none !important;
    text-decoration: none !important;
  }

  /* ----- theme ----- */
  /* text color - different in submenu */
  color: ${props =>
    (props.level ? props.theme.sidebarSubmenuLinkColor : props.theme.sidebarLinkColor)} !important;
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
    color: ${props.theme.sidebarLinkActiveColor || '#fff'} !important;
    background: ${!props.level && props.theme.sidebarLinkActiveBg};
    border-left-color: ${props.theme.sidebarLinkActiveBorderLeftColor || '#3c8dbc'};
    font-weight: ${props.theme.sidebarLinkActiveFontWeight || 'normal'};
    text-decoration: none !important;
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
`;

const renderChildren = (children, sidebarCollapse, level, hover) => {
  const newLevel = level + 1;
  return React.Children.map(children, (child, index) => (
    React.cloneElement(child, {
      key: index.toString(),
      collapse: sidebarCollapse,
      level: newLevel,
      parentHover: hover,
    })
  ));
};

const renderLabels = (labels, collapse, hover) => (
  labels.map((l) => {
    if (l.key && l.type && l.text) {
      if (l.key === 1) {
        return (<Label
          collapse={collapse}
          hover={hover}
          key={l.key.toString()}
          type={l.type}
        >
          {l.text}
        </Label>);
      } else if (!collapse) {
        return (<Label
          collapse={collapse}
          hover={hover}
          key={l.key.toString()}
          type={l.type}
        >
          {l.text}
        </Label>);
      }
    }
    return null;
  })
);

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

  toggleHover(state) { this.setState({ hover: state }); }

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
          href={(this.props.children || this.props.onClick) ?
            null : this.props.href}
          level={this.props.level}
          onClick={this.props.children ?
            this._toggleMenu : this.props.onClick}
          onMouseEnter={() => this._toggleHover(true)}
        >
          <StyledLeftIcon
            className={`fa ${this.props.icon.className || 'fa-circle-o'}`}
            color={this.props.icon.color || 'none'}
          />
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
            {(this.props.labels ?
              renderLabels(
                this.props.labels,
                this.props.collapse,
                this.state.hover,
              ) :
              this.props.children &&
                (<StyledRightIcon
                  className="fa fa-angle-left"
                  open={this.state.open}
                  collapse={this.props.collapse}
                  hover={this.state.hover}
                />)
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
  collapse: React.PropTypes.bool,
  icon: React.PropTypes.objectOf(React.PropTypes.string),
  href: React.PropTypes.string,
  labels: React.PropTypes.arrayOf(React.PropTypes.object),
  level: React.PropTypes.number,
  onClick: React.PropTypes.func,
  parentHover: React.PropTypes.bool,
  title: React.PropTypes.string,
};

MenuItem.defaultProps = {
  collapse: false,
  icon: { className: 'fa-circle-o' },
  href: null,
  level: 0,
  parentHover: false,
  title: 'Title',
};

export default MenuItem;
