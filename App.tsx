import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAppDispatch, useAppSelector } from './src/hooks/reduxHooks';
import { toggleTheme } from './src/reducers/themeReducer';
import SplashScreen from './src/features/splash/screens/SplashScreen';
import LoginScreen from './src/features/account/screens/LoginScreen';
import RegistrationScreen from './src/features/account/screens/RegistrationScreen';
import DashboardScreen from './src/features/dashboard/screens/DashboardScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList, RootTabParamList } from './src/navigationTypes';

// Ensure the Stack Navigator uses the correct type definition for screens
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>(); // Define a tab navigator

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

  // Main Tabs for Bottom Tab Navigation
  const MainTabs = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
  
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Savings') {
            iconName = focused ? 'pricetag' : 'pricetag-outline';
          } else if (route.name === 'Recipes') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }
  
          return <Icon name={iconName as string} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme === 'light' ? '#4CAF50' : '#007AFF',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: { backgroundColor: theme === 'light' ? '#fff' : '#333' },
        headerRight: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 20 }}>
            
            {/* Notification Icon */}
            <TouchableOpacity style={{ marginRight: 15 }}>
              <Icon name="notifications-outline" size={24} color="#333" />
            </TouchableOpacity>
  
            {/* Profile Icon */}
            <TouchableOpacity style={{ marginRight: 15 }}>
              <Icon name="person-outline" size={24} color="#333" />
            </TouchableOpacity>
  
            {/* Theme Toggle (Rightmost) */}
            <TouchableOpacity onPress={() => dispatch(toggleTheme())}>
              <Icon
                name={theme === 'light' ? 'moon' : 'sunny'}
                size={24}
                color={theme === 'light' ? '#000' : '#ccc'}
              />
            </TouchableOpacity>
            
          </View>
        ),
      })}
    >
      <Tab.Screen name="Home" component={DashboardScreen} options={{ headerTitle: 'Merkado' }} />
      <Tab.Screen name="Savings" component={DummyScreen} options={{ headerTitle: 'Savings' }} />
      <Tab.Screen name="Recipes" component={DummyScreen} options={{ headerTitle: 'Recipes' }} />
      <Tab.Screen name="Cart" component={DummyScreen} options={{ headerTitle: 'Cart' }} />
    </Tab.Navigator>
  );
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // Add theme toggle to every screen's header
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 20 }} onPress={() => dispatch(toggleTheme())}>
              <Icon
                name={theme === 'light' ? 'moon' : 'sunny'}
                size={24}
                color={theme === 'light' ? '#000' : '#ccc'}
              />
            </TouchableOpacity>
          ),
        }}
      >
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <>
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{
                headerTitle: 'Login',
              }}
            />
            <Stack.Screen
              name="RegistrationScreen"
              component={RegistrationScreen}
              options={{
                headerTitle: 'Register',
              }}
            />
            <Stack.Screen
              name="DashboardScreen"
              component={MainTabs} // Load the bottom tab navigator for the dashboard
              options={{ headerShown: false }} // Hide the header for the dashboard with tabs
            />
          </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// Dummy screen component for the example (replace with your actual components)
const DummyScreen = () => <Text>This is a screen!</Text>;
