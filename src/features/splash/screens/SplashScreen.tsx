import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, StyleSheet, Animated } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Box from '../../../components/Box';
import { RootState } from '../../../store/store'; // Adjust path to your store
import { commonStyles } from '../../../styles/commonStyles';
import { RootStackParamList } from '../../../navigationTypes';  // Import navigation types

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const fadeAnim = new Animated.Value(0);  // Create an animated value for fade-in

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
        navigation.navigate('Login');  // Use 'Login' instead of 'LoginScreen' if that's the defined screen
      }
    }, 3000); // 3 seconds delay

    // Clean up timer on unmount
    return () => clearTimeout(timer);
  }, [isAuthenticated, navigation]);

  return (
    <Box style={[commonStyles.container, styles.splashContainer]}>
      {/* Optional background image */}
      <Image
        source={require('../../../../assets/splash_background.jpg')} // Adjust to your splash background
        style={styles.backgroundImage}
      />

      {/* Fade-in content */}
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image
          source={require('../../../../assets/logo.jpg')}  // Adjust to your app's logo
          style={styles.logo}
        />
        <Text style={[commonStyles.title, styles.splashText]}>Welcome to Merkado</Text>
      </Animated.View>

      {/* Custom loader */}
      <ActivityIndicator size="large" color="#00796B" style={styles.loader} />
    </Box>
  );
};

// Styles for SplashScreen
const styles = StyleSheet.create({
  splashContainer: {
    backgroundColor: '#fff',  // You can add a gradient or image here
    position: 'relative',  // For absolute positioning of background image
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',  // Ensures the background image covers the entire screen
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',  // Adjust based on your logo dimensions
  },
  splashText: {
    color: '#00796B',  // A nice teal color to match your branding
    fontWeight: 'bold',
  },
  loader: {
    marginTop: 30,  // Add space between the text and loader
  },
});

export default SplashScreen;
