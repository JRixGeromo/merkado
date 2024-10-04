import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Box from '../../../components/Box';
import { RootState } from '../../../store/store'; // Adjust path to your store
import { commonStyles } from '../../../styles/commonStyles';
import { RootStackParamList } from '../../../navigationTypes';  // Import navigation types

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  useEffect(() => {
    setTimeout(() => {
      if (isAuthenticated) {
        navigation.navigate('DashboardScreen'); // Properly typed now
      } else {
        navigation.navigate('RegistrationScreen'); // Properly typed now
      }
    }, 3000); // 3 seconds delay
  }, [isAuthenticated, navigation]);

  return (
    <Box style={commonStyles.container}>
      <Text style={commonStyles.title}>Welcome to MyApp</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </Box>
  );
};

export default SplashScreen;
