/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../style/stylesheet';

const LoginFirst = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#FFF', marginTop: '30%'}}>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Icon name="person-circle-sharp" size={180} color="#008ace" />
        <Text style={{fontWeight: '700', fontSize: 20, ...styles.centeredText}}>
          Logon First!
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 14,
            ...styles.centeredText,
          }}>
          Login first to view your cart
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.3}
          style={styles.cartButton}>
          <Text style={styles.cartButtonText}>LOGIN NOW</Text>
        </TouchableOpacity>
        <Text style={{fontWeight: '500', fontSize: 12, color: '#008ace'}}>
          New here? Sign up
        </Text>
      </View>
    </View>
  );
};

export default LoginFirst;
