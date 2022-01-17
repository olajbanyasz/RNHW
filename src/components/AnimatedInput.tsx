/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {TextInput, View, Animated} from 'react-native';
import styles from '../style/stylesheet';

const AnimatedInput = ({
  label,
  defaultValue,
  onChangeText,
  keyboardType,
  editable
}) => {
  const labelAnimation = useRef(new Animated.Value(0)).current;
  const onFocus = e => {
    Animated.spring(labelAnimation, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };
  const onBlur = () => {
    Animated.spring(labelAnimation, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.inputContainer}>
      <Animated.Text
        onPress={onFocus}
        style={[
          styles.inputLabel,
          {
            transform: [
              {
                translateY: labelAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [29, 10],
                }),
              },
            ],
          },
        ]}>
        {label}
      </Animated.Text>
      <Animated.View>
        <TextInput
          style={[styles.input]}
          autoCapitalize="none"
          defaultValue={defaultValue}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          editable={editable}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </Animated.View>
    </View>
  );
};
export default AnimatedInput;
