import React, {useState} from 'react';
import AppContext from './AppContext';

const AppContextProvider = ({children}) => {
  const [cart, updateCart] = useState([]);
  const [isUser, setUser] = useState(false);

  return (
    <AppContext.Provider
      value={{
        cart,
        updateCart,
        isUser,
        setUser,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
