import { Dimensions, PixelRatio } from 'react-native';

// Get the screen dimensions
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base screen dimensions (e.g., design reference width & height, can be from Figma or similar tools)
const BASE_WIDTH = 375; // Example base width
const BASE_HEIGHT = 812; // Example base height

// Scale width based on screen size relative to the base width
const scale = SCREEN_WIDTH / BASE_WIDTH;

// Function to normalize font size based on the screen width
export const normalizeFontSize = (size: number) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Function to normalize height (optional, only if needed for height-based scaling)
export const normalizeHeight = (size: number) => {
  const newSize = size * (SCREEN_HEIGHT / BASE_HEIGHT);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
