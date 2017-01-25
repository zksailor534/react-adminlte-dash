/* eslint-env jest */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

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

  it('renders onClick correctly', () => {
    const func = () => null;
    const wrapper = mount(<NavItem onClick={func} />);
    expect(wrapper.find('a').props().onClick).toEqual(func);
  });

  it('renders link correctly', () => {
    const component = renderer.create(<NavItem href="/a/link" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with icon class', () => {
    const component = renderer.create(<NavItem href="/a/link" iconClass="fa fa-github" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with image', () => {
    const component = renderer.create(<NavItem href="/a/link" image="/some/path" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
