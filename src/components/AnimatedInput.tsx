/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {TextInput, View, Animated} from 'react-native';
import styles from '../style/stylesheet';

const AnimatedInput = ({
  label,
  defaultValue,
  onChangeText,
  keyboardType,
  editable,
  placeholder
}) => {
  let placeholderString;
  const labelAnimation = useRef(new Animated.Value(0)).current;
  const onFocus = e => {
    placeholderString = placeholder;
    Animated.spring(labelAnimation, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };
  const onBlur = () => {
    placeholderString = placeholder;
    Animated.spring(labelAnimation, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.inputContainer}>
      <Animated.Text
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
          placeholder={placeholderString}
        />
      </Animated.View>
    </View>
  );
};
export default AnimatedInput;
