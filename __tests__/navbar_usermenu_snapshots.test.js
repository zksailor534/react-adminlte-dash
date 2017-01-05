/* eslint-env jest */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import red from '../src/styles/skin-red';
import UserMenu from '../src/components/Navbar/UserMenu';

describe('<UserMenu />', () => {
  it('renders correctly with default options', () => {
    const component = renderer.create(<UserMenu />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with theme', () => {
    const component = renderer.create(<ThemeProvider theme={red}>
      <UserMenu />
    </ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with name', () => {
    const component = renderer.create(<UserMenu name="Another name" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with image', () => {
    const component = renderer.create(<UserMenu image="/some/path" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('opens and closes when clicked', () => {
    const component = renderer.create(<UserMenu />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger open
    tree.props.onClick();
    const treeOpen = component.toJSON();
    expect(treeOpen).toMatchSnapshot();

    // manually trigger close
    treeOpen.props.onClick();
    const treeClosed = component.toJSON();
    expect(treeClosed).toEqual(tree);
  });
});
