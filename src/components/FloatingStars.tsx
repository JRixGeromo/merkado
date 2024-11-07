import React, { useEffect, useRef } from 'react';
import {
  View,
  Animated,
  Easing,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const FloatingStars = () => {
  // Initialize animated values for multiple star animations
  const animatedValues = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    // useRef(new Animated.Value(0)).current,
    // useRef(new Animated.Value(0)).current,
  ];

  useEffect(() => {
    const animate = (animatedValue: Animated.Value) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 3000 + Math.random() * 2000, // Random duration between 3-5 seconds
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.delay(2000 + Math.random() * 3000), // Random delay between 2-5 seconds
        ]),
      ).start();
    };

    animatedValues.forEach(animatedValue => {
      animate(animatedValue); // Start the animation for each star
    });
  }, [animatedValues]);

  return (
    <View style={StyleSheet.absoluteFill}>
      {animatedValues.map((animatedValue, index) => {
        const translateY = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-100, screenHeight], // Float down from above the screen to the bottom
        });

        const translateX = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [
            Math.random() * screenWidth * 0.8, // Random starting X position within screen
            Math.random() * screenWidth * 0.8, // Random ending X position within screen
          ],
        });

        const opacity = animatedValue.interpolate({
          inputRange: [0, 0.5, 0.6], // Fully visible at 50%, starts fading out at 60%
          outputRange: [0, 1, 0], // Fade in and then fade out by halfway down
        });

        const scale = animatedValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0.8, 1, 0.8], // Small scaling effect for "twinkling"
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.star,
              {
                transform: [{ translateY }, { translateX }, { scale }],
                opacity,
              },
            ]}
          >
            <Text style={styles.starText}>⭐</Text>
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  star: {
    position: 'absolute',
    top: 0, // Start from the top of the screen
  },
  starText: {
    fontSize: 30,
    color: 'gold',
  },
});

export default FloatingStars;
