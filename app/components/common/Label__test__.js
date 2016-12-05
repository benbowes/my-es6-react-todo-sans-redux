import expect from 'expect';
import Label from './Label';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

describe('<Label />', () => {

  it(`It should set default props`, () => {
    const defaultProps = {
      children: undefined
    };
    shallowRenderer.render(
      <Label />
    );
    const result = shallowRenderer.getRenderOutput();
    expect( result.props ).toEqual( defaultProps );
  });

  it(`It should add child text when it receives "props.label"`, () => {
    shallowRenderer.render(
      <Label>Some label text</Label>
    );
    const result = shallowRenderer.getRenderOutput();
    expect( result.props.children ).toEqual( 'Some label text' );
  });

});
