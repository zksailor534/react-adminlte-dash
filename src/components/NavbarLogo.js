import React from 'react';

const styles = {
  base: {
    WebkitTransition: 'width 0.3s ease-in-out',
    OTransition: 'width 0.3s ease-in-out',
    transition: 'width 0.3s ease-in-out',
    display: 'block',
    boxSizing: 'border-box',
    float: 'left',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center',
    WebkitFontSmoothing: 'antialiased',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    padding: '0 15px',
    fontWeight: '300',
    overflow: 'hidden',
    border: '0 solid transparent',
    color: '#ffffff',
    left: '0px',
    width: '230px',
    fontSize: '18px',
  },

  black: {
    backgroundColor: '#ffffff',
    color: '#333333',
    borderRight: '1px solid #eee',
  },

  blackLight: {
    backgroundColor: '#ffffff',
    color: '#333333',
    borderRight: '1px solid #eee',
  },

  blue: {
    backgroundColor: '#367fa9',
    borderRight: '0 solid transparent',
  },

  blueLight: {
    backgroundColor: '#3c8dbc',
    borderRight: '0 solid transparent',
  },

  green: {
    backgroundColor: '#008d4c',
    borderRight: '0 solid transparent',
  },

  greenLight: {
    backgroundColor: '#00a65a',
    borderRight: '0 solid transparent',
  },

  purple: {
    backgroundColor: '#555299',
    borderRight: '0 solid transparent',
  },

  purpleLight: {
    backgroundColor: '#605ca8',
    borderRight: '0 solid transparent',
  },

  red: {
    backgroundColor: '#d73925',
    borderRight: '0 solid transparent',
  },

  redLight: {
    backgroundColor: '#dd4b39',
    borderRight: '0 solid transparent',
  },

  yellow: {
    backgroundColor: '#e08e0b',
    borderRight: '0 solid transparent',
  },

  yellowLight: {
    backgroundColor: '#f39c12',
    borderRight: '0 solid transparent',
  },

  mini: {
    width: '50px',
    display: 'block',
    padding: '0px',
    fontSize: '18px',
  },

  mobile: {
    width: '100%',
    float: 'none',
  },
};

class Logo extends React.Component {
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
    let style = { ...styles.base };

    // Window sizing and collapse
    if (this.state.windowWidth > 767) {
      if (this.props.sidebarCollapse) {
        if (this.props.sidebarMini) {
          style = { ...style, ...styles.mini };
        }
      }
    } else {
      style = { ...style, ...styles.mobile };
    }

    // Skins
    switch (this.props.skin) {
      case 'black':
        style = { ...style, ...styles.black };
        break;
      case 'black-light':
        style = { ...style, ...styles.blackLight };
        break;
      case 'blue':
        style = { ...style, ...styles.blue };
        break;
      case 'blue-light':
        style = { ...style, ...styles.blueLight };
        break;
      case 'green':
        style = { ...style, ...styles.green };
        break;
      case 'green-light':
        style = { ...style, ...styles.greenLight };
        break;
      case 'purple':
        style = { ...style, ...styles.purple };
        break;
      case 'purple-light':
        style = { ...style, ...styles.purpleLight };
        break;
      case 'red':
        style = { ...style, ...styles.red };
        break;
      case 'red-light':
        style = { ...style, ...styles.redLight };
        break;
      case 'yellow':
        style = { ...style, ...styles.yellow };
        break;
      case 'yellow-light':
        style = { ...style, ...styles.yellowLight };
        break;
      default:
        break;
    }

    return style;
  }

  getLogo() {
    if (this.state.windowWidth > 767) {
      if (this.props.sidebarCollapse && this.props.sidebarMini) {
        return this.props.logoSm;
      }
    }
    return this.props.logoLg;
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  render() {
    return (
      <button
        style={this.getStyles()}
        onClick={this.props.onClick}
      >
        {this.getLogo()}
      </button>
    );
  }
}

Logo.propTypes = {
  onClick: React.PropTypes.func,
  sidebarCollapse: React.PropTypes.bool,
  sidebarMini: React.PropTypes.bool,
  skin: React.PropTypes.string,
  logoLg: React.PropTypes.element,
  logoSm: React.PropTypes.element,
};

Logo.defaultProps = {
  sidebarCollapse: false,
  sidebarMini: true,
  skin: 'blue',
  logoLg: <span><b>Admin</b>LTE</span>,
  logoSm: <span><b>A</b>LT</span>,
};

export default Logo;
