/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    marginBottom: 10,
  },
  cartItem: {
    flex: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
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
  centeredText: {
    textAlign: 'center',
  },
  cartButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#FFF',
  },
  cartButtonText: {
    backgroundColor: '#2196F3',
    color: '#fff',
    margin: 20,
    width: '100%',
    borderRadius: 3,
    padding: 10,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
  },
  cartContainer: {
    backgroundColor: '#FFF',
    height: '100%',
  },
  loginButtons: {
    backgroundColor: '#2196F3',
    borderRadius: 3,
    padding: 10,
    width: '35%',
    height: 40,
    textAlign: 'center',
    alignItems: 'center',
    margin: 20,
  },
  loginButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  loginButtonText: {
    backgroundColor: '#2196F3',
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
  },
  cartCardContainer: {
    marginTop: 20,
    padding: 20,
    borderColor: 'lightgray',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopColor: '#FFF',
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  cartItemDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  cartItemCounterContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'flex-end',
  },
  itemCounterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  trashIconContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 13,
    justifyContent: 'flex-end',
  },
  cartImageStyle: {
    height: windowWidth * 0.25,
    width: windowWidth * 0.25,
  },
  cartItemTextContainer: {
    marginLeft: 20,
    paddingTop: 15,
  },
  proceedButtonContainer: {
    paddingHorizontal: 20,
  },
  priceCardContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: 'lightgray',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopColor: '#FFF',
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default styles;
