import expect from 'expect';
import { removeItem } from './removeItem';
import deepFreeze from 'deep-freeze';

const state = { items: [ 1, 2, 4 ] };
deepFreeze(state); // Fail if mutation occurs on state object

describe('stateManipulators - removeItem', () => {

  it('It should add an item to the end of state', () => {
    expect( removeItem(state, 1) )
    .toEqual({ items: [ 1, 4 ] });
  });

});
