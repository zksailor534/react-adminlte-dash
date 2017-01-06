/* eslint-env jest */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import red from '../src/styles/skin-red';
import UserPanel from '../src/components/Sidebar/UserPanel';

describe('<UserPanel />', () => {
  it('renders correctly with default options', () => {
    const component = renderer.create(<UserPanel />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with theme', () => {
    const component = renderer.create(<ThemeProvider theme={red}>
      <UserPanel />
    </ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with name', () => {
    const component = renderer.create(<UserPanel name="My Name" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with image', () => {
    const component = renderer.create(<UserPanel image="/some/path" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with link', () => {
    const component = renderer.create(<UserPanel href="/a/link" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with online status option', () => {
    const component = renderer.create(<UserPanel online />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with collapse option', () => {
    const component = renderer.create(<UserPanel collapse />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    const component = renderer.create(<UserPanel >
      <span>Child</span>
    </UserPanel>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
