/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {Animated, Easing, Text, TouchableOpacity, View} from 'react-native';
import LottieView from 'lottie-react-native';

const AnimatedButton = ({onPress}) => {
  const buttonAnimation = useRef(new Animated.Value(0)).current;
  const [animationProgress, setProgress] = useState(0);

  const widthInterpolate = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['100%', '10%'],
  });

  buttonAnimation.addListener(e => {
    setProgress(e.value);
  });

  const backgroundInterpolate = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#2196F3', 'rgba(220, 100, 50, 0.8)'],
  });

  const animatedStyles = {
    width: widthInterpolate,
    height: 40,
    backgroundColor: backgroundInterpolate,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
  };

  const handleClick = () => {
    startAnimation();
    onPress?.();
  };

  const startAnimation = () => {
    Animated.timing(buttonAnimation, {
      easing: Easing.bounce,
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const sourceFile = require('../assets/typing.json');

  const buttonTextRenderer = () => {
    return animationProgress !== 1 ? (
      <Text style={{color: '#FFF', fontWeight: '700'}}>PROCEED TO PAYMENT</Text>
    ) : (
      <LottieView source={sourceFile} progress={buttonAnimation} />
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      <TouchableOpacity onPress={handleClick}>
        <Animated.View style={animatedStyles}>
          {buttonTextRenderer()}
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedButton;
