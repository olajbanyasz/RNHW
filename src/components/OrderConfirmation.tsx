/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../style/stylesheet';

const OrderConfirmation = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#FFF', marginTop: '10%'}}>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 48,
            color: '#00a8f3',
            ...styles.centeredText,
          }}>
          Order Confirmation
        </Text>
        <Icon name="ios-cart-outline" size={180} color="#f39649" />
        <Text
          style={{
            fontWeight: '700',
            fontSize: 20,
            width: '80%',
            ...styles.centeredText,
          }}>
          Thank you for placing your order with us!
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 14,
            width: '60%',
            ...styles.centeredText,
          }}>
          Please check your mail for more details. For any question or further
          information please contact our customer support.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.3}
          style={styles.cartButton}>
          <Text style={styles.cartButtonText}>CONTINUE SHOPPING</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderConfirmation;
