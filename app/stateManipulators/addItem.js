export const addItem = ( state, newItem ) => ({
  items: [
    ...state.items,
    newItem
  ]
});
