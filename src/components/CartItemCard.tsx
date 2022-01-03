/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../style/stylesheet';
import InputSpinner from 'react-native-input-spinner';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AppContext from '../components/AppContext';

const CartItemCard = ({item}) => {
  const {cart, updateCart} = useContext(AppContext);
  const removeItem = (id: any) => {
    const newCart = cart.filter(cartItem => cartItem.id !== id);
    updateCart(newCart);
  };
  const updateQuantity = (quantity: number) => {
    const newItem = Object.assign({}, item);
    newItem.quantity = quantity;
    const newCart = cart.map(cartItem =>
      cartItem.id === item.id ? newItem : cartItem,
    );
    updateCart(newCart);
  };
  return (
    <View style={styles.cartCardContainer}>
      <View style={styles.cartItemDetailsContainer}>
        <View>
          <Image
            style={styles.cartImageStyle}
            source={require('../assets/pulli.jpg')}
          />
        </View>
        <View style={styles.cartItemTextContainer}>
          <Text>{item.attributes.name}</Text>
          <Text>Color: Black</Text>
          <Text style={styles.itemPrice}>{item.attributes.display_price}</Text>
        </View>
      </View>
      <View style={styles.cartItemCounterContainer}>
        <View style={{flex: 1}} />
        <View style={styles.itemCounterContainer}>
          <InputSpinner
            buttonRightImage={
              <FAIcon name="plus-circle" size={24} color="gray" />
            }
            buttonLeftImage={
              <FAIcon name="minus-circle" size={24} color="gray" />
            }
            buttonStyle={{backgroundColor: '#FFF'}}
            fontSize={18}
            max={10}
            min={1}
            step={1}
            onChange={(num: number) => {
              updateQuantity(num);
            }}
          />
        </View>
        <View style={styles.trashIconContainer}>
          <Icon
            name="md-trash-outline"
            size={24}
            color="gray"
            onPress={() => removeItem(item.id)}
          />
        </View>
      </View>
    </View>
  );
};

export default CartItemCard;
