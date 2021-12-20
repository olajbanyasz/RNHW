/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '700',
  },
  centerContainerStyle: {
    position: 'absolute',
    right: 60,
    bottom: 0,
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
    paddingHorizontal: 10,
  },
  mainContainer: {
    backgroundColor: '#FFF',
  },
  item: {
    flex: 1,
    width: 125,
    marginBottom: 10,
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
    position: 'relative',
  },
  detailsScrollContainer: {
    backgroundColor: '#FFF',
    marginBottom: 70,
    padding: 20,
    paddingTop: 0,
  },
  description: {
    paddingBottom: 30,
  },
  touchableOpacityStyle:{
    position: 'absolute',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
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
  swiper: {
    marginBottom: 10,
    height: 250,
  },
  swiperImageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperImage: {
    width: 150,
    height: 150,
  },
});

export default styles;
