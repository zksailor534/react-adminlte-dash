/* eslint-env jest */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import red from '../src/styles/skin-red';
import Header from '../src/components/Header';

describe('<Header />', () => {
  it('renders correctly with default options', () => {
    const component = renderer.create(<Header sidebarToggle={() => null} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with theme', () => {
    const component = renderer.create(<ThemeProvider theme={red}>
      <Header sidebarToggle={() => null} />
    </ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with fixed option', () => {
    const component = renderer.create(<Header fixed sidebarToggle={() => null} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with collapsed option', () => {
    const component = renderer.create(<Header sidebarCollapse sidebarToggle={() => null} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with fixed and collapsed options', () => {
    const component = renderer.create(
      <Header fixed sidebarCollapse sidebarToggle={() => null} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with given large logo', () => {
    const component = renderer.create(
      <Header
        logoLg={<span>Large</span>}
        sidebarToggle={() => null}
      />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with given small logo', () => {
    const component = renderer.create(
      <Header
        logoSm={<span>Small</span>}
        sidebarToggle={() => null}
      />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
