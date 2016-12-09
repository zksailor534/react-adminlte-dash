import React from 'react';
import GithubCorner from 'react-github-corner';
import pkgInfo from '../package.json';
import { AdminLTE,
  Header,
  Sidebar,
} from '../src/index';

class App extends React.Component {
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
        <GithubCorner
          href={`https://github.com/${pkgInfo.user}/${pkgInfo.name}`}
          bannerColor="#fff"
          octoColor="#000"
          width={80}
          height={80}
          direction="right"
        />

        <AdminLTE
          layout="fixed"
          sidebarCollapsed={this.state.sidebarCollapse}
          sidebarMini={this.state.sidebarMini}
          skin="blue"
        >
          <Header
            sidebarToggle={this._sidebarToggle}
          />

          {/* Left side column. contains the logo and sidebar */}
          <Sidebar>
            {/* sidebar menu: : style can be found in sidebar.less */}
            {/* Sidebar user panel */}
            <Sidebar.User
              userName="Alexander Pierce"
              userStatus="online"
            />

            {/* search form */}
            <Sidebar.Search
              onSearch={value => (alert(`Searching for: ${value}`))}
            />

            <Sidebar.Menu title="MAIN NAVIGATION">

              <Sidebar.Menu.Item
                mainIcon="fa-dashboard"
                title="Dashboard"
              >
                <Sidebar.Menu.Item
                  link="#"
                  title="Dashboard v1"
                />
                <Sidebar.Menu.Item
                  active
                  link="#"
                  title="Dashboard v2"
                />
              </Sidebar.Menu.Item>

              <Sidebar.Menu.Item
                labelText="4"
                labelType="primary"
                mainIcon="fa-files-o"
                title="Layout Options"
              >
                <Sidebar.Menu.Item
                  link="#"
                  title="Top Navigation"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Boxed"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Fixed"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Collapsed Sidebar"
                />
              </Sidebar.Menu.Item>

              <Sidebar.Menu.Item
                labelText="new"
                labelType="success"
                link="#"
                title="Widgets"
              />

              <Sidebar.Menu.Item
                mainIcon="fa-pie-chart"
                title="Charts"
              >
                <Sidebar.Menu.Item
                  link="#"
                  title="ChartJS"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Morris"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Flot"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Inline charts"
                />
              </Sidebar.Menu.Item>

              <Sidebar.Menu.Item
                mainIcon="fa-laptop"
                title="UI Elements"
              >
                <Sidebar.Menu.Item
                  link="#"
                  title="General"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Icons"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Buttons"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Sliders"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Timeline"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Modals"
                />
              </Sidebar.Menu.Item>

              <Sidebar.Menu.Item
                mainIcon="fa-edit"
                title="Forms"
              >
                <Sidebar.Menu.Item
                  link="#"
                  title="General Elements"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Advanced Elements"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Editors"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Sliders"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Timeline"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Modals"
                />
              </Sidebar.Menu.Item>

              <Sidebar.Menu.Item
                mainIcon="fa-table"
                title="Tables"
              >
                <Sidebar.Menu.Item
                  link="#"
                  title="Simple tables"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Data tables"
                />
              </Sidebar.Menu.Item>

              <Sidebar.Menu.Item
                labelText="3"
                labelType="danger"
                link="#"
                title="Calendar"
              />

              <Sidebar.Menu.Item
                labelText="12"
                labelType="warning"
                link="#"
                title="Mailbox"
              />

              <Sidebar.Menu.Item
                mainIcon="fa-folder"
                title="Examples"
              >
                <Sidebar.Menu.Item
                  link="#"
                  title="Invoice"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Profile"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Login"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Register"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Lockscreen"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="404 Error"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="500 Error"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Blank Page"
                />
                <Sidebar.Menu.Item
                  link="#"
                  title="Pace Page"
                />
              </Sidebar.Menu.Item>

              <Sidebar.Menu.Item
                mainIcon="fa-share"
                title="Multilevel"
              >
                <Sidebar.Menu.Item title="Level One" />
                <Sidebar.Menu.Item title="Level One">
                  <Sidebar.Menu.Item title="Level Two" />
                  <Sidebar.Menu.Item title="Level Two">
                    <Sidebar.Menu.Item title="Level Three" />
                    <Sidebar.Menu.Item title="Level Three" />
                  </Sidebar.Menu.Item>
                </Sidebar.Menu.Item>
                <Sidebar.Menu.Item title="Level One" />
              </Sidebar.Menu.Item>

              <Sidebar.Menu.Item
                labelType="none"
                mainIcon="fa-book"
                title="Documentation"
                active
              />

            </Sidebar.Menu>
            <Sidebar.Menu title="LABELS">
              <Sidebar.Menu.Item
                labelType="none"
                mainIcon="danger"
                title="Important"
              />
              <Sidebar.Menu.Item
                labelType="none"
                mainIcon="warning"
                title="Warning"
              />
              <Sidebar.Menu.Item
                labelType="none"
                mainIcon="information"
                title="Information"
              />
            </Sidebar.Menu>
          </Sidebar>

          {this.props.children}
        </AdminLTE>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
