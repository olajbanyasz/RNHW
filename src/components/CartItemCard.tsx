import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../style/stylesheet';

const CartItemCard = ({item}) => (
  <View style={styles.cartCardContainer}>
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
);

export default CartItemCard;
