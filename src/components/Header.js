import styled from 'styled-components';

const Header = styled.header`
  position: ${props => (props.fixed ? 'fixed' : 'relative')};
  max-height: 100px;
  z-index: 1030;
`;

export default Header;
