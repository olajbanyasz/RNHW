/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../style/stylesheet';
import AppContext from '../components/AppContext';
import {defaultData} from '../helpers';

const LoginFirst = ({navigation}) => {
  const {setUser, setUserData, userData} = useContext(AppContext);
  return (
    <View style={{backgroundColor: '#FFF', marginTop: '30%'}}>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Icon name="person-circle-sharp" size={180} color="#008ace" />
        <Text style={{fontWeight: '700', fontSize: 20, ...styles.centeredText}}>
          Login First!
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
          onPress={() => {
            setUser(true);
            setUserData(defaultData);
          }}
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
