var initialState = [
  {
    id: 1,
    name: 'Iphone 10',
    image: 'https://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg',
    description: 'San pham do AppleInc san xuat',
    price: 500,
    inventory: 10,
    rating: 4
  },
  {
    id: 2,
    name: 'Samsung Galaxy S8',
    image: 'https://staticshop.o2.co.uk/product/images/samsung_galaxy_s8_64gb_midnight_black_front_sku_header.png?cb=b1e52dd9252967784a9580c9de7ea7e3',
    description: 'San pham do Samsung san xuat',
    price: 400,
    inventory: 20,
    rating: 3
  },
  {
    id: 3,
    name: 'Oppo Camera 5',
    image: 'https://www.91-img.com/pictures/oppo-f5-mobile-phone-large-1.jpg',
    description: 'San pham do China san xuat',
    price: 300,
    inventory: 15,
    rating: 5
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default: return [...state];
  }
}


export default products;
