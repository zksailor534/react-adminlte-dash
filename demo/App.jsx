/* eslint-disable no-alert */
import React from 'react';
// import GithubCorner from 'react-github-corner';

// import pkgInfo from '../package.json';
import {
  Dashboard,
  Header,
} from '../src/index';

const navMenu = () => (
  <Header.UserMenu
    name="Alexander Pierce"
    image="/demo/img/user2-160x160.jpg"
    profileAction={() => alert('Go to profile')}
    signOutAction={() => alert('Sign out')}
  />
);

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

    <Dashboard
      navbarChildren={navMenu()}
      sidebarMini
    >
      {children}
    </Dashboard>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
