/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {Text, TouchableOpacity, View, Modal, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../style/stylesheet';
import AppContext from './AppContext';
import {storeProfile, emptyData} from '../helpers';

const LogoutModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const {isUser, setUser, setUserData} = useContext(AppContext);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const LogoutModalContent = () => {
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
              Are you sure you want
            </Text>
            <Text
              style={{fontWeight: '700', fontSize: 20, ...styles.modalText}}>
              to logout?
            </Text>
            <View style={styles.loginButtonsContainer}>
              <Pressable
                style={{...styles.loginButtons, backgroundColor: 'red'}}
                onPress={() => toggleModal()}>
                <Text
                  style={{...styles.loginButtonText, backgroundColor: 'red'}}>
                  CANCEL
                </Text>
              </Pressable>
              
                <Pressable
                  style={styles.loginButtons}
                  onPress={() => {
                    setUser(false);
                    setUserData(emptyData);
                    toggleModal();
                  }}>
                  <Text style={styles.loginButtonText}>LOGOUT</Text>
                </Pressable>
              
            </View>
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
        style={{...styles.cartButton, paddingHorizontal: 20}}>
        <Text style={styles.cartButtonText}>LOGOUT</Text>
      </TouchableOpacity>
      <LogoutModalContent />
    </View>
  );
};

export default LogoutModal;
