/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements';
import styles from '../../style/stylesheet';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AppContext from '../../components/AppContext';
import AnimatedInput from '../../components/AnimatedInput';
import LogoutModal from '../../components/LogoutModal';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Avatar} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

const MyProfile = ({navigation}) => {
  const {cart, isUser, setUser, userData, setUserData} = useContext(AppContext);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [profilePics, setProfilePics] = useState(
    'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg',
  );

  const storeUserData = data => {
    setName(data.name);
    setNumber(data.number);
    setCity(data.city);
    setStreet(data.street);
    setHouse(data.house);
    setProfilePics(data.profilePics);
  };

  const updateUserData = () => {
    const newUserData = {name, number, street, house, city, profilePics};
    setUserData(newUserData);
  };

  const getStoredDtata = async () => {
    try {
      const _profilePics = await AsyncStorage.getItem('profilePics');
      const _name = await AsyncStorage.getItem('name');
      const _number = await AsyncStorage.getItem('number');
      const _city = await AsyncStorage.getItem('city');
      const _street = await AsyncStorage.getItem('street');
      const _house = await AsyncStorage.getItem('house');
      const data = {
        name: _name,
        number: _number,
        city: _city,
        street: _street,
        house: _house,
        profilePics: _profilePics,
      };
      if (isUser) {
        storeUserData(data);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const storeProfilePics = async (picture: string | ImagePickerResponse) => {
    try {
      await AsyncStorage.setItem('profilePics', picture);
    } catch (error) {
      console.log('error', error);
    }
  };

  const pickImageHandler = () => {
    console.log('00000', userData);
    launchImageLibrary(
      {
        selectionLimit: 0,
        mediaType: 'photo',
        includeBase64: false,
      },
      response => {
        if (response.didCancel) {
          console.log('Selection cancelled');
        } else if (response.errorCode) {
          console.log('Error: ', response.errorMessage);
        } else {
          setProfilePics(response.assets ? response.assets[0].uri : '');
          storeProfilePics(response.assets ? response.assets[0].uri : '');
        }
      },
    );
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.cartContainer}>
        <Header
          leftComponent={
            <Icon
              name="arrow-back"
              size={30}
              color="#fff"
              onPress={() => navigation.goBack()}
            />
          }
          centerComponent={<Text style={styles.headerText}>My Profile</Text>}
        />
        <AnimatedInput
          label={'Full Name'}
          defaultValue={userData.name}
          onChangeText={(e: React.SetStateAction<string>) => setName(e)}
          keyboardType={'default'}
          editable={true}
          bordered={false}
        />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Avatar
            size="xlarge"
            rounded
            source={{uri: userData.profilePics}}
            onPress={pickImageHandler}
          />
        </View>
        <AnimatedInput
          label={'Mobile Number'}
          defaultValue={userData.number}
          onChangeText={(e: React.SetStateAction<string>) => setNumber(e)}
          keyboardType={'default'}
          editable={true}
          bordered={false}
        />
        <AnimatedInput
          label={'City'}
          defaultValue={userData.city}
          onChangeText={(e: React.SetStateAction<string>) => setCity(e)}
          keyboardType={'default'}
          editable={true}
          bordered={false}
        />
        <AnimatedInput
          label={'Locality, area or street'}
          defaultValue={userData.street}
          onChangeText={(e: React.SetStateAction<string>) => setStreet(e)}
          keyboardType={'default'}
          editable={true}
          bordered={false}
        />
        <AnimatedInput
          label={'Flat no., building name'}
          defaultValue={userData.house}
          onChangeText={(e: React.SetStateAction<string>) => setHouse(e)}
          keyboardType={'default'}
          editable={true}
          bordered={false}
        />
        {isUser && (
          <TouchableOpacity
            onPress={updateUserData}
            activeOpacity={0.3}
            style={{...styles.cartButton, paddingHorizontal: 20}}>
            <Text style={styles.cartButtonText}>UPDATE</Text>
          </TouchableOpacity>
        )}
        {isUser && <LogoutModal />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfile;
