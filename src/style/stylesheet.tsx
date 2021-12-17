/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '700',
  },
  headerStyle: {
    color: '#FFF',
    paddingTop: 30,
  },
  centerContainerStyle: {
    position: 'absolute',
    right: 60,
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
    borderTopColor: '#FFF',
    borderRadius: 3,
    marginBottom: 20,
  },
  itemPrice: {
    fontWeight: '900',
    marginTop: 10,
  },
  activityIndicator: {
    paddingTop: 80,
  },
  divider: {
    marginBottom: 10,
    marginTop: 10,
  },
  detailsContainer: {
    backgroundColor: '#FFF',
    marginBottom: 140,
    padding: 20,
    paddingBottom: 50,
  },
  description: {
    paddingBottom: 30,
  },
  touchableOpacityStyle:{
    position: 'absolute',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 50,
    width: '100%',
    padding: 20,
    paddingTop: 0,
    backgroundColor: '#FFF',
  },
  floatingButtonStyle: {
    backgroundColor: '#2196f3',
    color: '#fff',
    height: 50,
    margin: 20,
    marginTop: 0,
    width: '100%',
    borderRadius: 3,
    padding: 15,
    textAlign: 'center',
    fontWeight: '900',
  },
});

export default styles;
