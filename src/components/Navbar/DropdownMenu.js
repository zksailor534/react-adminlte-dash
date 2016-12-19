import styled from 'styled-components';

import {
  baseColor,
  fontFamilyBase,
  fontSizeBase,
  fontWeightBase,
  lineHeightBase,
  screenSmMax,
} from '../../styles/variables';

const DropdownMenu = styled.ul`
  /* shared */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 40px;
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
  color: ${baseColor};
  font-size: ${fontSizeBase};
  line-height: ${lineHeightBase};
  text-align: left;
  font-family: ${fontFamilyBase};
  font-weight: ${fontWeightBase};

  position: absolute;
  top: 100%;
  left: auto;
  right: 0;
  z-index: 1000;
  display: ${props => (props.open ? 'block' : 'none')};
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.15);
  -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
  border-color: #eee;

  /* media queries */
  @media (max-width: ${screenSmMax}) {
    position: absolute;
    right: 5%;
    left: auto;
    border: 1px solid #ddd;
    background: #fff;
  }
`;

export default DropdownMenu;
