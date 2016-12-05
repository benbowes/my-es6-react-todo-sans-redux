import expect from 'expect';
import { addItem } from './addItem';
import deepFreeze from 'deep-freeze';

const state = { items: [ 1, 2, 4 ] };
deepFreeze(state); // Fail if mutation occurs on state object

describe('stateManipulators - addItem', () => {

  it('It should add an item to the end of state', () => {
    expect( addItem(state, 5) )
    .toEqual( { items: [ 1, 2, 4, 5] } );
  });

});
