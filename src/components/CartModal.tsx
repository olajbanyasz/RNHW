/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Modal, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../style/stylesheet';

function CartModal() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={toggleModal}
        activeOpacity={0.3}
        style={styles.touchableOpacityStyle}>
        <Text style={styles.floatingButtonStyle}>ADD TO CART</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!isModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon name="checkmark-circle-outline" size={60} color="#a5dc86" />
            <Text
              style={{fontWeight: '700', fontSize: 20, ...styles.modalText}}>
              Product added to your cart
            </Text>
            <TouchableOpacity
              onPress={toggleModal}
              activeOpacity={0.3}
              style={styles.modalButton}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default CartModal;
