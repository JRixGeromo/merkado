import { Dimensions, PixelRatio, Platform } from 'react-native';

// Get the screen dimensions
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base screen dimensions (e.g., design reference width & height, can be from Figma or similar tools)
const BASE_WIDTH = 375; // Example base width (from mobile design)
const BASE_HEIGHT = 812; // Example base height (from mobile design)

// Scale width based on screen size relative to the base width
const scale = SCREEN_WIDTH / BASE_WIDTH;

// Function to normalize font size based on the screen width
export const normalizeFontSize = (size: number) => {
  const newSize = size * scale;

  // Adjust scaling for desktop (web) where screen sizes are generally much larger
  if (Platform.OS === 'web' && SCREEN_WIDTH > 1280) {
    // Increase font size proportionally for larger desktop screens
    return Math.round(PixelRatio.roundToNearestPixel(newSize * 1.5)); 
  }

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Function to normalize height based on the screen height (optional, only if needed for height-based scaling)
export const normalizeHeight = (size: number) => {
  const newSize = size * (SCREEN_HEIGHT / BASE_HEIGHT);

  // Adjust scaling for desktop (web) where screen heights are generally much larger
  if (Platform.OS === 'web' && SCREEN_HEIGHT > 1024) {
    // Increase height proportionally for larger desktop screens
    return Math.round(PixelRatio.roundToNearestPixel(newSize * 1.5)); 
  }

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
