/* eslint-disable no-alert */
import React from 'react';

import pkgInfo from '../package.json';
import {
  Dashboard,
  Header,
} from '../src/index';

const navMenu = () => ([
  <Header.Link
    href={`https://github.com/${pkgInfo.user}/${pkgInfo.name}`}
    image="/demo/img/GitHub-Mark-120px-plus.png"
  >
    Github
  </Header.Link>,
  <Header.UserMenu
    name="Alexander Pierce"
    image="/demo/img/user2-160x160.jpg"
    signOutAction={() => alert('Sign out')}
  />,
]);

const App = ({ children }) => (
  <div>
    <Dashboard
      navbarChildren={navMenu()}
      sidebarMini
      theme="skin-blue"
    >
      {children}
    </Dashboard>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
