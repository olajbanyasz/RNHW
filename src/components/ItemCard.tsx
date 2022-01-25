import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-elements';
import styles from '../style/stylesheet';

const ItemCard = ({item, navigation}) => (
  <View style={styles.item}>
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {id: item.id})}>
      <Card containerStyle={styles.cardStyle}>
        <Card.Title>{item.attributes.name}</Card.Title>
        <Card.Image source={require('../assets/pulli.jpg')} />
        <Text style={styles.itemPrice}>{item.attributes.display_price}</Text>
      </Card>
    </TouchableOpacity>
  </View>
);

export default ItemCard;
