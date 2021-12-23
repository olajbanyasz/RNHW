/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../style/stylesheet';

const EmptyCart = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#FFF', marginTop: '30%'}}>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Icon name="ios-cart-outline" size={180} color="#f39649" />
        <Text style={{fontWeight: '700', fontSize: 20, ...styles.centeredText}}>
          Your Cart is Empty
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 14,
            ...styles.centeredText,
          }}>
          Add product in your cart now
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.3}
          style={styles.cartButton}>
          <Text style={styles.cartButtonText}>SHOP NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmptyCart;
