import React from 'react';
import classNames from 'classnames';

// User Status Options
// online: text-success
// offline: text-danger
// unknown: text-muted

class SidebarMenuUser extends React.Component {
  render() {
    let userImage = <i className="fa fa-user fa-3x"></i>;
    let userStatus = null;

    // Use replacement image if no user image available
    if (this.props.userImage) {
      userImage = <img src={this.props.userImage} className="img-circle" alt="User" />;
    }

    // Deal with user status
    if (this.props.showStatus || !this.props.userStatus) {
      switch (this.props.userStatus.toLowerCase()) {
        case 'online':
          userStatus = (
            <a href={this.props.userLink}>
              <i className={classNames('fa', 'fa-circle', 'text-success')}></i>
              Online
            </a>
          );
          break;
        case 'offline':
          userStatus = (
            <a href={this.props.userLink}>
              <i className={classNames('fa', 'fa-circle', 'text-danger')}></i>
              Offline
            </a>
          );
          break;
        case 'unknown':
          userStatus = (
            <a href={this.props.userLink}>
              <i className={classNames('fa', 'fa-circle', 'text-muted')}></i>
              Unknown
            </a>
          );
          break;
        default:
          break;
      }
    }

    return (
      <div className="user-panel">
        <div className="pull-left image">
          {userImage}
        </div>
        <div className="pull-left info">
          <p>{this.props.userName}</p>
          {userStatus}
        </div>
      </div>
    );
  }
}

SidebarMenuUser.propTypes = {
  userName: React.PropTypes.string,
  userImage: React.PropTypes.string,
  showStatus: React.PropTypes.bool,
  userStatus: React.PropTypes.string,
  userLink: React.PropTypes.string,
};

SidebarMenuUser.defaultProps = {
  userName: 'User Name',
  showStatus: true,
  userStatus: '',
  userLink: '#',
};

export default SidebarMenuUser;
