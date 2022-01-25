/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {FlatList, RefreshControl, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements';
import styles from '../../style/stylesheet';
import ItemCard from '../../components/ItemCard';
import AnimatedInput from '../../components/AnimatedInput';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(true);

  const wait = (timeout: number | undefined) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const getItems = async () => {
    setRefreshing(true);
    try {
      const response = await fetch(
        'https://rn-mentoring.herokuapp.com/api/v2/storefront/products',
      );
      const json = await response.json();
      setData(json.data.slice(0, 22));
      wait(2000).then(() => setRefreshing(false));
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const renderItem = ({item}) => (
    <ItemCard item={item} navigation={navigation} />
  );

  return (
    <View>
      <Header
        leftComponent={
          <Icon
            name="menu"
            size={30}
            color="#fff"
            onPress={() => navigation.toggleDrawer()}
          />
        }
        centerComponent={<Text style={styles.headerText}>Ecommerce Store</Text>}
        rightComponent={
          <Icon
            name="cart"
            size={30}
            color="#fff"
            onPress={() => navigation.navigate('Cart')}
          />
        }
      />
      <AnimatedInput
        label={'Enter Search Term'}
        defaultValue={''}
        onChangeText={() => {}}
        keyboardType={'default'}
        editable={true}
        bordered={true}
      />
      <View style={styles.mainContainer}>
        <FlatList
          style={styles.flatList}
          data={data}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={getItems}
              title="Loading"
              progressBackgroundColor="#DDD"
              progressViewOffset={200}
              colors={['dodgerblue']}
            />
          }
        />
      </View>
    </View>
  );
};

export default Home;
