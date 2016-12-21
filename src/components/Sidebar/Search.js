/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';

import {
  fontFamilyBase,
  fontSizeBase,
  fontWeightBase,
  lineHeightBase,
} from '../../styles/variables';

const StyledIcon = styled.i`
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently not supported by any browser */
`;

const StyledButton = styled.button`
  z-index: 2;
  margin-left: -1px;
  font-size: ${fontSizeBase};
  padding: 6px 12px;
  background-image: none;
  font-family: ${fontFamilyBase};
  line-height: ${lineHeightBase};
  overflow: visible;
  position: relative;
  cursor: pointer;
  vertical-align: middle;
  touch-action: manipulation;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently not supported by any browser */

  /* theme */
  color: ${props => props.theme.sidebarFormButtonColor};
  border-radius: ${props => props.theme.sidebarFormButtonBorderRadius};
  box-shadow: ${props => props.theme.sidebarFormInputBoxShadow};
  background-color: ${props => props.theme.sidebarFormInputBg};
  border: ${props => props.theme.sidebarFormInputBorder};
  height: ${props => props.theme.sidebarFormInputHeight};
`;

const StyledInputButton = styled.span`
  position: relative;
  font-size: 0;
  white-space: nowrap;
  width: 1%;
  vertical-align: middle;
  display: table-cell;
`;

const StyledInput = styled.input`
  -webkit-writing-mode: horizontal-tb;
  -webkit-rtl-ordering: logical;
  user-select: text;
  cursor: auto;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  background-image: none;

  margin: 0;
  font: inherit;
  font-family: inherit;

  /* form-control */
  padding: 6px 12px;
  -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;

  &:not(select) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
  display: table-cell;

  /* theme */
  box-shadow: ${props => props.theme.sidebarFormInputBoxShadow};
  background-color: ${props => props.theme.sidebarFormInputBg};
  border: ${props => props.theme.sidebarFormInputBorder};
  height: ${props => props.theme.sidebarFormInputHeight};
  color: ${props => props.theme.sidebarFormInputColor};
  border-radius: ${props => props.theme.sidebarFormInputBorderRadius};

  &:focus {
    background-color: ${props => props.theme.sidebarFormInputFocusBg};
    color: ${props => props.theme.sidebarFormInputFocusColor};
    border-left-color: ${props => props.theme.sidebarFormInputFocusBorderLeftColor};
  }
`;

const InputGroup = styled.div`
  position: relative;
  display: table;
  border-collapse: separate;

  &:focus { outline: -webkit-focus-ring-color auto 5px; }
`;

const StyledForm = styled.form`
  /* shared */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${fontFamilyBase};
  font-weight: ${fontWeightBase};
  font-size: ${fontSizeBase};
  line-height: ${lineHeightBase};
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  overflow: hidden;
  text-overflow: clip;
  border-radius: ${props => props.theme.sidebarFormBorderRadius || '0'};
  border: ${props => props.theme.sidebarFormBorder || '0'};
  margin: ${props => props.theme.sidebarFormMargin || '0'};

  /* collapse */
  ${props => props.collapse && `
    display: none !important;
    -webkit-transform: translateZ(0);
  `}
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this._changeValue = this.changeValue.bind(this);
    this._buttonClick = this.buttonClick.bind(this);
  }

  changeValue(event) {
    this.setState({ value: event.target.value });
  }

  buttonClick() {
    this.props.onClick(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <StyledForm collapse={this.props.collapse} >
        <InputGroup>
          <StyledInput
            type="text"
            name={this.props.name}
            placeholder={this.props.placeholder}
            value={this.state.value}
            onChange={this._changeValue}
          />
          <StyledInputButton>
            <StyledButton name="searchButton" onClick={this._buttonClick}>
              <StyledIcon className="fa fa-search" />
            </StyledButton>
          </StyledInputButton>
        </InputGroup>
      </StyledForm>
    );
  }
}

Search.propTypes = {
  name: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  onClick: React.PropTypes.func,
  collapse: React.PropTypes.bool,
};

Search.defaultProps = {
  placeholder: 'Search...',
  onClick: v => alert(`Searching for ${v}`),
  collapse: false,
};

export default Search;
