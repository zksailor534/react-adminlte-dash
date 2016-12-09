[![build status](https://secure.travis-ci.org/zksailor534/react-adminlte.svg)](http://travis-ci.org/zksailor534/react-adminlte)
[![bitHound Score](https://www.bithound.io/github/zksailor534/react-adminlte-dash/badges/score.svg)](https://www.bithound.io/github/zksailor534/react-adminlte-dash)

## react-adminlte-dash
React.js components for AdminLTE themed dashboard.

> Based off of [AdminLTE](https://github.com/almasaeed2010/AdminLTE). Static hosted [demo](http://zksailor534.github.io/react-adminlte-dash/) on GitHub Pages.

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

This module is in development, usage is subject to change.  Not all components are fully functional.

First include the css for styles:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/_all-skins.min.css';
```

Then (ES6):
```javascript
import { AdminLTE, Header, Sidebar } from 'react-adminlte-dash';

const App = () => (
  <AdminLTE
    layout="fixed"
    sidebarCollapsed={false}
    sidebarMini={true}
    skin="blue"
  >
    <Header />
    <Sidebar />
  </AdminLTE>
);
```

## Included Components

### *AdminLTE*

Wrapper component for style.  Handles layout changes and theming.

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| children | `node` | Any React child components to be rendered | n/a |
| skin | `string` | Choice of AdminLTE skin themes: `blue`, `black`, `purple`, `green`, `red`, `yellow`, `blue-light`, `black-light`, `purple-light`, `green-light`, `red-light`, `yellow-light` | `blue` |
| sidebarMini | `bool` | Determines whether sidebar collapses to mini size (`true`) or off-screen (`false`) | `true` |
| layout | `string` | Choice of AdminLTE layouts: `fixed` (header fixed to top of screen), `boxed` (layout in Bootstrap container), `nav-on-top` (TBD: Bootstrap-style navbar) | `fixed` |
| sidebarCollapsed | `bool` | Determines whether the sidebar is in an open (`false`) or collapsed state (`true`) | `false` |

### *Header*

Header component.  Wrapper for logo component and any top-based navigation.

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| children | `node` | Any React child components to be rendered | n/a |
| logo | `element` | A single React component to be rendered in the top left of screen, typically use `<HeaderLogo />` with options | `<HeaderLogo />` |
| sidebarToggle | `func` | (Required) function passed to sidebar toggle component to handle sidebar state | `true` |

### *HeaderLogo*

Header Logo component.  Renders large or small logo in left side of header bar.

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| link | `string` | Link target for logo component | `'/'` |
| logoLg | `element` | A single React component to be rendered when logo is in large state | `<span><b>Admin</b>LTE</span>` |
| logoSm | `element` | A single React component to be rendered when logo is in small state | `<span><b>A</b>LT</span>` |

### *HeaderMenu*

Header menu component.  Renders link or dropdown component in header bar.

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| children | `node` | Any React child components to be rendered | n/a |
| link | `string` | Link target for component | `'#'` |
| type | `string` | Menu type: `messages`, `notifications`, `tasks`, `''` (generic dropdown menu) | `messages` |
| labelText | `string` | Text for label | '' |
| labelColor | `string` | Label color (does not render unless labelText provided): `red`, `yellow`, `green` | none |

### *Sidebar*

Sidebar component.  Wrapper for sidebar-based navigation.  Also provides subcomponents:
* `Sidebar.Menu` - see SidebarMenu
* `Sidebar.User` - see SidebarUser
* `Sidebar.Search` - see SidebarSearch

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| children | `node` | Any React child components to be rendered | n/a |

### *SidebarMenu*

Sidebar navigation menu component.  Wrapper for SidebarMenuItem components, which are provided as subcomponent:
* `SidebarMenu.Item` - see SidebarMenuItem

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| children | `node` | Any React child components to be rendered | n/a |
| title | `string` | Header title for navigation component | none |

### *SidebarMenuItem*

Sidebar navigation menu item component.  Renders as link or dropdown menu.  Can be nested in itself to provided nested dropdown menus.

```javascript
<SidebarMenuItem title="Level 1">
  <SidebarMenuItem title="Level 2">
    <SidebarMenuItem title="Level 3" />
  </SidebarMenuItem>
</SidebarMenuItem>
```

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| children | `node` | Any React child components to be rendered | n/a |
| title | `string` | Title for component | none |
| link | `string` | Link target for component | `'#'` |
| mainIcon | `string` | Several built-in circle font awesome components: `plain` (`fa-circle-o`), `danger` (red `fa-circle-o`), `warning` (yellow `fa-circle-o`), `information` (aqua `fa-circle-o`), `none`, or any other font-awesome class name | `plain` |
| active | `bool` | Determines if item is considered active | `false` |
| labelType | `string` | Bootstrap colors for right label: `danger`, `warning`, `primary`, `success` | none |
| labelText | `string` | Right label text | `''` |

### *SidebarSearch*

Sidebar search component.

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| initialValue | `string` | Initial value displayed in search field | `''` |
| onSearch | `func` | (Required) Function to call on search submit, provided with value prop | none |

### *SidebarUser*

Sidebar user component.

| Property | Type | Description | Default |
|:--------:|:----:|:-----------:|:-------:|
| userName | `string` | User name | `'User Name'` |
| userImageSrc | `string` | String providing src location for user image | none |
| userStatus | `string` | String providing user status: `online`, `offline`, `unknown` | `null` |
| userLink | `string` | Link target for user status | `'/'` |

### License

*react-adminlte* is available under MIT. See LICENSE for more details.
