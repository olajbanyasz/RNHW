/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements';
import styles from '../../style/stylesheet';
import EmptyCart from '../../components/EmptyCart';
import LoginFirst from '../../components/LoginFirst';
import OrderConfirmation from '../../components/OrderConfirmation';
import { Text, View } from 'react-native';

const Cart = ({navigation}) => {
  return (
    <View style={styles.cartContainer}>
      <Header
        leftComponent={<Icon name="arrow-back" size={30} color="#fff" onPress={() => navigation.goBack()} />}
        centerComponent={<Text style={styles.headerText}>My Cart</Text>}
      />
      <OrderConfirmation navigation={navigation}/>
    </View>
  );
};

export default Cart;
