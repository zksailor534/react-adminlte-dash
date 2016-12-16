import React from 'react';
// import GithubCorner from 'react-github-corner';
import { ThemeProvider } from 'styled-components';

// import pkgInfo from '../package.json';
import {
  Header,
} from '../src/index';
import theme from '../src/styles/skin-blue';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarCollapse: false,
      sidebarMini: true,
    };
    this._sidebarToggle = this.sidebarToggle.bind(this);
  }

  sidebarToggle() {
    this.setState({
      sidebarCollapse: !this.state.sidebarCollapse,
    });
  }

  render() {
    return (
      <div>
        {/* <GithubCorner
          href={`https://github.com/${pkgInfo.user}/${pkgInfo.name}`}
          bannerColor="#fff"
          octoColor="#000"
          width={80}
          height={80}
          direction="right"
        /> */}

        <ThemeProvider theme={theme}>
          <Header
            fixed
            sidebarToggle={this._sidebarToggle}
            sidebarCollapse={this.state.sidebarCollapse}
            sidebarMini={this.state.sidebarMini}
          />
        </ThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
