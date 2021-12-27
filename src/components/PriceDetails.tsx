/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {Divider} from 'react-native-elements';
import styles from '../style/stylesheet';

const PriceDetails = ({itemCounter, priceSummary}) => {
  const itemString = itemCounter === 1 ? 'item' : 'items';
  const totalPrice = (priceSummary + 15).toFixed(2);
  return (
    <View style={styles.priceCardContainer}>
      <Text style={{fontWeight: '700', fontSize: 20}}>Price Details</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={{justifyContent: 'flex-start'}}>
            Price ({itemCounter} {itemString})
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{justifyContent: 'flex-end', textAlign: 'right'}}>
            ${priceSummary}
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={{justifyContent: 'flex-start'}}>Delivery</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{justifyContent: 'flex-end', textAlign: 'right'}}>
            $10
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={{justifyContent: 'flex-start'}}>Discount</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{justifyContent: 'flex-end', textAlign: 'right'}}>
            $20
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={{justifyContent: 'flex-start'}}>Tax</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{justifyContent: 'flex-end', textAlign: 'right'}}>
            $25
          </Text>
        </View>
      </View>
      <Divider orientation="horizontal" style={styles.divider} width={1} />
      <Text style={{textAlign: 'right'}}>${totalPrice}</Text>
    </View>
  );
};

export default PriceDetails;
