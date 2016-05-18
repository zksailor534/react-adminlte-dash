import React from 'react';
import { shallow, mount } from 'enzyme';
import { Logo } from '../index';
import { expect } from 'chai';
import sinon from 'sinon';
const { describe, it } = global;

describe('Logo', () => {
  it('should show the given text in large format', () => {
    const text = 'The Text';
    const wrapper = shallow(<Logo textLg={text} />);
    expect(wrapper.text()).to.be.equal(text);
  });

  it('should show the given text in mini format', () => {
    const text = 'TXT';
    const wrapper = shallow(<Logo size='mini' textSm={text} />);
    expect(wrapper.text()).to.be.equal(text);
  });

  it('should handle the click event', () => {
    const clickMe = sinon.stub();
    // Here we do a JSDOM render. So, that's why we need to
    // wrap this with a div.
    const wrapper = mount(
      <div>
        <Logo onClick={clickMe}>ClickMe</Logo>
      </div>
    );

    wrapper.find('button').simulate('click');
    expect(clickMe.callCount).to.be.equal(1);
  });
});
