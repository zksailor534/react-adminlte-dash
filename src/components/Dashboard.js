/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

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

  min-height: 100%;
  position: relative;
  overflow: hidden;

  ${props => (props.boxed && `
    max-width: ${boxedLayoutMaxWidth};
    margin: 0 auto;
    min-height: 100%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    position: relative;
  `)}
`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarCollapse: false,
    };
    this._sidebarToggle = this.sidebarToggle.bind(this);
  }

  sidebarToggle() {
    this.setState({
      sidebarCollapse: !this.state.sidebarCollapse,
    });
  }

  render() {
    const theme = themes[this.props.theme];
    return (
      <StyledDashboard>
        <ThemeProvider theme={theme}>
          <Header
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
            sidebarCollapse={this.state.sidebarCollapse}
            sidebarMini={this.props.sidebarMini}
          >
            {this.props.children}
          </Content>
        </ThemeProvider>
      </StyledDashboard>
    );
  }
}

Dashboard.propTypes = {
  children: React.PropTypes.node,
  logoHref: React.PropTypes.element,
  logoLg: React.PropTypes.element,
  logoSm: React.PropTypes.element,
  navbarChildren: React.PropTypes.node,
  sidebarChildren: React.PropTypes.node,
  fixed: React.PropTypes.bool,
  sidebarMini: React.PropTypes.bool,
  theme: React.PropTypes.string,
};

Dashboard.defaultProps = {
  fixed: false,
  sidebarMini: false,
  theme: 'skin-blue',
};

export default Dashboard;
