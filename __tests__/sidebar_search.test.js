/* eslint-env jest */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import red from '../src/styles/skin-red';
import Search from '../src/components/Sidebar/Search';

describe('<Search />', () => {
  it('renders correctly with default options', () => {
    const component = renderer.create(<Search />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with theme', () => {
    const component = renderer.create(<ThemeProvider theme={red}>
      <Search />
    </ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with input field name', () => {
    const component = renderer.create(<Search name="Field" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with placeholder', () => {
    const component = renderer.create(<Search placeholder="???" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with collapse option', () => {
    const component = renderer.create(<Search collapse />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('returns a value from input to onClick function', () => {
    const value = 'Search value';
    const f = jest.fn();
    const wrapper = mount(<Search
      name="searchField"
      onClick={f}
    />);
    wrapper.find('input').simulate('change', { target: { value } });
    expect(wrapper.state().value).toEqual(value);
    wrapper.find('button[name="searchButton"]').simulate('click');
    expect(f).toHaveBeenCalled();
    expect(f).toHaveBeenLastCalledWith('Search value');
  });
});
