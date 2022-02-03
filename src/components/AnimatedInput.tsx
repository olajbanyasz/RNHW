/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {TextInput, View, Animated} from 'react-native';
import {Text} from 'react-native-svg';
import styles from '../style/stylesheet';

const AnimatedInput = ({
  label,
  defaultValue,
  onChangeText,
  keyboardType,
  editable,
  bordered,
  isAnimated,
}) => {
  const labelAnimation = useRef(new Animated.Value(0)).current;
  const [value, setValue] = useState('');
  const onFocus = e => {
    Animated.spring(labelAnimation, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };
  const onBlur = () => {
    if (!value) {
      Animated.spring(labelAnimation, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View
      style={{...styles.inputContainer, borderBottomWidth: bordered ? 2 : 0}}>
      {isAnimated ? (
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
      ) : (
        <Animated.Text
          onPress={onFocus}
          style={[
            styles.inputLabel,
            {
              transform: [
                {
                  translateY: labelAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [10, 10],
                  }),
                },
              ],
            },
          ]}>
          {label}
        </Animated.Text>
      )}
      <Animated.View>
        <TextInput
          autoFocus={defaultValue ? true : false}
          style={[styles.input]}
          autoCapitalize="none"
          defaultValue={defaultValue}
          onChangeText={e => {
            onChangeText(e);
            setValue(e);
          }}
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
