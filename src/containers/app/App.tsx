import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  Text,
  TextInput,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from 'react-native-elements';
import styles from '../../style/stylesheet';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const data = [{title: 'hello1'}, {title: 'hello2'}, {title: 'hello3'}];

  const Item = ({title}) => (
    <View>
      <Text>{title}</Text>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header
          leftComponent={<Icon name="bars" size={30} color="#fff" />}
          centerComponent={
            <Text style={styles.headerText}>Ecommerce Store</Text>
          }
          rightComponent={<Icon name="shopping-cart" size={30} color="#fff" />}
          containerStyle={styles.headerStyle}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => console.log(text)}
            placeholder={'Enter Search Term'}
          />
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.title}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
