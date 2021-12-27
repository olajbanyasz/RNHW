import React from 'react';

const AppContext = React.createContext({
  cart: [],
  updateCart: (item: any) => {
    cart.push(item);
  },
  isUser: false,
  setUser: (user: any) => user,
});

export default AppContext;
