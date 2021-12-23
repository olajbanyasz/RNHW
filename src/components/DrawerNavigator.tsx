import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStackNavigator from './HomeStackNavigator';
import CartStackNavigator from './CartStackNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="Cart" component={CartStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
