import React from 'react';

const mainStyles = {
  WebkitTransition: 'width 0.3s ease-in-out',
  OTransition: 'width 0.3s ease-in-out',
  transition: 'width 0.3s ease-in-out',
  display: 'block',
  boxSizing: 'border-box',
  float: 'left',
  height: '50px',
  lineHeight: '50px',
  alignItems: 'center',
  textAlign: 'center',
  WebkitFontSmoothing: 'antialiased',
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  padding: '0 15px',
  fontWeight: '300',
  overflow: 'hidden',
  border: '0 solid transparent',
  color: '#ffffff'
};

class Logo extends React.Component {
  render () {
    const skinStyles = () => {
      switch (this.props.skin) {
        case 'black':
          return {
            backgroundColor: '#ffffff',
            color: '#333333',
            borderRight: '1px solid #eee'
          };
        case 'black-light':
          return {
            backgroundColor: '#ffffff',
            color: '#333333',
            borderRight: '1px solid #eee'
          };
        case 'blue':
          return {
            backgroundColor: '#367fa9'
          };
        case 'blue-light':
          return {
            backgroundColor: '#3c8dbc'
          };
        case 'green':
          return {
            backgroundColor: '#008d4c'
          };
        case 'green-light':
          return {
            backgroundColor: '#00a65a'
          };
        case 'purple':
          return {
            backgroundColor: '#555299'
          };
        case 'purple-light':
          return {
            backgroundColor: '#605ca8'
          };
        case 'red':
          return {
            backgroundColor: '#d73925'
          };
        case 'red-light':
          return {
            backgroundColor: '#dd4b39'
          };
        case 'yellow':
          return {
            backgroundColor: '#e08e0b'
          };
        case 'yellow-light':
          return {
            backgroundColor: '#f39c12'
          };
        default:
          return {};
      }
    };

    const sizeStyles = () => {
      if (!this.props.mobileView) {
        return {
          fontSize: '20px',
          width: '230px'
        };
      } else if (this.props.mini) {
        return {
          width: '50px',
          display: 'block',
          padding: '0px',
          marginLeft: '-15px',
          marginRight: '-15px',
          fontSize: '18px'
        };
      } else if (!this.props.mini) {
        return {
          display: 'none'
        };
      }
    };

    const mergedStyles = {
      ...mainStyles,
      ...skinStyles(),
      ...sizeStyles(),
      ...this.props.style
    };

    const text = () => {
      if (!this.props.mobileView) {
        return this.props.textLg;
      } else {
        return this.props.textSm;
      }
    };

    return (
      <button
        style={mergedStyles}
        onClick={this.props.onClick}
      >
        {text()}
      </button>
    );
  }
}

Logo.propTypes = {
  mini: React.PropTypes.bool,
  mobileView: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  skin: React.PropTypes.string,
  style: React.PropTypes.object,
  textLg: React.PropTypes.string,
  textSm: React.PropTypes.string
};

Logo.defaultProps = {
  mini: true,
  mobileView: false,
  skin: 'blue',
  style: {},
  textLg: 'AdminLTE',
  textSm: 'ALT'
};

export default Logo;
