import React, { useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Import correct type
import { useSelector } from 'react-redux';
import Box from '../../../components/Box';
import { RootState } from '../../../store/store'; // Adjust path to your store
import { useAppSelector } from '../../../hooks/reduxHooks'; // To access the theme from Redux
import { commonStyles } from '../../../styles/commonStyles';
import { RootStackParamList } from '../../../navigationTypes'; // Import navigation types

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SplashScreen'
>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const theme = useAppSelector(state => state.theme.theme); // Get current theme from Redux
  const styles = commonStyles(theme); // Dynamically create styles based on the theme

  const fadeAnim = new Animated.Value(0); // Create an animated value for fade-in

  useEffect(() => {
    // Start fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    // Delay and navigate based on authentication
    const timer = setTimeout(() => {
      if (isAuthenticated) {
        navigation.navigate('DashboardScreen');
      } else {
        navigation.navigate('LoginScreen'); // Use 'LoginScreen' as it's defined in your stack
      }
    }, 3000); // 3 seconds delay

    // Clean up timer on unmount
    return () => clearTimeout(timer);
  }, [isAuthenticated, navigation]);

  return (
    <Box style={[styles.container, localStyles.splashContainer]}>
      {/* Optional background image */}
      <Image
        source={require('../../../../assets/splash_background.jpg')} // Adjust to your splash background
        style={localStyles.backgroundImage}
      />

      {/* Fade-in content */}
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image
          source={require('../../../../assets/logo.jpg')} // Adjust to your app's logo
          style={localStyles.logo}
        />
        <Text style={[styles.title, localStyles.splashText]}>
          Welcome to Merkado
        </Text>
      </Animated.View>

      {/* Custom loader */}
      <ActivityIndicator
        size="large"
        color={theme === 'light' ? '#00796B' : '#fff'}
        style={localStyles.loader}
      />
    </Box>
  );
};

// Local styles for SplashScreen
const localStyles = StyleSheet.create({
  splashContainer: {
    backgroundColor: '#fff', // You can add a gradient or image here
    position: 'relative', // For absolute positioning of background image
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensures the background image covers the entire screen
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain', // Adjust based on your logo dimensions
  },
  splashText: {
    fontWeight: 'bold',
    color: '#00796B', // Static color, could be dynamic based on theme if needed
  },
  loader: {
    marginTop: 30, // Add space between the text and loader
  },
});

export default SplashScreen;
