import AsyncStorage from '@react-native-async-storage/async-storage';

export const defaultData = {
  name: 'John Doe',
  number: '+36905555555',
  city: 'London',
  street: 'Sunset bld',
  house: '44',
  profilePics: 'https://randomuser.me/api/portraits/men/39.jpg',
};

export const emptyData = {
  name: '',
  number: '',
  city: '',
  street: '',
  house: '',
  profilePics: 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg',
};

export const storeProfile = async data => {
  await AsyncStorage.setItem('profilePics', data.profilePics);
  await AsyncStorage.setItem('name', data.name);
  await AsyncStorage.setItem('number', data.number);
  await AsyncStorage.setItem('city', data.city);
  await AsyncStorage.setItem('street', data.street);
  await AsyncStorage.setItem('house', data.house);
};
