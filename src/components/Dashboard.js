/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './Header';
import Sidebar from './Sidebar';
import themes from '../styles';

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
      <div>
        <ThemeProvider theme={theme}>
          <Header
            fixed={this.props.fixed}
            sidebarToggle={this._sidebarToggle}
            sidebarCollapse={this.state.sidebarCollapse}
            sidebarMini={this.props.sidebarMini}
          />
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Sidebar
            fixed={this.props.fixed}
            sidebarCollapse={this.state.sidebarCollapse}
            sidebarMini={this.props.sidebarMini}
          />
        </ThemeProvider>
        {this.props.children}
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: React.PropTypes.node,
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
