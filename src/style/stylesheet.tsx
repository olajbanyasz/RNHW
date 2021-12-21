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
    borderWidth: 2,
    borderTopColor: '#FFF',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    marginBottom: 20,
    shadowColor: '#FFF',
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
  },
  detailsScrollContainer: {
    backgroundColor: '#FFF',
    marginBottom: 120,
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
    bottom: 60,
    width: '100%',
    padding: 20,
    backgroundColor: '#FFF',
  },
  floatingButtonStyle: {
    backgroundColor: '#2196F3',
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a4a5a9',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    width: '85%',
  },
  modalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#FFF',
  },
  modalButtonText: {
    backgroundColor: '#2196F3',
    color: '#fff',
    margin: 20,
    width: 120,
    borderRadius: 3,
    padding: 10,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
  },
  modalText: {
    margin: 10,
    textAlign: 'center',
  },
});

export default styles;
