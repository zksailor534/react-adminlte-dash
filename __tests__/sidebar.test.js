/* eslint-env jest */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import red from '../src/styles/skin-red';
import Sidebar from '../src/components/Sidebar';

describe('<Sidebar />', () => {
  it('renders correctly with default options', () => {
    const component = renderer.create(<Sidebar />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with theme', () => {
    const component = renderer.create(<ThemeProvider theme={red}>
      <Sidebar />
    </ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with fixed option', () => {
    const component = renderer.create(<Sidebar fixed />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with collapsed option', () => {
    const component = renderer.create(<Sidebar sidebarCollapse />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with fixed and collapsed options', () => {
    const component = renderer.create(
      <Sidebar fixed sidebarCollapse />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with mini option', () => {
    const component = renderer.create(<Sidebar sidebarMini />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with mini and fixed options', () => {
    const component = renderer.create(<Sidebar sidebarMini fixed />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with mini and collapsed options', () => {
    const component = renderer.create(
      <Sidebar sidebarMini sidebarCollapse />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with mini, fixed, and collapsed options', () => {
    const component = renderer.create(
      <Sidebar sidebarMini fixed sidebarCollapse />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    const component = renderer.create(<Sidebar >
      <span>Child</span>
    </Sidebar>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
