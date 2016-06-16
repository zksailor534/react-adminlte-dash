import React from 'react';
import { shallow, mount } from 'enzyme';
import SidebarMenuItem from '../components/SidebarMenuItem';
import { expect } from 'chai';
// import sinon from 'sinon';
const { describe, it } = global;

describe('SidebarMenuItem', () => {
  it('should render without any input', () => {
    const text = 'Tree-View';
    const wrapper = shallow(<SidebarMenuItem />);
    expect(wrapper.text()).to.be.equal(text);
  });

  it('should show the given title text', () => {
    const text = 'The Text';
    const wrapper = shallow(<SidebarMenuItem title={text} />);
    expect(wrapper.text()).to.be.equal(text);
  });

  it('should set active class on click', () => {
    const wrapper = shallow(<SidebarMenuItem />);
    wrapper.find('a').simulate('click');
    expect(wrapper.hasClass('active')).to.be.equal(true);
  });

  it('should render any children elements', () => {
    const child = <div id="child" />;
    const wrapper = shallow(
      <SidebarMenuItem>
        <child />
      </SidebarMenuItem>
    );
    expect(wrapper.contains(<child />)).to.be.equal(true);
  });
});
