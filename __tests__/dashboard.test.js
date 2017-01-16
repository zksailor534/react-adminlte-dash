/* eslint-env jest */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Dashboard from '../src/components/Dashboard';
import Sidebar from '../src/components/Sidebar';

describe('<Dashboard />', () => {
  it('renders correctly with no options', () => {
    const wrapper = mount(<Dashboard />);
    expect(toJson(wrapper)).toMatchSnapshot();

    // Default options
    expect(wrapper.state('sidebarCollapse')).toEqual(false);
    expect(wrapper.prop('initialCollapse')).toEqual(false);
    expect(wrapper.props().fixed).toEqual(false);
    expect(wrapper.props().initialCollapse).toEqual(false);
    expect(wrapper.props().theme).toEqual('skin-blue');
  });

  it('renders correctly with fixed option', () => {
    const component = renderer.create(<Dashboard fixed />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with sidebarMini option', () => {
    const component = renderer.create(<Dashboard sidebarMini />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with fixed and sidebarMini options', () => {
    const component = renderer.create(<Dashboard fixed sidebarMini />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with initialCollapse option', () => {
    const wrapper = mount(<Dashboard initialCollapse />);
    expect(wrapper.state('sidebarCollapse')).toEqual(true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly with initialCollapse and sidebarMini options', () => {
    const component = renderer.create(<Dashboard initialCollapse sidebarMini />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with fixed, initialCollapse, and sidebarMini options', () => {
    const component = renderer.create(<Dashboard fixed initialCollapse sidebarMini />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with black theme', () => {
    const component = renderer.create(<Dashboard theme="skin-black" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with black-light theme', () => {
    const component = renderer.create(<Dashboard theme="skin-black-light" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with blue theme', () => {
    const component = renderer.create(<Dashboard theme="skin-blue" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with blue-light theme', () => {
    const component = renderer.create(<Dashboard theme="skin-blue-light" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with green theme', () => {
    const component = renderer.create(<Dashboard theme="skin-green" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with green-light theme', () => {
    const component = renderer.create(<Dashboard theme="skin-green-light" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with purple theme', () => {
    const component = renderer.create(<Dashboard theme="skin-purple" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with purple-light theme', () => {
    const component = renderer.create(<Dashboard theme="skin-purple-light" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with red theme', () => {
    const component = renderer.create(<Dashboard theme="skin-red" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with red-light theme', () => {
    const component = renderer.create(<Dashboard theme="skin-red-light" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with yellow theme', () => {
    const component = renderer.create(<Dashboard theme="skin-yellow" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with yellow-light theme', () => {
    const component = renderer.create(<Dashboard theme="skin-yellow-light" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with given logo href', () => {
    const href = '/some/link';
    const wrapper = mount(<Dashboard logoHref={href} />);
    expect(wrapper.find('[name="navbar-logo"]').props().href).toEqual(href);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly with given large logo', () => {
    const logo = <span>Large</span>;
    const wrapper = mount(<Dashboard logoLg={logo} />);
    expect(wrapper.find('[name="navbar-logo-lg"]').children()
      .matchesElement(logo)).toEqual(true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly with given small logo', () => {
    const logo = <span>Small</span>;
    const wrapper = mount(<Dashboard logoSm={logo} />);
    expect(wrapper.find('[name="navbar-logo-sm"]').children()
      .matchesElement(logo)).toEqual(true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders navbar children correctly', () => {
    const child = <span>A Child</span>;
    const wrapper = mount(<Dashboard navbarChildren={child} />);
    expect(wrapper.find('[name="navbar-menu-wrapper"]').children()
      .matchesElement(child)).toEqual(true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders sidebar children correctly', () => {
    const child = <Sidebar.Menu header="Child" />;
    const wrapper = mount(<Dashboard sidebarChildren={child} />);
    expect(wrapper.find('[name="sidebar-wrapper"]').children()
      .matchesElement(child)).toEqual(true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    const child = <span>A Child</span>;
    const wrapper = mount(<Dashboard>{child}</Dashboard>);
    expect(wrapper.find('[name="content-wrapper"]').children()
      .matchesElement(child)).toEqual(true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('opens and closes sidebar on sidebar toggle click', () => {
    const wrapper = mount(<Dashboard />);

    // simulate click to open menu
    wrapper.find('[name="sidebar-toggle"]').simulate('click');
    expect(wrapper.state('sidebarCollapse')).toBe(true);
    expect(toJson(wrapper)).toMatchSnapshot();

    // simulate click to close menu
    wrapper.find('[name="sidebar-toggle"]').simulate('click');
    expect(wrapper.state('sidebarCollapse')).toBe(false);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('opens and closes sidebar with sidebarMini on sidebar toggle click', () => {
    const wrapper = mount(<Dashboard sidebarMini />);

    // simulate click to open menu
    wrapper.find('[name="sidebar-toggle"]').simulate('click');
    expect(wrapper.state('sidebarCollapse')).toBe(true);
    expect(toJson(wrapper)).toMatchSnapshot();

    // simulate click to close menu
    wrapper.find('[name="sidebar-toggle"]').simulate('click');
    expect(wrapper.state('sidebarCollapse')).toBe(false);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
