import React, { useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Box from '../../../components/Box';
import { RootState } from '../../../store/store';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { RootStackParamList } from '../../../navigationTypes';
import { theme as appTheme } from '../../../styles/theme'; // Import your theme for direct use

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SplashScreen'
>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  const theme = useAppSelector(state => state.theme.theme) as "light" | "dark"; // Explicitly define the type
  const commonStyle = commonStyles(theme); // Dynamically create styles based on the theme
  const selectedTheme = appTheme[theme]; // Access the current theme (light or dark)

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
        navigation.navigate('LoginScreen');
      }
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [isAuthenticated, navigation]);

  return (
    <Box style={commonStyle.splashContainer}>
    <Animated.View style={[{ opacity: fadeAnim }, { alignItems: 'center', justifyContent: 'center', width: '100%' }]}>
      <Image
        source={require('../../../../assets/logo.png')} // Logo path
        style={commonStyle.logo}
      />
      <Text style={commonStyle.splashText}>
        Welcome to Merkado
      </Text>
    </Animated.View>


    {/* Custom loader */}
    <ActivityIndicator
      size="large"
      color={selectedTheme.primary} // Use primary color directly from the theme
      style={commonStyle.loader}
    />
  </Box>
  );
};

export default SplashScreen;
