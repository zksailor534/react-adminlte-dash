import React from 'react';
import classNames from 'classnames';

// User Status Options
// online: text-success
// offline: text-danger
// unknown: text-muted

const SidebarMenuUser = (props) => {
  const { userName, userImage, showStatus, userStatus, userLink } = props;

  // Set default image if no user image available
  let user = <i className="fa fa-user fa-3x" />;
  let statusLink = null;

  if (userImage) {
    user = (
      <img
        alt="User"
        className="img-circle"
        src={userImage}
      />
    );
  }

  // Deal with user status
  if (showStatus) {
    switch (userStatus.toLowerCase()) {
      case 'online':
        statusLink = (
          <a href={userLink}>
            <i className={classNames('fa', 'fa-circle', 'text-success')} />
            Online
          </a>
        );
        break;
      case 'offline':
        statusLink = (
          <a href={userLink}>
            <i className={classNames('fa', 'fa-circle', 'text-danger')} />
            Offline
          </a>
        );
        break;
      default:
        statusLink = (
          <a href={userLink}>
            <i className={classNames('fa', 'fa-circle', 'text-muted')} />
            Unknown
          </a>
        );
        break;
    }
  }

  return (
    <div className="user-panel">
      <div className="pull-left image">
        {user}
      </div>
      <div className="pull-left info">
        <p>{userName}</p>
        {statusLink}
      </div>
    </div>
  );
};

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
  userStatus: null,
  userLink: '#',
};

export default SidebarMenuUser;
