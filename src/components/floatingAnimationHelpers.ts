import { Animated, Easing } from 'react-native';

export const FLOATING_ANIMATION_DURATION = 3000;
export const FLOATING_ANIMATION_PAUSE = 60000;
export const FLOATING_SWAY_AMOUNT = 50;

export const FLOATING_TRANSLATE_INPUT_RANGE = [0, 1];
export const FLOATING_TRANSLATE_Y_OUTPUT_RANGE = [200, -200];
export const FLOATING_OPACITY_INPUT_RANGE = [0, 0.5, 1];
export const FLOATING_OPACITY_OUTPUT_RANGE = [0, 1, 0];

export const createFloatingInterpolations = (
  animatedValue: Animated.Value,
  index: number,
) => ({
  translateY: animatedValue.interpolate({
    inputRange: FLOATING_TRANSLATE_INPUT_RANGE,
    outputRange: FLOATING_TRANSLATE_Y_OUTPUT_RANGE,
  }),
  translateX: animatedValue.interpolate({
    inputRange: FLOATING_TRANSLATE_INPUT_RANGE,
    outputRange: [
      index % 2 === 0 ? -FLOATING_SWAY_AMOUNT : FLOATING_SWAY_AMOUNT,
      index % 2 === 0 ? FLOATING_SWAY_AMOUNT : -FLOATING_SWAY_AMOUNT,
    ],
  }),
  opacity: animatedValue.interpolate({
    inputRange: FLOATING_OPACITY_INPUT_RANGE,
    outputRange: FLOATING_OPACITY_OUTPUT_RANGE,
  }),
});

export const createFloatingAnimationSequence = (animatedValue: Animated.Value) =>
  Animated.sequence([
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: FLOATING_ANIMATION_DURATION,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
    Animated.delay(FLOATING_ANIMATION_PAUSE),
  ]);
