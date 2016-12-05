[![build status](https://secure.travis-ci.org/zksailor534/react-adminlte.svg)](http://travis-ci.org/zksailor534/react-adminlte)
[![bitHound Score](https://www.bithound.io/github/zksailor534/react-adminlte-dash/badges/score.svg)](https://www.bithound.io/github/zksailor534/react-adminlte-dash)

## react-adminlte-dash
> React.js components for AdminLTE themed dashboard
This is a series of React components that make it easy to implement the AdminLTE theme.
> Based off of [AdminLTE](https://github.com/almasaeed2010/AdminLTE).

## Installation

```bash
npm install --save react-adminlte-dash
```

This module does not come bundled with css,
so the following peer dependencies will also need to be installed:

```bash
npm install --save bootstrap font-awesome admin-lte
```

## Usage

This module is in early development, usage is subject to change.

First include the css for styles:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/_all-skins.min.css';
```

Then (ES6):
```javascript
import { AdminLTE, Navbar, MainSidebar } from 'react-adminlte-dash';

const App = () => (
  <AdminLTE
    layout="fixed"
    sidebarCollapsed={false}
    sidebarMini={true}
    skin="blue"
  >
    <Navbar />
    <MainSidebar />
  </AdminLTE>
);
```

## Demo (TBD)

Static hosted [demo](http://zksailor534.github.io/react-adminlte-dash/) on GitHub.

This is a series of React components that make it easy to implement the AdminLTE theme.

### License

*react-adminlte* is available under MIT. See LICENSE for more details.
