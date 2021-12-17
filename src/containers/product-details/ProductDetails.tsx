/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header, Divider, Image, ButtonGroup} from 'react-native-elements';
import styles from '../../style/stylesheet';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';

const ProductDetails = ({id = 2}) => {
  const defaultDetails = {
    attributes: {
      description: '',
      display_price: '',
    },
  };

  const [data, setData] = useState(defaultDetails);
  const [selectedColor, setSelectedColor] = useState(0);

  const getItemDetails = async id => {
    try {
      const response = await fetch(
        `https://demo.spreecommerce.org//api/v2/storefront/products/${id}`,
      );
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getItemDetails(id);
  }, [id]);

  const {width} = useWindowDimensions();

  return (
    <>
      <Header
        leftComponent={<Icon name="arrow-back" size={30} color="#fff" />}
        centerComponent={<Icon name="heart-outline" size={30} color="#fff" />}
        rightComponent={<Icon name="cart" size={30} color="#fff" />}
        containerStyle={styles.headerStyle}
        centerContainerStyle={styles.centerContainerStyle}
      />
      <ScrollView style={styles.detailsContainer}>
        <Image
          source={require('../../assets/pulli.jpg')}
          style={{width: 200, height: 200, marginBottom: 20}}
        />
        <Text style={styles.itemPrice}>{data.attributes.display_price}</Text>
        <Divider orientation="horizontal" style={styles.divider} width={1} />
        <View>
          <Text style={{fontWeight: '900', fontSize: 24}}>Select Color</Text>
          <ButtonGroup
            onPress={setSelectedColor}
            selectedIndex={selectedColor}
            buttons={['Black', 'Blue', 'Red']}
            containerStyle={{height: 50}}
          />
        </View>
        <Divider orientation="horizontal" style={styles.divider} width={1} />
        <View style={styles.description}>
          <Text style={{fontWeight: '900', fontSize: 24}}>Description</Text>
          <RenderHtml
            source={{html: data.attributes.description}}
            contentWidth={width}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.3}
        style={styles.touchableOpacityStyle}>
        <Text style={styles.floatingButtonStyle}>ADD TO CART</Text>
      </TouchableOpacity>
    </>
  );
};

export default ProductDetails;
