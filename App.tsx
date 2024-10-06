import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAppDispatch, useAppSelector } from './src/hooks/reduxHooks';
import { loadTheme } from './src/reducers/themeReducer';
import SplashScreen from './src/features/splash/screens/SplashScreen';
import LoginScreen from './src/features/account/screens/LoginScreen';
import RegistrationScreen from './src/features/account/screens/RegistrationScreen';
import DashboardScreen from './src/features/dashboard/screens/DashboardScreen';
import SettingsScreen from './src/features/settings/screens/SettingsScreen'; // New import
import AccountScreen from './src/features/account/screens/AccountScreen'; // New import
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList, RootTabParamList } from './src/navigationTypes';

// Ensure the Stack Navigator uses the correct type definition for screens
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>(); // Define a tab navigator

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useAppSelector(state => state.theme.theme);
  const dispatch = useAppDispatch();

  // Function to load the theme from AsyncStorage
  const loadStoredTheme = async () => {
    try {
      const storedTheme = await AsyncStorage.getItem('user_theme');
      if (storedTheme) {
        // Load the theme into Redux state
        dispatch(loadTheme(storedTheme as 'light' | 'dark'));
      }
    } catch (error) {
      console.error('Failed to load theme from storage:', error);
    }
  };

  useEffect(() => {
    const initializeApp = async () => {
      await loadStoredTheme();  // Load the theme from AsyncStorage
  
      // Simulate loading time for splash screen
      setTimeout(() => {
        setIsLoading(false);  // Hide the splash screen after 3 seconds
      }, 3000);
    };
  
    initializeApp();  // Run the initialization function
  }, []);

  // Main Tabs for Bottom Tab Navigation
  const MainTabs = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';  // Changed to 'home'
          } else if (route.name === 'Categories') {
            iconName = focused ? 'list' : 'list-outline';  // Changed to 'list'
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';  // Kept as 'cart'
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';  // Changed to 'chatbubble'
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';  // Changed to 'person'
          }

          return <Icon name={iconName as string} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme === 'light' ? '#4CAF50' : '#007AFF',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: { backgroundColor: theme === 'light' ? '#fff' : '#333' },
        // headerRight: () => (
        //   <View
        //     style={{
        //       flexDirection: 'row',
        //       alignItems: 'center',
        //       paddingRight: 20,
        //     }}
        //   >
        //     {/* Notification Icon */}
        //     <TouchableOpacity style={{ marginRight: 15 }}>
        //       <Icon name="notifications-outline" size={24} color="#333" />
        //     </TouchableOpacity>

        //     {/* Profile Icon */}
        //     <TouchableOpacity style={{ marginRight: 15 }}>
        //       <Icon name="person-outline" size={24} color="#333" />
        //     </TouchableOpacity>

        //     {/* Theme Toggle (Rightmost) */}
        //     {/* <TouchableOpacity onPress={() => dispatch(toggleTheme())}>
        //       <Icon
        //         name={theme === 'light' ? 'moon' : 'sunny'}
        //         size={24}
        //         color={theme === 'light' ? '#000' : '#ccc'}
        //       />
        //     </TouchableOpacity> */}
        //   </View>
        // ),
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ headerTitle: 'MerkadoDash' }}
      />
      <Tab.Screen
        name="Categories"
        component={DummyScreen}
        options={{ headerTitle: 'Categories' }}
      />
      <Tab.Screen
        name="Cart"
        component={DummyScreen}
        options={{ headerTitle: 'Cart' }}
      />
      <Tab.Screen
        name="Chat"
        component={DummyScreen} //ChatScreen
        options={{ headerTitle: 'Chat' }} // Added Settings tab
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen} //AccountScreen
        options={{ headerTitle: 'Account' }} // Added Settings tab
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // Add theme toggle to every screen's header
          // headerRight: () => (
          //   <TouchableOpacity
          //     style={{ paddingRight: 20 }}
          //     onPress={() => dispatch(toggleTheme())}
          //   >
          //     <Icon
          //       name={theme === 'light' ? 'moon' : 'sunny'}
          //       size={24}
          //       color={theme === 'light' ? '#000' : '#ccc'}
          //     />
          //   </TouchableOpacity>
          // ),
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
            options={{ headerShown: false }} // This hides the entire header
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
