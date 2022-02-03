/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {storeProfile, defaultData} from '../helpers';
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../style/stylesheet';
import AppContext from './AppContext';

function CartModal({isColorSelected, item}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const {cart, updateCart, isUser, setUser, setUserData} =
    useContext(AppContext);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const addTocart = () => {
    if (isColorSelected) {
      const newCart = [...cart, item];
      updateCart(newCart);
    }
    toggleModal();
  };

  const LoginModalContent = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon name="alert-circle-outline" size={60} color="#feb96b" />
            <Text
              style={{fontWeight: '700', fontSize: 20, ...styles.modalText}}>
              Login To Continue
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
              }}>
              Please login to add product
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
              }}>
              in your cart
            </Text>
            <View style={styles.loginButtonsContainer}>
              <Pressable
                style={styles.loginButtons}
                onPress={() => {
                  setUser(true);
                  setUserData(defaultData);
                }}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
              </Pressable>
              <Pressable
                style={styles.loginButtons}
                onPress={() => {
                  setUser(true);
                  setUserData(defaultData);
                }}>
                <Text style={styles.loginButtonText}>SIGN UP</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const CartModalContent = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {isColorSelected ? (
              <Icon name="checkmark-circle-outline" size={60} color="#a5dc86" />
            ) : (
              <Icon name="close-circle-outline" size={60} color="#dd6b55" />
            )}
            <Text
              style={{fontWeight: '700', fontSize: 20, ...styles.modalText}}>
              {isColorSelected ? 'Product added to your cart' : 'Select color'}
            </Text>
            {!isColorSelected && (
              <>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 14,
                  }}>
                  Please select your color to
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 14,
                  }}>
                  add this item in your cart
                </Text>
              </>
            )}
            <TouchableOpacity
              onPress={addTocart}
              activeOpacity={0.3}
              style={styles.modalButton}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={toggleModal}
        activeOpacity={0.3}
        style={styles.touchableOpacityStyle}>
        <Text style={styles.floatingButtonStyle}>ADD TO CART</Text>
      </TouchableOpacity>
      {isUser ? <CartModalContent /> : <LoginModalContent />}
    </View>
  );
}

export default CartModal;
