/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header, Divider, Image, ButtonGroup} from 'react-native-elements';
import styles from '../../style/stylesheet';
import {ScrollView, Text, View} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import CartModal from '../../components/CartModal';

const ProductDetails = ({route, navigation}) => {
  const {id} = route.params;
  const defaultDetails = {
    attributes: {
      description: '',
      display_price: '',
    },
  };

  const [data, setData] = useState(defaultDetails);
  const [selectedColor, setSelectedColor] = useState(null);

  const getItemDetails = async (itemId: String) => {
    try {
      const response = await fetch(
        `https://demo.spreecommerce.org//api/v2/storefront/products/${itemId}`,
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

  const isColorSelected = selectedColor === null ? false : true;

  const {width} = useWindowDimensions();

  return (
    <View style={styles.detailsContainer}>
      <Header
        leftComponent={<Icon name="arrow-back" size={30} color="#fff" onPress={() => navigation.goBack()} />}
        centerComponent={<Icon name="heart-outline" size={30} color="#fff" />}
        rightComponent={<Icon name="cart" size={30} color="#fff" />}
        centerContainerStyle={styles.centerContainerStyle}
      />
      <ScrollView style={styles.detailsScrollContainer}>
        <Swiper style={styles.swiper} showsButtons loop={true}>
          <View style={styles.swiperImageView}>
            <Image
              source={require('../../assets/c1.jpg')}
              style={styles.swiperImage}
            />
          </View>
          <View style={styles.swiperImageView}>
            <Image
              source={require('../../assets/c2.jpg')}
              style={styles.swiperImage}
            />
          </View>
          <View style={styles.swiperImageView}>
            <Image
              source={require('../../assets/c3.jpg')}
              style={styles.swiperImage}
            />
          </View>
          <View style={styles.swiperImageView}>
            <Image
              source={require('../../assets/c4.jpg')}
              style={styles.swiperImage}
            />
          </View>
        </Swiper>
        <Text style={styles.itemPrice}>{data.attributes.display_price}</Text>
        <Divider orientation="horizontal" style={styles.divider} width={1} />
        <View>
          <Text style={{fontWeight: '700', fontSize: 20}}>Select Color</Text>
          <ButtonGroup
            onPress={setSelectedColor}
            selectedIndex={selectedColor}
            buttons={['Black', 'Blue', 'Red']}
            containerStyle={{height: 50}}
          />
        </View>
        <Divider orientation="horizontal" style={styles.divider} width={1} />
        <View style={styles.description}>
          <Text style={{fontWeight: '700', fontSize: 20}}>Description</Text>
          <RenderHtml
            source={{html: data.attributes.description}}
            contentWidth={width}
          />
        </View>
      </ScrollView>
      <CartModal isColorSelected={isColorSelected} item={data}/>
    </View>
  );
};

export default ProductDetails;
