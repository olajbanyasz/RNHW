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
  const [changedAttributes, setAttributes] = useState<Array<string>>([]);

  const onChangeHandler = (attributeName: string) => {
    if (changedAttributes.indexOf(attributeName) === -1) {
      const newAttributes = [...changedAttributes];
      newAttributes.push(attributeName);
      setAttributes(newAttributes);
    }
  };

  function storeUserData(data: {
    name: any;
    number: any;
    city: any;
    street: any;
    house: any;
    profilePics: any;
  }) {
    setName(data.name);
    setNumber(data.number);
    setCity(data.city);
    setStreet(data.street);
    setHouse(data.house);
    setProfilePics(data.profilePics);
  }

  const updateUserData = () => {
    const newUserData = {
      name: changedAttributes.includes('name') ? name : userData.name,
      number: changedAttributes.includes('number') ? number : userData.number,
      street: changedAttributes.includes('street') ? street : userData.street,
      house: changedAttributes.includes('house') ? house : userData.house,
      city: changedAttributes.includes('city') ? city : userData.city,
      profilePics: changedAttributes.includes('profilePics')
        ? profilePics
        : userData.profilePics,
    };
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
          onChangeText={(e: React.SetStateAction<string>) => {
            setName(e);
            onChangeHandler('name');
          }}
          keyboardType={'default'}
          editable={true}
          bordered={false}
          isAnimated={false}
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
          onChangeText={(e: React.SetStateAction<string>) => {
            setNumber(e);
            onChangeHandler('number');
          }}
          keyboardType={'default'}
          editable={true}
          bordered={false}
          isAnimated={false}
        />
        <AnimatedInput
          label={'City'}
          defaultValue={userData.city}
          onChangeText={(e: React.SetStateAction<string>) => {
            setCity(e);
            onChangeHandler('city');
          }}
          keyboardType={'default'}
          editable={true}
          bordered={false}
          isAnimated={false}
        />
        <AnimatedInput
          label={'Locality, area or street'}
          defaultValue={userData.street}
          onChangeText={(e: React.SetStateAction<string>) => {
            setStreet(e);
            onChangeHandler('street');
          }}
          keyboardType={'default'}
          editable={true}
          bordered={false}
          isAnimated={false}
        />
        <AnimatedInput
          label={'Flat no., building name'}
          defaultValue={userData.house}
          onChangeText={(e: React.SetStateAction<string>) => {
            setHouse(e);
            onChangeHandler('house');
          }}
          keyboardType={'default'}
          editable={true}
          bordered={false}
          isAnimated={false}
        />
        {isUser && !!changedAttributes.length && (
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
