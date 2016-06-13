import React from 'react';
import Navbar from './Navbar';
import MainSidebar from './MainSidebar';

class AdminLTE extends React.Component {
  render() {
    return (
      <div
        id="adminlte_core"
        className="hold-transition skin-blue sidebar-mini"
      >
        <div className="wrapper">
          <Navbar />

          {/* Left side column. contains the logo and sidebar */}
          <MainSidebar />

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
            <section className="content" style={{ minHeight: '1000px' }} >
              {this.props.children}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

AdminLTE.propTypes = {
  children: React.PropTypes.node,
};

AdminLTE.defaultProps = {
};

export default AdminLTE;
