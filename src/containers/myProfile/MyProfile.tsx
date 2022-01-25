/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements';
import styles from '../../style/stylesheet';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AppContext from '../../components/AppContext';
import AnimatedInput from '../../components/AnimatedInput';
import LogoutModal from '../../components/LogoutModal';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Avatar} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

const MyProfile = ({navigation}) => {
  const {cart, isUser, setUser} = useContext(AppContext);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [asset, setAsset] = useState({uri: ''});

  const getProfilePics = async () => {
    if (Math.random() > 0.5) {
      await AsyncStorage.setItem(
        'profilePics',
        'https://randomuser.me/api/portraits/women/64.jpg',
      );
    } else {
      await AsyncStorage.setItem(
        'profilePics',
        'https://randomuser.me/api/portraits/men/39.jpg',
      );
    }
    try {
      const value = await AsyncStorage.getItem('profilePics');
      setAsset({uri: value ? value : ''});
    } catch (error) {
      console.log('error', error);
    }
  };

  const setProfilePics = async picture => {
    try {
      await AsyncStorage.setItem('profilePics', picture);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getProfilePics();
  }, []);

  const pickImageHandler = () => {
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
          setAsset(response);
          setProfilePics(response);
        }
      },
    );
  };

  const defaultUri = 'https://randomuser.me/api/portraits/men/39.jpg';
  const profilePicsUri = asset.uri || defaultUri;

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
          defaultValue={''}
          onChangeText={(e: React.SetStateAction<string>) => setName(e)}
          keyboardType={'default'}
          editable={true}
          bordered={false}
        />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Avatar
            size="xlarge"
            rounded
            source={{uri: profilePicsUri}}
            onPress={pickImageHandler}
          />
        </View>
        <AnimatedInput
          label={'Mobile Number'}
          defaultValue={''}
          onChangeText={(e: React.SetStateAction<string>) => setNumber(e)}
          keyboardType={'default'}
          editable={true}
          bordered={false}
        />
        <AnimatedInput
          label={'City'}
          defaultValue={''}
          onChangeText={(e: React.SetStateAction<string>) => setCity(e)}
          keyboardType={'default'}
          editable={true}
          bordered={false}
        />
        <AnimatedInput
          label={'Locality, area or street'}
          defaultValue={''}
          onChangeText={(e: React.SetStateAction<string>) => setStreet(e)}
          keyboardType={'default'}
          editable={true}
          bordered={false}
        />
        <AnimatedInput
          label={'Flat no., building name'}
          defaultValue={''}
          onChangeText={(e: React.SetStateAction<string>) => setHouse(e)}
          keyboardType={'default'}
          editable={true}
          bordered={false}
        />
        <TouchableOpacity
          onPress={() => setUser(true)}
          activeOpacity={0.3}
          style={{...styles.cartButton, paddingHorizontal: 20}}>
          <Text style={styles.cartButtonText}>UPDATE</Text>
        </TouchableOpacity>
        <LogoutModal />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfile;
