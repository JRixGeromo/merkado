import React, { useEffect, useRef } from 'react';
import {
  View,
  Animated,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  createFloatingAnimationSequence,
  createFloatingInterpolations,
} from './floatingAnimationHelpers';

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
      Animated.loop(createFloatingAnimationSequence(animatedValue)).start();
    };

    animatedValues.forEach((animatedValue, index) => {
      setTimeout(() => animate(animatedValue, index * 500), index * 500); // Slightly stagger the animations
    });
  }, [animatedValues]);

  return (
    <View style={StyleSheet.absoluteFill}>
      {animatedValues.map((animatedValue, index) => {
        const { translateY, translateX, opacity } = createFloatingInterpolations(
          animatedValue,
          index,
        );

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
