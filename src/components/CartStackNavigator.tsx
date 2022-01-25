import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Cart from '../containers/cart/Cart';

const Stack = createNativeStackNavigator();

function CartStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

export default CartStackNavigator;
