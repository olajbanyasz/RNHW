/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useRef, useEffect, useState} from 'react';
import OrderConfirmation from './OrderConfirmation';
import { Animated, Easing, View } from 'react-native';
import LottieView from 'lottie-react-native';

const OrderConfirmationWithAnimation = ({navigation}) => {
  const fireworksAnimation = useRef(new Animated.Value(0)).current;
  const duration = 5000;
  const [animationProgress, setProgress] = useState(0);

  useEffect(() => {
    Animated.timing(fireworksAnimation, {
      toValue: 1,
      duration: duration,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [fireworksAnimation]);

  fireworksAnimation.addListener(e => {setProgress(e.value);});
  const sourceFile = require('../assets/fireworks.json');
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <Animated.View style={{flex: 1}}>
          {animationProgress < 1 ? <LottieView source={sourceFile} progress={fireworksAnimation} /> : null}
      </Animated.View>
      {animationProgress === 1 ? <OrderConfirmation navigation={navigation}/> : null}
    </View>
  );
};

export default OrderConfirmationWithAnimation;
