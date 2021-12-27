/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements';
import styles from '../../style/stylesheet';
import EmptyCart from '../../components/EmptyCart';
import LoginFirst from '../../components/LoginFirst';
import OrderConfirmation from '../../components/OrderConfirmation';
import {Text, View} from 'react-native';
import AppContext from '../../components/AppContext';
import CartContent from '../../components/CartContent';



const Cart = ({navigation}) => {
  const {cart, isUser} = useContext(AppContext);
  const userWithSelectedItems = isUser && !!cart.length;
  const userWithoutSelectedItems = isUser && !cart.length;
  return (
    <View style={styles.cartContainer}>
      <Header
        leftComponent={<Icon name="arrow-back" size={30} color="#fff" onPress={() => navigation.goBack()} />}
        centerComponent={<Text style={styles.headerText}>My Cart</Text>}
      />
      {!isUser && <LoginFirst navigation={navigation} />}
      {userWithoutSelectedItems && <EmptyCart navigation={navigation} />}
      {userWithSelectedItems && <CartContent navigation={navigation}/>}
    </View>
  );
};

export default Cart;
