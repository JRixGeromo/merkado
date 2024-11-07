import React, { useEffect, useRef } from 'react';
import {
  View,
  Animated,
  Easing,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const FloatingDollars = () => {
  // Initialize animated values as an array for multiple dollar animations
  const animatedValues = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];

  useEffect(() => {
    const animate = (animatedValue: Animated.Value, delay: number) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.delay(60000), // Pause for 60 seconds between loops
        ]),
      ).start();
    };

    animatedValues.forEach((animatedValue, index) => {
      setTimeout(() => animate(animatedValue, index * 500), index * 500); // Slightly stagger the animations
    });
  }, [animatedValues]);

  return (
    <View style={StyleSheet.absoluteFill}>
      {animatedValues.map((animatedValue, index) => {
        const translateY = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [200, -200], // Float up from bottom to top
        });

        const translateX = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [index % 2 === 0 ? -50 : 50, index % 2 === 0 ? 50 : -50], // Slight horizontal sway
        });

        const opacity = animatedValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, 1, 0], // Fade in and out
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.dollarSign,
              {
                transform: [{ translateY }, { translateX }],
                opacity,
                left: screenWidth / 2 - 15, // Center the dollar sign horizontally
              },
            ]}
          >
            <Text style={styles.dollarText}>$$$</Text>
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dollarSign: {
    position: 'absolute',
    bottom: 0,
  },
  dollarText: {
    fontSize: 30,
    color: 'green',
  },
});

export default FloatingDollars;
