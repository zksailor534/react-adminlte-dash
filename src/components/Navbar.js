import React from 'react';
import { FaBars } from 'react-icons/lib/fa';

const styles = {
  mainHeader: {
    position: 'relative',
    overflow: 'hidden',
    maxHeight: '100px',
    zIndex: '1030',
  },

  navbar: {
    WebkitTransition: 'margin-left 0.3s ease-in-out',
    OTransition: 'margin-left 0.3s ease-in-out',
    transition: 'margin-left 0.3s ease-in-out',
    marginBottom: '0px',
    marginLeft: '230px',
    border: 'none',
    minHeight: '50px',
    borderRadius: '0px',
    color: '#ffffff',
  },

  sidebarToggle: {
    float: 'left',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    padding: '16px',
  },

  black: {
    WebkitBoxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
    backgroundColor: '#ffffff',
    color: '#000000',
  },

  blue: {
    WebkitBoxShadow: '0px',
    boxShadow: '0px',
    color: '#ffffff',
    backgroundColor: '#3c8dbc',
  },

  green: {
    WebkitBoxShadow: '0px',
    boxShadow: '0px',
    color: '#ffffff',
    backgroundColor: '#00a65a',
  },

  purple: {
    WebkitBoxShadow: '0px',
    boxShadow: '0px',
    color: '#ffffff',
    backgroundColor: '#605ca8',
  },

  red: {
    WebkitBoxShadow: '0px',
    boxShadow: '0px',
    color: '#ffffff',
    backgroundColor: '#dd4b39',
  },

  yellow: {
    WebkitBoxShadow: '0px',
    boxShadow: '0px',
    color: '#ffffff',
    backgroundColor: '#f39c12',
  },

  mini: {
    marginLeft: '50px',
  },

  mobile: {
    marginLeft: '0',
  },
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  getStyles() {
    let style = { ...styles.mainHeader, ...styles.navbar };

    // Window sizing and collapse
    if (this.state.windowWidth > 767) {
      if (this.props.sidebarCollapse && this.props.sidebarMini) {
        style = { ...style, ...styles.mini };
      }
    } else {
      style = { ...style, ...styles.mobile };
    }

    // Skins
    switch (this.props.skin) {
      case 'black':
      case 'black-light':
        style = { ...style, ...styles.black };
        break;
      case 'blue':
      case 'blue-light':
        style = { ...style, ...styles.blue };
        break;
      case 'green':
      case 'green-light':
        style = { ...style, ...styles.green };
        break;
      case 'purple':
      case 'purple-light':
        style = { ...style, ...styles.purple };
        break;
      case 'red':
      case 'red-light':
        style = { ...style, ...styles.red };
        break;
      case 'yellow':
      case 'yellow-light':
        style = { ...style, ...styles.yellow };
        break;
      default:
        style = { ...style, ...styles.blue };
        break;
    }

    return style;
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  handleToggle(e) {
    e.preventDefault();
    this.props.sidebarToggle();
  }

  render() {
    return (
      <nav style={this.getStyles()} >
        <FaBars
          style={{ ...styles.sidebarToggle }}
          onClick={this.handleToggle.bind(this)}
        />
      </nav>
    );
  }
}

Navbar.propTypes = {
  sidebarCollapse: React.PropTypes.bool,
  sidebarMini: React.PropTypes.bool,
  skin: React.PropTypes.string,
  sidebarToggle: React.PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  sidebarCollapse: false,
  sidebarMini: true,
  skin: 'blue',
};

export default Navbar;
