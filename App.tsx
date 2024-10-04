import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAppDispatch, useAppSelector } from './src/hooks/reduxHooks';
import { toggleTheme } from './src/reducers/themeReducer';
import SplashScreen from './src/features/splash/screens/SplashScreen';
// import LoginScreen from './src/features/account/screens/LoginScreen';
import RegistrationScreen from './src/features/account/screens/RegistrationScreen';
import styles from './src/styles/styles'; // Import the styles

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity style={styles.button} onPress={() => dispatch(toggleTheme())}>
              <Text style={styles.buttonText}>Toggle Theme</Text>
            </TouchableOpacity>
          ),
        }}>
        {isLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
