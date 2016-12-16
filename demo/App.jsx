import React from 'react';
// import GithubCorner from 'react-github-corner';

// import pkgInfo from '../package.json';
import {
  Dashboard,
} from '../src/index';

const App = ({ children }) => (
  <div>
    {/* <GithubCorner
      href={`https://github.com/${pkgInfo.user}/${pkgInfo.name}`}
      bannerColor="#fff"
      octoColor="#000"
      width={80}
      height={80}
      direction="right"
    /> */}

    <Dashboard>
      {children}
    </Dashboard>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
