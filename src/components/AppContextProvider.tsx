import React, {useState} from 'react';
import AppContext from './AppContext';

const AppContextProvider = ({children}) => {
  const [cart, updateCart] = useState([]);
  return (
    <AppContext.Provider
      value={{
        cart,
        updateCart,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
