/* eslint-env jest */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import red from '../src/styles/skin-red';
import NavItem from '../src/components/Navbar/NavItem';

describe('<NavItem />', () => {
  it('renders correctly with default options', () => {
    const component = renderer.create(<NavItem />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with theme', () => {
    const component = renderer.create(<ThemeProvider theme={red}>
      <NavItem />
    </ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with link', () => {
    const component = renderer.create(<NavItem href="/a/link" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with image', () => {
    const component = renderer.create(<NavItem image="/some/path" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
