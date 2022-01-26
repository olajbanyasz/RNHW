import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStackNavigator from './HomeStackNavigator';
import CartStackNavigator from './CartStackNavigator';
import OrderConfirmationWithAnimation from './OrderConfirmationWithAnimation';
import AnimatedButton from './AnimatedButton';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="Cart" component={CartStackNavigator} />
      <Drawer.Screen
        name="Animation"
        component={OrderConfirmationWithAnimation}
      />
      <Drawer.Screen name="Button Animation" component={AnimatedButton} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
