import React from 'react';

const AppContext = React.createContext({
  cart: [],
  updateCart: item => {
    cart.push(item);
  },
});

export default AppContext;
