import React from 'react';

const AppContext = React.createContext({
  cart: [],
  updateCart: (item: any) => {
    cart.push(item);
  },
  isUser: false,
  setUser: (user: any) => user,
  userData: {
    name: '',
    number: '',
    street: '',
    house: '',
    city: '',
    profilePics: '',
  },
  setUserData: (data: any) => {
    userData = data;
  },
});

export default AppContext;
