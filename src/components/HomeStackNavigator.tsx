import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../containers/home/Home';
import ProductDetails from '../containers/product-details/ProductDetails';

type RootStackParamList = {
  HomePage: undefined;
  Details: {id: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="Details" component={ProductDetails} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
