import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStackNavigator from './HomeStackNavigator';
import CartStackNavigator from './CartStackNavigator';
import OrderConfirmationWithAnimation from './OrderConfirmationWithAnimation';
import AnimatedButton from './AnimatedButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-share';
import {Text, View} from 'react-native';
import MyProfile from '../containers/myProfile/MyProfile';

const Drawer = createDrawerNavigator();

const url = 'https://awesome.contents.com/';
const title = 'Awesome Contents';
const message = 'Please check this out.';

const options = {
  title,
  url,
  message,
};

const share = async (customOptions = options) => {
  try {
    await Share.open(customOptions);
  } catch (err) {
    console.log(err);
  }
};

const ShareComponent = () => {
  useEffect(() => {
    share();
  }, []);
  return (
    <View>
      <Text> </Text>
    </View>
  );
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Group>
        <Drawer.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            drawerIcon: () => <Icon name="ios-home" size={18} />,
            drawerItemStyle: {
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
            },
          }}
        />
        <Drawer.Screen
          name="Cart"
          component={CartStackNavigator}
          options={{
            drawerIcon: () => <Icon name="cart" size={18} />,
          }}
        />
        <Drawer.Screen
          name="Animation"
          component={OrderConfirmationWithAnimation}
          options={{
            drawerIcon: () => <Icon name="construct" size={18} />,
          }}
        />
        <Drawer.Screen
          name="Button Animation"
          component={AnimatedButton}
          options={{
            drawerIcon: () => <Icon name="construct" size={18} />,
          }}
        />
        <Drawer.Screen
          name="Share"
          component={ShareComponent}
          options={{
            drawerIcon: () => <Icon name="md-share-social" size={18} />,
          }}
        />
      </Drawer.Group>
      <Drawer.Screen
        name="My Profile"
        component={MyProfile}
        options={{
          drawerIcon: () => <Icon name="person" size={18} />,
          drawerItemStyle: {
            borderTopWidth: 1,
            borderTopColor: '#ddd',
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
