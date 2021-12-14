import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '700',
  },
  headerStyle: {
    color: '#FFF',
    justifyContent: 'space-around',
    paddingTop: 30,
  },
  inputContainer: {
    backgroundColor: '#FFF',
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',
  },
  input: {
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    padding: 10,
    margin: 20,
  },
  flatList: {
    backgroundColor: '#FFF',
    margin: 20,
  },
  mainContainer: {
    backgroundColor: '#FFF',
  },
  item: {
    flex: 1,
    width: 125,
  },
  cardStyle: {
    flex: 1,
    borderTopColor: 'white',
  },
  itemPrice: {
    fontWeight: '900',
    marginTop: 10,
  },
});

export default styles;
