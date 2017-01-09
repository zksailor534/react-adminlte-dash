/* eslint-env jest */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import red from '../src/styles/skin-red';
import Menu from '../src/components/Sidebar/Menu';

describe('<Menu />', () => {
  it('renders correctly with default options', () => {
    const component = renderer.create(<Menu />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with theme', () => {
    const component = renderer.create(<ThemeProvider theme={red}>
      <Menu />
    </ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with header', () => {
    const component = renderer.create(<Menu header="A Header" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with collapse option', () => {
    const component = renderer.create(<Menu collapse />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    const component = renderer.create(<Menu >
      <span>Child</span>
    </Menu>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
