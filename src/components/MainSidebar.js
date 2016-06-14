import React from 'react';

import user2 from '../styles/img/user2-160x160.jpg';

class MainSidebar extends React.Component {
  render() {
    return (
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel">
            <div className="pull-left image">
              <img src={user2} className="img-circle" alt="User" />
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>
              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>
          {/* search form */}
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                    <i className="fa fa-search"></i>
                  </button>
                </span>
            </div>
          </form>
          {this.props.children}
        </section>
        {/* /.sidebar */}
      </aside>
    );
  }
}

MainSidebar.propTypes = {
  children: React.PropTypes.node,
};

MainSidebar.defaultProps = {
};

export default MainSidebar;
