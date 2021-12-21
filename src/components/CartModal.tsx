/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Modal, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../style/stylesheet';

function CartModal({isColorSelected}) {
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