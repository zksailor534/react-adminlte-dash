import React from 'react';
import ReactDOM from 'react-dom';
import { AdminLTE,
  Navbar,
  MainSidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSearch,
  SidebarMenuUser,
  DropdownMenu } from '.';

import user2 from './styles/img/user2-160x160.jpg';
import user3 from './styles/img/user3-128x128.jpg';
import user4 from './styles/img/user4-128x128.jpg';

// Create target element
const target = document.createElement('div');
target.id = 'render-target';
document.body.appendChild(target);

class Demo extends React.Component {
  /* eslint no-alert: 0 */
  constructor(props) {
    super(props);
    this.state = {
      sidebarCollapse: false,
      sidebarMini: true,
    };
  }

  sidebarToggle() {
    this.setState({
      sidebarCollapse: !this.state.sidebarCollapse,
    });
  }

  render() {
    return (
      <AdminLTE
        skin="blue"
        sidebarMini={this.state.sidebarMini}
        layout="fixed"
        sidebarCollapsed={this.state.sidebarCollapse}
      >
        <Navbar
          sidebarToggle={this.sidebarToggle.bind(this)}
        >
          <DropdownMenu
            type="messages"
          >
            <ul className="dropdown-menu">
              <li className="header">You have 4 messages</li>
              <li>
                {/* inner menu: contains the actual data */}
                <ul className="menu">
                  <li>{/* start message */}
                    <a href="#">
                      <div className="pull-left">
                        <img src={user2} className="img-circle" alt="User" />
                      </div>
                      <h4>
                        Support Team
                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  {/* end message */}
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img src={user3} className="img-circle" alt="User" />
                      </div>
                      <h4>
                        AdminLTE Design Team
                        <small><i className="fa fa-clock-o"></i> 2 hours</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img src={user4} className="img-circle" alt="User" />
                      </div>
                      <h4>
                        Developers
                        <small><i className="fa fa-clock-o"></i> Today</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img src={user3} className="img-circle" alt="User" />
                      </div>
                      <h4>
                        Sales Department
                        <small><i className="fa fa-clock-o"></i> Yesterday</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img src={user4} className="img-circle" alt="User" />
                      </div>
                      <h4>
                        Reviewers
                        <small><i className="fa fa-clock-o"></i> 2 days</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer"><a href="#">See All Messages</a></li>
            </ul>
          </DropdownMenu>
        </Navbar>

        {/* Left side column. contains the logo and sidebar */}
        <MainSidebar>
          {/* sidebar menu: : style can be found in sidebar.less */}
          {/* Sidebar user panel */}
          <SidebarMenuUser
            userName="Alexander Pierce"
            userStatus="online"
            userImage={user2}
          />

          {/* search form */}
          <SidebarMenuSearch
            onSearch={ (value) => (alert(`Searching for: ${value}`)) }
          />

          <SidebarMenu title="MAIN NAVIGATION">

            <SidebarMenuItem
              title="Dashboard"
              mainIcon="fa-dashboard"
            >
              <SidebarMenuItem
                title="Dashboard v1"
                link="index.html"
              />
              <SidebarMenuItem
                title="Dashboard v2"
                link="index2.html"
                active
              />
            </SidebarMenuItem>

            <SidebarMenuItem
              title="Layout Options"
              mainIcon="fa-files-o"
              labelType="information"
              labelText="4"
            >
              <SidebarMenuItem
                title="Top Navigation"
                link="pages/layout/top-nav.html"
              />
              <SidebarMenuItem
                title="Boxed"
                link="pages/layout/boxed.html"
              />
              <SidebarMenuItem
                title="Fixed"
                link="pages/layout/fixed.html"
              />
              <SidebarMenuItem
                title="Collapsed Sidebar"
                link="pages/layout/collapsed-sidebar.html"
              />
            </SidebarMenuItem>

            <SidebarMenuItem
              title="Widgets"
              link="pages/widgets.html"
              labelType="green"
              labelText="new"
            />

            <SidebarMenuItem
              title="Charts"
              mainIcon="fa-pie-chart"
            >
              <SidebarMenuItem
                title="ChartJS"
                link="pages/charts/chartjs.html"
              />
              <SidebarMenuItem
                title="Morris"
                link="pages/charts/morris.html"
              />
              <SidebarMenuItem
                title="Flot"
                link="pages/charts/flot.html"
              />
              <SidebarMenuItem
                title="Inline charts"
                link="pages/charts/inline.html"
              />
            </SidebarMenuItem>

            <SidebarMenuItem
              title="UI Elements"
              mainIcon="fa-laptop"
            >
              <SidebarMenuItem
                title="General"
                link="pages/UI/general.html"
              />
              <SidebarMenuItem
                title="Icons"
                link="pages/UI/icons.html"
              />
              <SidebarMenuItem
                title="Buttons"
                link="pages/UI/buttons.html"
              />
              <SidebarMenuItem
                title="Sliders"
                link="pages/UI/sliders.html"
              />
              <SidebarMenuItem
                title="Timeline"
                link="pages/UI/timeline.html"
              />
              <SidebarMenuItem
                title="Modals"
                link="pages/UI/modals.html"
              />
            </SidebarMenuItem>

            <SidebarMenuItem
              title="Forms"
              mainIcon="fa-edit"
            >
              <SidebarMenuItem
                title="General Elements"
                link="pages/forms/general.html"
              />
              <SidebarMenuItem
                title="Advanced Elements"
                link="pages/forms/advanced.html"
              />
              <SidebarMenuItem
                title="Editors"
                link="pages/forms/editors.html"
              />
              <SidebarMenuItem
                title="Sliders"
                link="pages/UI/sliders.html"
              />
              <SidebarMenuItem
                title="Timeline"
                link="pages/UI/timeline.html"
              />
              <SidebarMenuItem
                title="Modals"
                link="pages/UI/modals.html"
              />
            </SidebarMenuItem>

            <SidebarMenuItem
              title="Tables"
              mainIcon="fa-table"
            >
              <SidebarMenuItem
                title="Simple tables"
                link="pages/tables/simple.html"
              />
              <SidebarMenuItem
                title="Data tables"
                link="pages/tables/data.html"
              />
            </SidebarMenuItem>

            <SidebarMenuItem
              title="Calendar"
              link="pages/calendar.html"
              labelType="important"
              labelText="3"
            />

            <SidebarMenuItem
              title="Mailbox"
              link="pages/mailbox/mailbox.html"
              labelType="warning"
              labelText="12"
            />

            <SidebarMenuItem
              title="Examples"
              mainIcon="fa-folder"
            >
              <SidebarMenuItem
                title="Invoice"
                link="pages/examples/invoice.html"
              />
              <SidebarMenuItem
                title="Profile"
                link="pages/examples/profile.html"
              />
              <SidebarMenuItem
                title="Login"
                link="pages/examples/login.html"
              />
              <SidebarMenuItem
                title="Register"
                link="pages/examples/register.html"
              />
              <SidebarMenuItem
                title="Lockscreen"
                link="pages/examples/lockscreen.html"
              />
              <SidebarMenuItem
                title="404 Error"
                link="pages/examples/404.html"
              />
              <SidebarMenuItem
                title="500 Error"
                link="pages/examples/500.html"
              />
              <SidebarMenuItem
                title="Blank Page"
                link="pages/examples/blank.html"
              />
              <SidebarMenuItem
                title="Pace Page"
                link="pages/examples/pace.html"
              />
            </SidebarMenuItem>

            <SidebarMenuItem
              title="Multilevel"
              mainIcon="fa-share"
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
              title="Documentation"
              mainIcon="fa-book"
              link="documentation/index.html"
              labelType="none"
            />

          </SidebarMenu>
          <SidebarMenu title="LABELS">
            <SidebarMenuItem
              title="Important"
              mainIcon="important"
              labelType="none"
            />
            <SidebarMenuItem
              title="Warning"
              mainIcon="warning"
              labelType="none"
            />
            <SidebarMenuItem
              title="Information"
              mainIcon="information"
              labelType="none"
            />
          </SidebarMenu>
        </MainSidebar>

        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <h1>
              Dashboard
              <small>Version 2.0</small>
            </h1>
            <ol className="breadcrumb">
              <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
              <li className="active">Dashboard</li>
            </ol>
          </section>

          {/* Main content */}
          <section className="content" style={{ minHeight: '1000px' }} />
        </div>
      </AdminLTE>
    );
  }
}

// Render React components in element
ReactDOM.render(
  <Demo />,
  document.getElementById('render-target')
);
