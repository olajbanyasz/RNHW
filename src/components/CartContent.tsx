import React, {useContext, useState} from 'react';
import styles from '../style/stylesheet';
import AppContext from '../components/AppContext';
import CartItemCard from '../components/CartItemCard';
import PriceDetails from './PriceDetails';
import OrderConfirmation from './OrderConfirmation';
import OrderConfirmationWithAnimation from '../components/OrderConfirmationWithAnimation';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

const CartContent = ({navigation}) => {
  const [isProceeded, setProceeded] = useState(false);
  const {cart} = useContext(AppContext);
  const renderItem = ({item}) => <CartItemCard item={item} />;
  const itemCounter = cart.length;
  const priceSummary = cart
    .map(item => Number(item.attributes.price))
    .reduce((a, i) => a + i);
  return !isProceeded ? (
    <View style={styles.mainContainer}>
      <FlatList
        style={styles.flatList}
        data={cart}
        numColumns={1}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <PriceDetails itemCounter={itemCounter} priceSummary={priceSummary} />
      <View style={styles.proceedButtonContainer}>
        <TouchableOpacity
          onPress={() => {
            setProceeded(true);
          }}
          activeOpacity={0.3}
          style={styles.cartButton}>
          <Text style={styles.cartButtonText}>PROCEED TO PAYMENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <OrderConfirmationWithAnimation navigation={navigation} />
  );
};

export default CartContent;
