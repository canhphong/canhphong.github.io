var redux = require('redux');
var defaultState = {
  array: ['Text 1', 'Text 2', 'Text 3'],
  isAdding: false
};
var reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_IS_ADDING':
      return {...state, isAdding: !state.isAdding}
    case 'ADD_ITEM':
      return {...state, array: [...state.array, action.item]}
    case 'REMOVE_ITEM':
      return {...state, array: state.array.filter((e, i) => i != action.index)}
    default:
      return state;
  }
};

var store = redux.createStore(reducer);
console.log(store.getState());
store.dispatch({type: 'TOGGLE_IS_ADDING'});
console.log(store.getState());

store.dispatch({
  type: 'ADD_ITEM',
  item: 'Unity'
});
console.log(store.getState());

store.dispatch({
  type: 'REMOVE_ITEM',
  index: 1
});

console.log(store.getState());
