import React, { Component } from 'react';
import classnames from 'classnames';

export class AdminLTE extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Skin color
      color: props.skinColor,

      // Controls collapsing sidebar in full size views
      collapsedSidebar: false,

      // Controls opening sidebar in small views
      openSidebar: false,

      // Controls whether sidebar reduces to 50px (true) or disappears (false)
      miniSidebar: props.miniSidebar,

      // Controls whether control sidebar slides over content
      controlSidebarSlide: props.slideSidebar,

      // Controls visibility of right sidebar (push over content)
      controlSidebarVisible: false
    };
  }

  toggleSidebar() {
    this.setState({

      // Controls collapsing sidebar in full size views
      collapsedSidebar: !this.state.collapsedSidebar,

      // Controls opening sidebar in small views
      openSidebar: this.state.collapsedSidebar
    });
  }

  toggleControlSidebar() {
    this.setState({
      controlSidebarVisible: !this.state.controlSidebarVisible
    });
  }

  render() {
    // Control root div classes
    let rootClasses = classnames('hold-transition',
      this.state.color,
      {'sidebar-mini': this.state.miniSidebar},
      {'sidebar-collapse': this.state.collapsedSidebar},
      {'sidebar-open': !this.state.collapsedSidebar},
      {'control-sidebar-open': !this.state.controlSidebarSlide && this.state.controlSidebarVisible}
    );

    // Control classes for control sidebar
    let controlSidebarClasses = classnames('control-sidebar',
      'control-sidebar-dark',
      {'control-sidebar-open': this.state.controlSidebarSlide && this.state.controlSidebarVisible}
    );

    return (
      <div className={rootClasses}>
        <div className="wrapper">
          <header className="main-header">
            <a  className="logo" href="/">
              <span className="logo-mini">ALT</span>
              <span className="logo-lg">AdminLTE</span>
            </a>

            {/*Header Navbar*/}
            <nav className="navbar navbar-static-top">
              {/*Sidebar toggle button*/}
              <button className="sidebar-toggle" onClick={() => this.toggleSidebar()}></button>
              {/*Navbar Right Menu*/}
              <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                  {/*Control Sidebar Toggle Button
                  <li>
                    <button onClick={() => this.toggleControlSidebar()}>
                      <i className="fa fa-gears"></i>
                    </button>
                  </li>*/}
                </ul>
              </div>
            </nav>
          </header>

          {/* Left side column. contains the logo and sidebar */}
          <aside className="main-sidebar">
            <section className="sidebar">
              <ul className="sidebar-menu">
                <li className="header">MAIN NAVIGATION</li>
              </ul>
            </section>
          </aside>

          {/*Enable hide menu when clicking on the content-wrapper on small screens
            TBD: differentiate small screens*/}
          <div className="content-wrapper" onClick={() => this.toggleSidebar()}>
            {this.props.children}
          </div>

          {/*{/*Control Sidebar*/}
          <aside className={controlSidebarClasses}>
            {/*Create the tabs*/}
            <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
              <li><a data-toggle="tab" href="#control-sidebar-home-tab"><i className="fa fa-home"></i></a></li>
              <li><button><i className="fa fa-gears"></i></button></li>
            </ul>
            {/*Tab panes*/}
            <div className="tab-content">
            </div>
          </aside>
          {/*Add the sidebar's background. This div must be placed
          immediately after the control sidebar*/}
          <div className="control-sidebar-bg"></div>*/}

        </div>
      </div>
    )
  }
}

AdminLTE.propTypes = {
  // Skin color
  skinColor: React.PropTypes.string,

  // Controls whether sidebar reduces to 50px (true) or disappears (false)
  miniSidebar: React.PropTypes.bool,

  // Enable control sidebar slide over content
  slideSidebar: React.PropTypes.bool,

  // Component children
  children: React.PropTypes.element
};

AdminLTE.defaultProps = {
  skinColor: 'skin-blue',
  miniSidebar: true,
  slideSidebar: true
};
