/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header, Card} from 'react-native-elements';
import styles from '../../style/stylesheet';

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
        'https://demo.spreecommerce.org/api/v2/storefront/products',
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

  const Item = ({item}) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => navigation.navigate('Details', {id: item.id})}>
        <Card containerStyle={styles.cardStyle}>
          <Card.Title>{item.attributes.name}</Card.Title>
          <Card.Image source={require('../../assets/pulli.jpg')} />
          <Text style={styles.itemPrice}>{item.attributes.display_price}</Text>
        </Card>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({item}) => <Item item={item} />;

  return (
    <View>
      <Header
        leftComponent={<Icon name="menu" size={30} color="#fff" />}
        centerComponent={<Text style={styles.headerText}>Ecommerce Store</Text>}
        rightComponent={<Icon name="cart" size={30} color="#fff" />}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => console.log(text)}
          placeholder={'Enter Search Term'}
        />
      </View>
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
