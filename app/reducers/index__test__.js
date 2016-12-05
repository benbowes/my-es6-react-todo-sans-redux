import expect from 'expect';
import { addItem, removeItem } from './index';
import deepFreeze from 'deep-freeze';

const state = { items: [1, 2, 4] };
deepFreeze(state); // Fail if mutation occurs on state object

describe('stateManipulators', () => {

  it('It should add an item to the end of state', () => {
    const result = addItem(state, 5);
    expect( result ).toEqual({ items: [1, 2, 4, 5] });
  });

  it('It should remove an item at the given index', () => {
    const result = removeItem(state, 1);
    expect( result ).toEqual({ items: [1, 4] });
  });

});
