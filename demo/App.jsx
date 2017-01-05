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
    key="1"
  >
    Github
  </Header.Item>,
  <Header.UserMenu
    name="Alexander Pierce"
    image="/demo/img/user2-160x160.jpg"
    signOutAction={() => alert('Sign out')}
    key="2"
  />,
]);

const sb = () => ([
  <Sidebar.UserPanel
    name="Alexander Pierce"
    image="/demo/img/user2-160x160.jpg"
    online
    key="1"
  />,
  <Sidebar.Search key="2" />,
  <Sidebar.Menu header="MAIN NAVIGATION" key="3">
    <Sidebar.Menu.Item icon={{ className: 'fa-dashboard' }} title="Dashboard" >
      <Sidebar.Menu.Item title="Dashboard v1" />
      <Sidebar.Menu.Item title="Dashboard v2" />
    </Sidebar.Menu.Item>
    <Sidebar.Menu.Item
      icon={{ className: 'fa-files-o' }}
      labels={[{ key: 1, type: 'primary', text: '4' }]}
      title="Layout Options"
    >
      <Sidebar.Menu.Item title="Top Navigation" />
      <Sidebar.Menu.Item title="Boxed" href="/boxed" />
      <Sidebar.Menu.Item title="Fixed" />
      <Sidebar.Menu.Item title="Collapsed Sidebar" />
    </Sidebar.Menu.Item>
    <Sidebar.Menu.Item
      icon={{ className: 'fa-th' }}
      labels={[{ key: 1, type: 'success', text: 'new' }]}
      title="Widgets"
    />
    <Sidebar.Menu.Item icon={{ className: 'fa-pie-chart' }} title="Charts" >
      <Sidebar.Menu.Item title="ChartJS" />
      <Sidebar.Menu.Item title="Morris" />
      <Sidebar.Menu.Item title="Flot" />
      <Sidebar.Menu.Item title="Inline Charts" />
    </Sidebar.Menu.Item>
    <Sidebar.Menu.Item icon={{ className: 'fa-laptop' }} title="UI Elements" >
      <Sidebar.Menu.Item title="General" />
      <Sidebar.Menu.Item title="Icons" />
      <Sidebar.Menu.Item title="Buttons" />
      <Sidebar.Menu.Item title="Sliders" />
      <Sidebar.Menu.Item title="Timeline" />
      <Sidebar.Menu.Item title="Modals" />
    </Sidebar.Menu.Item>
    <Sidebar.Menu.Item icon={{ className: 'fa-edit' }} title="Forms" >
      <Sidebar.Menu.Item title="General Elements" />
      <Sidebar.Menu.Item title="Advanced Elements" />
      <Sidebar.Menu.Item title="Editors" />
    </Sidebar.Menu.Item>
    <Sidebar.Menu.Item icon={{ className: 'fa-table' }} title="Tables" >
      <Sidebar.Menu.Item title="Simple tables" />
      <Sidebar.Menu.Item title="Data tables" />
    </Sidebar.Menu.Item>
    <Sidebar.Menu.Item
      icon={{ className: 'fa-calendar' }}
      labels={[
        { key: 1, type: 'primary', text: '17' },
        { key: 2, type: 'danger', text: '3' },
      ]}
      title="Calendar"
    />
    <Sidebar.Menu.Item
      icon={{ className: 'fa-envelope' }}
      labels={[
        { key: 2, type: 'success', text: '16' },
        { key: 1, type: 'warning', text: '12' },
        { key: 3, type: 'danger', text: '5' },
      ]}
      title="Mailbox"
    />
    <Sidebar.Menu.Item icon={{ className: 'fa-folder' }} title="Examples" >
      <Sidebar.Menu.Item title="Invoice" />
      <Sidebar.Menu.Item title="Profile" />
      <Sidebar.Menu.Item title="Login" />
      <Sidebar.Menu.Item title="Register" />
      <Sidebar.Menu.Item title="Lockscreen" />
      <Sidebar.Menu.Item title="404 Error" />
      <Sidebar.Menu.Item title="500 Error" />
      <Sidebar.Menu.Item title="Blank Page" />
      <Sidebar.Menu.Item title="Pace Page" />
    </Sidebar.Menu.Item>
    <Sidebar.Menu.Item icon={{ className: 'fa-share' }} title="Multilevel">
      <Sidebar.Menu.Item title="Level One" />
      <Sidebar.Menu.Item title="Level One" >
        <Sidebar.Menu.Item title="Level Two" />
        <Sidebar.Menu.Item title="Level Two" >
          <Sidebar.Menu.Item title="Level Three" />
        </Sidebar.Menu.Item>
      </Sidebar.Menu.Item>
      <Sidebar.Menu.Item title="Level One" />
    </Sidebar.Menu.Item>
    <Sidebar.Menu.Item active icon={{ className: 'fa-book' }} title="Documentation" />
  </Sidebar.Menu>,
  <Sidebar.Menu header="LABELS" key="4">
    <Sidebar.Menu.Item icon={{ color: 'danger' }} title="Danger" />
    <Sidebar.Menu.Item icon={{ color: 'warning' }} title="Warning" />
    <Sidebar.Menu.Item icon={{ color: 'information' }} title="Information" />
  </Sidebar.Menu>,
]);

const App = ({ children }) => (
  <div>
    <Dashboard
      navbarChildren={navMenu()}
      sidebarChildren={sb()}
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
