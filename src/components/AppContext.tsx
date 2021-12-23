import React from 'react';

const AppContext = React.createContext({
  cart: [],
  updateCart: item => {
    cart.push(item);
  },
  isUser: false,
  setUser: (isUser) => {isUser = isUser},
});

export default AppContext;
