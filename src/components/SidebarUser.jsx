import React from 'react';
import classNames from 'classnames';

// User Status Options
// online: text-success
// offline: text-danger
// unknown: text-muted

const SidebarUser = (props) => {
  const { userName, userImageSrc, userStatus, userLink } = props;

  // Set default image if no user image available
  let userImage = <i className="fa fa-user fa-3x" />;
  let statusLink = null;

  if (userImageSrc) {
    userImage = (
      <img
        alt="User"
        className="img-circle"
        src={userImageSrc}
      />
    );
  }

  // Deal with user status
  if (userStatus) {
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
        {userImage}
      </div>
      <div className="pull-left info">
        <p>{userName}</p>
        {statusLink}
      </div>
    </div>
  );
};

SidebarUser.propTypes = {
  userName: React.PropTypes.string,
  userImageSrc: React.PropTypes.string,
  userStatus: React.PropTypes.string,
  userLink: React.PropTypes.string,
};

SidebarUser.defaultProps = {
  userName: 'User Name',
  userStatus: null,
  userLink: '/',
};

export default SidebarUser;
