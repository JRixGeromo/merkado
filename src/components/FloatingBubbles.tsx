import React, { useEffect } from 'react';
import { View, Animated, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

// Define properties for each bubble
type BubbleProps = {
  size: number;
  left: number;
  duration: number;
  color: string;
};

const FloatingBubbles = () => {
  // Define the properties of each bubble
  const bubbles: BubbleProps[] = [
    { size: 20, left: width * 0.1, duration: 4000, color: '#00bfff' },
    { size: 25, left: width * 0.25, duration: 5000, color: '#ff69b4' },
    { size: 15, left: width * 0.4, duration: 6000, color: '#ffa500' },
    { size: 30, left: width * 0.55, duration: 5500, color: '#32cd32' },
    { size: 20, left: width * 0.7, duration: 4500, color: '#ff4500' },
    // Add more bubbles as needed
  ];

  return (
    <View style={StyleSheet.absoluteFill}>
      {bubbles.map((bubble, index) => (
        <SingleBubble key={index} {...bubble} />
      ))}
    </View>
  );
};

// SingleBubble Component handles individual bubble animation
const SingleBubble = ({ size, left, duration, color }: BubbleProps) => {
  const translateY = new Animated.Value(height);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(translateY, {
        toValue: -size,
        duration,
        useNativeDriver: true,
      }),
    );
    animation.start();

    return () => animation.stop();
  }, [translateY, duration, size]);

  return (
    <Animated.View
      style={[
        styles.bubble,
        {
          width: size,
          height: size,
          backgroundColor: color,
          left,
          transform: [{ translateY }],
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    bottom: 0,
    borderRadius: 50, // Make the bubble circular
    opacity: 0.7, // Slight transparency for a smoother effect
  },
});

export default FloatingBubbles;
