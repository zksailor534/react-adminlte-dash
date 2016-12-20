/* eslint-disable no-alert */
import React from 'react';

import pkgInfo from '../package.json';
import {
  Dashboard,
  Header,
  Sidebar,
} from '../src/index';

const navMenu = () => ([
  <Header.Item
    href={`https://github.com/${pkgInfo.user}/${pkgInfo.name}`}
    image="/demo/img/GitHub-Mark-120px-plus.png"
    key={1}
  >
    Github
  </Header.Item>,
  <Header.UserMenu
    name="Alexander Pierce"
    image="/demo/img/user2-160x160.jpg"
    signOutAction={() => alert('Sign out')}
    key={2}
  />,
]);

const sbMenu = () => ([
  <Sidebar.UserPanel
    name="Alexander Pierce"
    image="/demo/img/user2-160x160.jpg"
    online
    key={1}
  />,
]);

const App = ({ children }) => (
  <div>
    <Dashboard
      navbarChildren={navMenu()}
      sidebarChildren={sbMenu()}
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
