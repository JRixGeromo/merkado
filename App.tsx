import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAppDispatch, useAppSelector } from './src/hooks/reduxHooks';
import { loadThemeFromStorage } from './src/store/slices/themeSlice';  // Correct path to your theme slice
import SplashScreen from './src/features/splash/screens/SplashScreen';
import LoginScreen from './src/features/account/screens/LoginScreen';
import RegistrationScreen from './src/features/account/screens/RegistrationScreen';
import DashboardScreen from './src/features/dashboard/screens/DashboardScreen';
import SettingsScreen from './src/features/settings/screens/SettingsScreen'; 
import AccountScreen from './src/features/account/screens/AccountScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList, RootTabParamList } from './src/navigationTypes';
import { commonStyles } from './src/styles/commonStyles'; 
import { theme } from './src/styles/theme'; // Import the theme object
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const themeType = useAppSelector(state => state.theme.theme); // Access theme from Redux
  const selectedTheme = theme[themeType]; // Get the light or dark theme directly from your theme file
  const dispatch = useAppDispatch();
  const { t } = useTranslation(); // Initialize translation hook

  useEffect(() => {
    const initializeApp = async () => {
      // Dispatch the thunk to load the theme from storage
      await dispatch(loadThemeFromStorage());

      // Simulate a loading delay (e.g., splash screen duration)
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    initializeApp();
  }, [dispatch]);

  const commonStyle = commonStyles(themeType); // Dynamically create styles based on the theme

  // Main Tabs for Bottom Tab Navigation
  const MainTabs = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName as string} size={size} color={color} />;
        },
        tabBarActiveTintColor: selectedTheme.iconColor, // Dynamic primary color from theme
        tabBarInactiveTintColor: selectedTheme.iconColor, // Dynamic inactive color from theme
        tabBarStyle: {
          backgroundColor: selectedTheme.backgroundColor, // Use background from theme
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ headerTitle: t('dashboard') }} // Translated title
      />
      <Tab.Screen
        name="Categories"
        component={DummyScreen}
        options={{ headerTitle: t('categories') }} // Translated title
      />
      <Tab.Screen
        name="Cart"
        component={DummyScreen}
        options={{ headerTitle: t('cart') }} // Translated title
      />
      <Tab.Screen
        name="Chat"
        component={DummyScreen} 
        options={{ headerTitle: t('chat') }} // Translated title
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen} 
        options={{ headerTitle: t('account') }} // Translated title
      />
    </Tab.Navigator>
  );

  // Use dynamic theming for the navigation container
  return (
    <NavigationContainer theme={themeType === 'light' ? DefaultTheme : DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegistrationScreen"
            component={RegistrationScreen}
            options={{
              headerTitle: t('register'), // Translated title
              headerStyle: { backgroundColor: selectedTheme.backgroundColor }, // Dynamic header background
              headerTintColor: selectedTheme.textColor, // Dynamic text color for header
            }}
          />
          <Stack.Screen
            name="DashboardScreen"
            component={MainTabs}
            options={{ headerShown: false }}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const DummyScreen = () => <Text>This is a screen!</Text>;
