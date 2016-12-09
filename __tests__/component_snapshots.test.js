/* eslint-env jest */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import renderer from 'react-test-renderer';

import {
  AdminLTE,
  Header,
  HeaderLogo,
  HeaderMenu,
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSearch,
  SidebarUser,
} from '../src';

describe('Component Snapshots', function () {
  describe('<AdminLTE />', function () {
    it('renders correctly with default options', function () {
      const component = renderer.create(<AdminLTE />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('<Header />', function () {
    it('renders correctly with default options', function () {
      const component = renderer.create(<Header sidebarToggle={() => null} />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('<HeaderLogo />', function () {
    it('renders correctly with default options', function () {
      const component = renderer.create(<HeaderLogo />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('<HeaderMenu />', function () {
    it('renders correctly with default options', function () {
      const component = renderer.create(<HeaderMenu />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('<Sidebar />', function () {
    it('renders correctly with default options', function () {
      const component = renderer.create(<Sidebar />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('<SidebarMenu />', function () {
    it('renders correctly with default options', function () {
      const component = renderer.create(<SidebarMenu />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('<SidebarMenuItem />', function () {
    it('renders correctly with default options', function () {
      const component = renderer.create(<SidebarMenuItem />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('<SidebarSearch />', function () {
    it('renders correctly with default options', function () {
      const component = renderer.create(<SidebarSearch onSearch={() => null} />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('<SidebarUser />', function () {
    it('renders correctly with default options', function () {
      const component = renderer.create(<SidebarUser />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
