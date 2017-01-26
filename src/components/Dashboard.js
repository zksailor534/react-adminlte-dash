/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Swipeable } from 'react-touch';
import MobileDetect from 'mobile-detect';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import themes from '../styles';

import {
  boxedLayoutMaxWidth,
} from '../styles/variables';

const StyledDashboard = styled.div`
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

  /* theme */
  ${props => (props.theme.sidebarBg && `background-color: ${props.theme.sidebarBg};`)}

  min-height: 100vh;
  position: relative;
  overflow: hidden;

  ${props => (props.boxed && `
    max-width: ${boxedLayoutMaxWidth};
    margin: 0 auto;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    position: relative;
  `)}
`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this._sidebarToggle = this.sidebarToggle.bind(this);
    this._sidebarOpen = this.sidebarOpen.bind(this);
    this._sidebarClose = this.sidebarClose.bind(this);
    this.md = new MobileDetect(window.navigator.userAgent);

    this.state = {
      mobile: this.md.mobile() !== null,
      sidebarCollapse: this.props.initialCollapse,
    };
  }

  sidebarToggle() { this.setState({ sidebarCollapse: !this.state.sidebarCollapse }); }
  sidebarOpen() { this.state.mobile && this.setState({ sidebarCollapse: false }); }
  sidebarClose() { this.state.mobile && this.setState({ sidebarCollapse: true }); }

  render() {
    const theme = themes[this.props.theme];
    return (
      <Swipeable onSwipeLeft={this._sidebarClose} onSwipeRight={this._sidebarOpen} >
        <StyledDashboard>
          <ThemeProvider theme={theme}>
            <Header
              logoOnClick={this.props.logoOnClick}
              logoHref={this.props.logoHref}
              logoLg={this.props.logoLg}
              logoSm={this.props.logoSm}
              fixed={this.props.fixed}
              sidebarToggle={this._sidebarToggle}
              sidebarCollapse={this.state.sidebarCollapse}
              sidebarMini={this.props.sidebarMini}
            >
              {this.props.navbarChildren}
            </Header>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Sidebar
              fixed={this.props.fixed}
              sidebarCollapse={this.state.sidebarCollapse}
              sidebarMini={this.props.sidebarMini}
            >
              {this.props.sidebarChildren}
            </Sidebar>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Content
              fixed={this.props.fixed}
              name="content-wrapper"
              sidebarCollapse={this.state.sidebarCollapse}
              sidebarMini={this.props.sidebarMini}
            >
              {this.props.children}
            </Content>
          </ThemeProvider>
        </StyledDashboard>
      </Swipeable>
    );
  }
}

Dashboard.propTypes = {
  children: React.PropTypes.node,
  logoOnClick: React.PropTypes.func,
  logoHref: React.PropTypes.string,
  logoLg: React.PropTypes.element,
  logoSm: React.PropTypes.element,
  navbarChildren: React.PropTypes.node,
  sidebarChildren: React.PropTypes.node,
  fixed: React.PropTypes.bool,
  sidebarMini: React.PropTypes.bool,
  initialCollapse: React.PropTypes.bool,
  theme: React.PropTypes.string,
};

Dashboard.defaultProps = {
  fixed: false,
  initialCollapse: false,
  sidebarMini: false,
  theme: 'skin-blue',
};

export default Dashboard;
