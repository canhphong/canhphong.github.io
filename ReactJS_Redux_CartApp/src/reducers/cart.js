import * as types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
  {
    product : {
      id: 1,
      name: 'Iphone 10',
      image: 'https://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg',
      description: 'San pham do AppleInc san xuat',
      price: 500,
      inventory: 10,
      rating: 4
    },
    quantity: 5
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      console.log(action);
      return [...state];
    default: return [...state];
  }
}

export default cart;
