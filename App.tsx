import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAppDispatch, useAppSelector } from './src/hooks/reduxHooks';
import { toggleTheme } from './src/reducers/themeReducer';
import SplashScreen from './src/features/splash/screens/SplashScreen';
import LoginScreen from './src/features/account/screens/LoginScreen';
import RegistrationScreen from './src/features/account/screens/RegistrationScreen';
import Icon from 'react-native-vector-icons/Ionicons'; // Using Ionicons for theme toggle icon
import { RootStackParamList } from './src/navigationTypes'; // Add the correct typing

// Ensure the Stack Navigator uses the correct type definition for screens
const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Simulate loading time for splash screen
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 20 }} onPress={() => dispatch(toggleTheme())}>
              <Icon
                name={theme === 'light' ? 'moon' : 'sunny'} // Moon icon for dark mode, sun for light mode
                size={24}
                color={theme === 'light' ? '#000' : '#fff'} // More visible icon in dark mode
              />
            </TouchableOpacity>
          ),
        }}
      >
        {isLoading ? (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }} // No header on splash screen
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerTitle: 'Login', // User-friendly title
              }}
            />
            <Stack.Screen
              name="RegistrationScreen"
              component={RegistrationScreen}
              options={{
                headerTitle: 'Register', // User-friendly title
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
