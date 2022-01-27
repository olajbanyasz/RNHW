import React, {useState} from 'react';
import AppContext from './AppContext';

const AppContextProvider = ({children}) => {
  const emptyUserData = {
    name: '',
    number: '',
    city: '',
    house: '',
    street: '',
    profilePics: 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg',
  };

  const [cart, updateCart] = useState([]);
  const [isUser, setUser] = useState(false);
  const [userData, setUserData] = useState(emptyUserData);

  return (
    <AppContext.Provider
      value={{
        cart,
        updateCart,
        isUser,
        setUser,
        userData,
        setUserData,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
