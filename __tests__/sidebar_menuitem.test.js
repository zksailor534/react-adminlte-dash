/* eslint-env jest */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import red from '../src/styles/skin-red';
import MenuItem from '../src/components/Sidebar/MenuItem';

describe('<MenuItem />', () => {
  it('renders correctly with default options', () => {
    const component = renderer.create(<MenuItem />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with theme', () => {
    const component = renderer.create(<ThemeProvider theme={red}>
      <MenuItem />
    </ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with active option', () => {
    const component = renderer.create(<MenuItem active />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with collapse option', () => {
    const component = renderer.create(<MenuItem collapse />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with icon options', () => {
    // primary
    const icon = { className: 'fa-dashboard', color: 'primary' };
    const wrapper = mount(<MenuItem icon={icon} />);
    expect(toJson(wrapper)).toMatchSnapshot();

    // success
    icon.color = 'success';
    wrapper.setProps({ icon });
    expect(toJson(wrapper)).toMatchSnapshot();

    // danger
    icon.color = 'danger';
    wrapper.setProps({ icon });
    expect(toJson(wrapper)).toMatchSnapshot();

    // warning
    icon.color = 'warning';
    wrapper.setProps({ icon });
    expect(toJson(wrapper)).toMatchSnapshot();

    // information
    icon.color = 'information';
    wrapper.setProps({ icon });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly with link', () => {
    const testLink = '/some/link';
    const component = renderer.create(<MenuItem
      href={testLink}
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children[0].props.href).toEqual(testLink);
  });

  it('renders correctly with title', () => {
    const testTitle = 'My Title';
    const component = renderer.create(<MenuItem
      title={testTitle}
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with labels', () => {
    const labels = [
      { key: 1, type: 'danger', text: '10' },
      { key: 2, type: 'warning', text: '12' },
      { key: 3, type: 'information', text: '8' },
      { key: 4, type: 'success', text: '12' },
      { key: 5, type: 'other', text: '8' },
    ];
    const component = renderer.create(<MenuItem
      labels={labels}
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with labels while collapsed', () => {
    const labels = [
      { key: 1, type: 'primary', text: '10' },
      { key: 2, type: 'success', text: '12' },
      { key: 3, type: 'other', text: '8' },
    ];
    const component = renderer.create(<MenuItem
      collapse
      labels={labels}
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with multiple levels', () => {
    const title1 = 'Level 1';
    const title2 = 'Level 2';
    const title3 = 'Level 3';
    const wrapper = mount(<MenuItem title={title1}>
      <MenuItem title={title2}>
        <MenuItem title={title3} />
      </MenuItem>
    </MenuItem>);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();

    // Check levels included
    const allMenus = wrapper.find(MenuItem);
    expect(allMenus.get(0).props.title).toEqual(title1);
    expect(allMenus.get(1).props.title).toEqual(title2);
    expect(allMenus.get(2).props.title).toEqual(title3);
  });

  it('renders correctly collapsed with multiple levels', () => {
    const wrapper = mount(<MenuItem collapse>
      <MenuItem />
    </MenuItem>);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('changes properties on hover (level 1)', () => {
    const wrapper = mount(<MenuItem />);

    // simulate hover
    wrapper.find('a').simulate('mouseenter');
    expect(wrapper.state('hover')).toBe(true);
    expect(toJson(wrapper)).toMatchSnapshot();

    // end hover
    wrapper.find('li').simulate('mouseleave');
    expect(wrapper.state('hover')).toBe(false);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('changes properties on hover when collapsed (level 1)', () => {
    const wrapper = mount(<MenuItem collapse >
      <MenuItem />
    </MenuItem>);

    // simulate hover
    wrapper.find('a').first().simulate('mouseenter');
    expect(wrapper.state('hover')).toBe(true);
    expect(toJson(wrapper)).toMatchSnapshot();

    // end hover
    wrapper.find('li').first().simulate('mouseleave');
    expect(wrapper.state('hover')).toBe(false);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('changes properties on hover (level 2-)', () => {
    const wrapper = mount(<MenuItem>
      <MenuItem />
    </MenuItem>);

    const innerMenu = wrapper.find(MenuItem).last();

    // simulate hover
    innerMenu.find('a').simulate('mouseenter');
    expect(toJson(wrapper)).toMatchSnapshot();

    // end hover
    innerMenu.find('li').simulate('mouseleave');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('changes properties on hover when collapsed (level 2-)', () => {
    const wrapper = mount(<MenuItem collapse >
      <MenuItem />
    </MenuItem>);

    const innerMenu = wrapper.find(MenuItem).last();

    // simulate hover
    innerMenu.find('a').first().simulate('mouseenter');
    expect(toJson(innerMenu)).toMatchSnapshot();

    // end hover
    innerMenu.find('li').first().simulate('mouseleave');
    expect(toJson(innerMenu)).toMatchSnapshot();
  });

  it('opens and closes on click', () => {
    const wrapper = mount(<MenuItem>
      <MenuItem />
    </MenuItem>);

    // simulate click to open menu
    wrapper.find('a').first().simulate('click');
    expect(wrapper.state('open')).toBe(true);
    expect(toJson(wrapper)).toMatchSnapshot();

    // simulate click to close menu
    wrapper.find('a').first().simulate('click');
    expect(wrapper.state('open')).toBe(false);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
