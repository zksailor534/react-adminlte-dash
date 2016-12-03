import React from 'react';
import Fork from 'react-ghfork';
import pkgInfo from '../package.json';
import { AdminLTE,
  Navbar,
  MainSidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSearch,
  SidebarMenuUser,
} from '../src/index';
import Documentation from './Documentation';

export default class App extends React.Component {
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
        <Fork className="right" project={`${pkgInfo.user}/${pkgInfo.name}`} />

        <AdminLTE
          layout="fixed"
          sidebarCollapsed={this.state.sidebarCollapse}
          sidebarMini={this.state.sidebarMini}
          skin="blue"
        >
          <Navbar
            sidebarToggle={this._sidebarToggle}
          />

          {/* Left side column. contains the logo and sidebar */}
          <MainSidebar>
            {/* sidebar menu: : style can be found in sidebar.less */}
            {/* Sidebar user panel */}
            <SidebarMenuUser
              userName="Alexander Pierce"
              userStatus="online"
            />

            {/* search form */}
            <SidebarMenuSearch
              onSearch={value => (alert(`Searching for: ${value}`))}
            />

            <SidebarMenu title="MAIN NAVIGATION">

              <SidebarMenuItem
                mainIcon="fa-dashboard"
                title="Dashboard"
              >
                <SidebarMenuItem
                  link="#"
                  title="Dashboard v1"
                />
                <SidebarMenuItem
                  active
                  link="#"
                  title="Dashboard v2"
                />
              </SidebarMenuItem>

              <SidebarMenuItem
                labelText="4"
                labelType="information"
                mainIcon="fa-files-o"
                title="Layout Options"
              >
                <SidebarMenuItem
                  link="#"
                  title="Top Navigation"
                />
                <SidebarMenuItem
                  link="#"
                  title="Boxed"
                />
                <SidebarMenuItem
                  link="#"
                  title="Fixed"
                />
                <SidebarMenuItem
                  link="#"
                  title="Collapsed Sidebar"
                />
              </SidebarMenuItem>

              <SidebarMenuItem
                labelText="new"
                labelType="green"
                link="#"
                title="Widgets"
              />

              <SidebarMenuItem
                mainIcon="fa-pie-chart"
                title="Charts"
              >
                <SidebarMenuItem
                  link="#"
                  title="ChartJS"
                />
                <SidebarMenuItem
                  link="#"
                  title="Morris"
                />
                <SidebarMenuItem
                  link="#"
                  title="Flot"
                />
                <SidebarMenuItem
                  link="#"
                  title="Inline charts"
                />
              </SidebarMenuItem>

              <SidebarMenuItem
                mainIcon="fa-laptop"
                title="UI Elements"
              >
                <SidebarMenuItem
                  link="#"
                  title="General"
                />
                <SidebarMenuItem
                  link="#"
                  title="Icons"
                />
                <SidebarMenuItem
                  link="#"
                  title="Buttons"
                />
                <SidebarMenuItem
                  link="#"
                  title="Sliders"
                />
                <SidebarMenuItem
                  link="#"
                  title="Timeline"
                />
                <SidebarMenuItem
                  link="#"
                  title="Modals"
                />
              </SidebarMenuItem>

              <SidebarMenuItem
                mainIcon="fa-edit"
                title="Forms"
              >
                <SidebarMenuItem
                  link="#"
                  title="General Elements"
                />
                <SidebarMenuItem
                  link="#"
                  title="Advanced Elements"
                />
                <SidebarMenuItem
                  link="#"
                  title="Editors"
                />
                <SidebarMenuItem
                  link="#"
                  title="Sliders"
                />
                <SidebarMenuItem
                  link="#"
                  title="Timeline"
                />
                <SidebarMenuItem
                  link="#"
                  title="Modals"
                />
              </SidebarMenuItem>

              <SidebarMenuItem
                mainIcon="fa-table"
                title="Tables"
              >
                <SidebarMenuItem
                  link="#"
                  title="Simple tables"
                />
                <SidebarMenuItem
                  link="#"
                  title="Data tables"
                />
              </SidebarMenuItem>

              <SidebarMenuItem
                labelText="3"
                labelType="important"
                link="#"
                title="Calendar"
              />

              <SidebarMenuItem
                labelText="12"
                labelType="warning"
                link="#"
                title="Mailbox"
              />

              <SidebarMenuItem
                mainIcon="fa-folder"
                title="Examples"
              >
                <SidebarMenuItem
                  link="#"
                  title="Invoice"
                />
                <SidebarMenuItem
                  link="#"
                  title="Profile"
                />
                <SidebarMenuItem
                  link="#"
                  title="Login"
                />
                <SidebarMenuItem
                  link="#"
                  title="Register"
                />
                <SidebarMenuItem
                  link="#"
                  title="Lockscreen"
                />
                <SidebarMenuItem
                  link="#"
                  title="404 Error"
                />
                <SidebarMenuItem
                  link="#"
                  title="500 Error"
                />
                <SidebarMenuItem
                  link="#"
                  title="Blank Page"
                />
                <SidebarMenuItem
                  link="#"
                  title="Pace Page"
                />
              </SidebarMenuItem>

              <SidebarMenuItem
                mainIcon="fa-share"
                title="Multilevel"
              >
                <SidebarMenuItem title="Level One" />
                <SidebarMenuItem title="Level One">
                  <SidebarMenuItem title="Level Two" />
                  <SidebarMenuItem title="Level Two">
                    <SidebarMenuItem title="Level Three" />
                    <SidebarMenuItem title="Level Three" />
                  </SidebarMenuItem>
                </SidebarMenuItem>
                <SidebarMenuItem title="Level One" />
              </SidebarMenuItem>

              <SidebarMenuItem
                labelType="none"
                link="#"
                mainIcon="fa-book"
                title="Documentation"
              />

            </SidebarMenu>
            <SidebarMenu title="LABELS">
              <SidebarMenuItem
                labelType="none"
                mainIcon="important"
                title="Important"
              />
              <SidebarMenuItem
                labelType="none"
                mainIcon="warning"
                title="Warning"
              />
              <SidebarMenuItem
                labelType="none"
                mainIcon="information"
                title="Information"
              />
            </SidebarMenu>
          </MainSidebar>

          <div className="content-wrapper">
            <section className="content-header">
              <h1>Documentation</h1>
            </section>
            <section className="content">

              <Documentation />

            </section>
          </div>
        </AdminLTE>
      </div>
    );
  }
}
