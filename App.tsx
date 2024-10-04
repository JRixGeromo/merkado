import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/features/splash/screens/SplashScreen';  // Your Splash Screen component
import LoginScreen from './src/features/account/screens/RegistrationScreen';  // Your login screen
//import RegisterScreen from './src/screens/RegisterScreen';  // Your register screen

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., fetching resources)
    setTimeout(() => {
      setIsLoading(false);  // After 3 seconds, show the landing screen
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
