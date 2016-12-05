
export const addItem = ( state, newItem ) => ({
  items: [
    ...state.items,
    newItem
  ]
});

export const removeItem = ( state, itemIndex ) => ({
  items: [
    ...state.items.slice( 0, itemIndex ),
    ...state.items.slice( itemIndex + 1 )
  ]
});
