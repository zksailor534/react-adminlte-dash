// Import components
import AdminLTE from './components/AdminLTE';
import Navbar from './components/Navbar';
import NavbarDropdown from './components/NavbarDropdown';
import MainSidebar from './components/MainSidebar';
import SidebarMenu from './components/SidebarMenu';
import SidebarMenuItem from './components/SidebarMenuItem';
import SidebarMenuSearch from './components/SidebarMenuSearch';
import SidebarMenuUser from './components/SidebarMenuUser';

// Import styles
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './styles/less/AdminLTE.less';
import './styles/less/skins/_all-skins.less';

module.exports = {
  AdminLTE,
  Navbar,
  MainSidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSearch,
  SidebarMenuUser,
  NavbarDropdown,
};
