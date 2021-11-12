import React from 'react';
import { shallow, mount } from 'enzyme';
import ButtonLink from './Link';

describe('ButtonLink', () => {
  let wrapper;
  let props = {
    link: '/some_link',
    text: 'Some text',
  };

  beforeEach(() => {
    wrapper = shallow(<ButtonLink {...props} />);
  });

  it('should be able to mount', () => {
    mount(<ButtonLink {...props} />);
  });

  it('should have one Link element', () => {
    const link = wrapper.find('Link');

    expect(link.length).toEqual(1);
    expect(link.props().to).toEqual(props.link);
    expect(link.props().className).toEqual('button large');
    expect(link.text()).toEqual(props.text);
  });

  it('should pass in rest of props with className overiding defaults', () => {
    props = {
      ...props,
      className: 'button large next',
    };
    wrapper = shallow(<ButtonLink {...props} />);

    const link = wrapper.find('Link');

    expect(link.props().className).toEqual('button large next');
  });
});
