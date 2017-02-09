[![npm](https://img.shields.io/npm/v/react-adminlte-dash.svg)](https://www.npmjs.com/package/react-adminlte-dash)
[![build status](https://secure.travis-ci.org/zksailor534/react-adminlte-dash.svg)](http://travis-ci.org/zksailor534/react-adminlte-dash)
[![bitHound Score](https://www.bithound.io/github/zksailor534/react-adminlte-dash/badges/score.svg)](https://www.bithound.io/github/zksailor534/react-adminlte-dash)

## react-adminlte-dash
React.js components for AdminLTE themed dashboard.

> Based off of [AdminLTE](https://github.com/almasaeed2010/AdminLTE). Static hosted [demo](http://zksailor534.github.io/react-adminlte-dash/) on GitHub Pages.

### Todo (Path to 1.0.0)

- [ ] Universal/Isomorphic component
- [ ] Right sidebar
- [x] Footer
- [x] Content formatting
- [ ] Generic Navbar dropdowns
- [ ] Messaging Navbar dropdown
- [ ] Notifications Navbar dropdown
- [ ] Tasks Navbar dropdown
- [ ] Top-nav formatting option
- [ ] Boxed formatting option

## Installation

```bash
npm install --save react-adminlte-dash
```

## Usage

This module is in development, usage is subject to change.  Not all components are fully functional.

This module uses [Styled Components](https://github.com/styled-components/styled-components), so all CSS styling is included when the module is called.
However, in order for the dashboard to use the entire available screen height, the parent container components must be set to `height: 100%`.  This component sets the html & body styles, the user must set the app container.

In CSS:
```css
#app {
  min-height: 100vh;
}
```

In ES6:
```javascript
import { Dashboard, Header, Sidebar } from 'react-adminlte-dash';

const nav = () => ([
  <Header.Item href="/some/link" key="1" />
]);

const sb = () => ([
  <Sidebar.Menu header="NAVIGATION" key="1">
    <Sidebar.Menu.Item title="Home" href="/" />
  </Sidebar.Menu>
]);

const App = ({ children }) => (
  <Dashboard
    navbarChildren={nav()}
    sidebarChildren={sb()}
    theme="skin-blue"
  >
    {children}
  </Dashboard>
);
```

In order to create themed child components (not wrapped in navbarChildren, sidebarChildren, or footerChildren), use the `withTheme` wrapper provided by `styled-components`.  This will provide the `theme` object to the child component.  See `src/styles/variables.js` for the available variables.  Documentation for these variables is TBD.

## Included Components

### *Dashboard*

Main component for theme.  Handles theming, layout options, and tracks state.
Provides a default empty header and sidebar.

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| children | `node` | Any React child components to be rendered in content fields | n/a |
| navbarChildren | `node` | Any React child components to be rendered in the Header's navbar | n/a |
| sidebarChildren | `node` | Any React child components to be rendered in the Sidebar | n/a |
| footerChildren | `node` | Any React child components to be rendered in the Footer | n/a |
| theme | `string` | Choice of AdminLTE skin themes: `skin-blue`, `skin-black`, `skin-purple`, `skin-green`, `skin-red`, `skin-yellow`, `skin-blue-light`, `skin-black-light`, `skin-purple-light`, `skin-green-light`, `skin-red-light`, `skin-yellow-light` | `skin-blue` |
| initialCollapse | `bool` | Determines initial state of sidebar: collapsed (`true`) or expanded (`false`) | `false` |
| sidebarMini | `bool` | Determines whether sidebar collapses to mini size (`true`) or off-screen (`false`) | `true` |
| fixed | `bool` | Determines whether the Header is fixed | `false` |
| logoOnClick | `func` | Function to be called on logo click, overrides logoHref | n/a |
| logoHref | `string` | Link target for Logo, overridden by logoOnClick | `'/'` |
| logoLg | `element` | A single React component to be rendered when logo is in large state | `<span><b>Admin</b>LTE</span>` |
| logoSm | `element` | A single React component to be rendered when logo is in small state | `<span><b>A</b>LT</span>` |

### *Header*

Header component which can be used independently of Dashboard (TBD).  Wrapper for any top-based navigation components.  Provides the following subcomponents:
* `Header.Item`
* `Header.User`

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| children | `node` | Any React child components to be rendered | n/a |
| fixed | `bool` | Determines whether the Header is fixed | `false` |
| logoOnClick | `func` | Function to be called on logo click, overrides logoHref | n/a |
| logoHref | `string` | Link target for Logo, overridden by logoOnClick | `'/'` |
| logoLg | `element` | A single React component to be rendered when logo is in large state | `<span><b>Admin</b>LTE</span>` |
| logoSm | `element` | A single React component to be rendered when logo is in small state | `<span><b>A</b>LT</span>` |
| sidebarMini | `bool` | Determines whether sidebar collapses to mini size (`true`) or off-screen (`false`) | `false` |
| sidebarCollapse | `bool` | Determines whether sidebar is in a collapsed state | `false` |
| sidebarToggle | `func` | (Required) function passed to sidebar toggle component to handle sidebar collapse state | n/a |

### *Header.Item*

Header navbar menu item component.  Renders links with images in header.

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| title | `string` | Item title to be displayed | n/a |
| onClick | `func` | Function to be called on item click | n/a |
| link | `string` | Link target for logo component, overridden by `onClick` | n/a |
| image | `string` | Path to image object, overrides iconClass | n/a |
| iconClass | `string` | Class names to use for icon (libraries not included),  | n/a |

### *Header.UserMenu*

Header user menu component.  Renders user menu dropdown component in header bar.

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| name | `string` | User Name | n/a |
| image | `string` | Path to user image object | n/a |
| profileAction | `func` | Function to perform on selection of `Profile` button, button only displayed if action provided | n/a |
| signOutAction | `func` | Function to perform on selection of `Sign Out` button, button only displayed if action provided | n/a |

### *Sidebar*

Sidebar component which can be used independently of Dashboard (TBD).  Wrapper for any sidebar navigation components.  Provides the following subcomponents:
* `Sidebar.Menu`
* `Sidebar.UserPanel`
* `Sidebar.Search`

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| children | `node` | Any React child components to be rendered | n/a |
| fixed | `bool` | Determines whether the Header is fixed | `false` |
| sidebarMini | `bool` | Determines whether sidebar collapses to mini size (`true`) or off-screen (`false`) | `false` |
| sidebarCollapse | `bool` | Determines whether sidebar is in a collapsed state | `false` |

### *Sidebar.Menu*

Sidebar navigation menu component.  Wrapper for SidebarMenuItem components, which are provided as subcomponent:
* `Sidebar.Menu.Item`

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| children | `node` | Any React child components to be rendered | n/a |
| header | `string` | Header title for navigation component | none |

### *Sidebar.Menu.Item*

Sidebar navigation menu item component.  Renders as link or dropdown menu.  Can be nested in itself to provided nested dropdown menus.

```javascript
<Sidebar.Menu.Item title="Level 1">
  <Sidebar.Menu.Item title="Level 2">
    <Sidebar.Menu.Item title="Level 3" />
  </Sidebar.Menu.Item>
</Sidebar.Menu.Item>
```

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| children | `node` | Any React child components to be rendered | n/a |
| title | `string` | Title for component | none |
| active | `bool` | Determines if item is considered active | `false` |
| href | `string` | Link target for component, unused if onClick or children provided | `null` |
| onClick | `func` | Action for component, unused if children provided, overrides href | `null` |
| icon | `object` | Expects a `className` key which accepts a string describing any font-awesome icon (i.e. `fa-th`) and/or a `color` key which accepts any Bootstrap style type (i.e. `danger`) or CSS color string (hex, name, or rgb) | `{ className: 'fa-circle-o' }` |
| labels | `[objects]` | Array of objects, each requires a React `key` string, a `type` key which accepts a string describing any Bootstrap style type (i.e. `danger`) and a `text` key of any string to display | n/a |

### *Sidebar.Search*

Sidebar search component.

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| name | `string` | Initial value displayed in search field | `''` |
| placeholder | `string` | Initial value displayed in search field | `'Search...'` |
| onClick | `func` | Function to call on search submit, provided with value prop | `v => alert(`Searching for ${v}`)` |

### *Sidebar.UserPanel*

Sidebar user component.

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| name | `string` | User name | n/a |
| image | `string` | String providing source path for user image | n/a |
| online | `bool` | User status: online = `true`, offline = `false` | `false` |
| href | `string` | Target for user status link | n/a |

### License

*react-adminlte-dash* is available under MIT. See LICENSE for more details.
