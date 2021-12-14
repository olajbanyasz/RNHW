/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  RefreshControl,
  Text,
  TextInput,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header, Card} from 'react-native-elements';
import styles from '../../style/stylesheet';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getItems();
  }, []);

  const getItems = async () => {
    try {
      const response = await fetch(
        'https://demo.spreecommerce.org/api/v2/storefront/products',
      );
      const json = await response.json();
      setData(json.data.slice(0, 22));
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const Item = ({item}) => (
    <View style={styles.item}>
      <Card wrapperStyle={styles.cardStyle}>
        <Card.Title>{item.attributes.name}</Card.Title>
        <Card.Image source={require('../../assets/pulli.jpg')} />
        <Text style={styles.itemPrice}>{item.attributes.display_price}</Text>
      </Card>
    </View>
  );

  const renderItem = ({item}) => <Item item={item} />;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header
        leftComponent={<Icon name="bars" size={30} color="#fff" />}
        centerComponent={<Text style={styles.headerText}>Ecommerce Store</Text>}
        rightComponent={<Icon name="shopping-cart" size={30} color="#fff" />}
        containerStyle={styles.headerStyle}
      />
      <ScrollView
        style={{...backgroundStyle, paddingBottom: 300}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => console.log(text)}
            placeholder={'Enter Search Term'}
          />
        </View>
      </ScrollView>
      <View style={styles.mainContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            style={styles.flatList}
            data={data}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;
