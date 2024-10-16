import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAppDispatch, useAppSelector } from './src/hooks/reduxHooks';
import { loadThemeFromStorage } from './src/store/slices/themeSlice';
import SplashScreen from './src/features/splash/screens/SplashScreen';
import LoginScreen from './src/features/account/screens/LoginScreen';
import RegistrationScreen from './src/features/account/screens/RegistrationScreen';
import DashboardScreen from './src/features/dashboard/screens/DashboardScreen';
import MarketplaceScreen from './src/features/marketplace/screens/MarketplaceScreen';
import MyProductsScreen from './src/features/myProducts/screens/MyProductsScreen';
import TransactionsScreen from './src/features/transactions/screens/TransactionsScreen';
import AccountScreen from './src/features/account/screens/AccountScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import DropdownMenu from './src/components/DropdownMenu';
import { RootStackParamList, RootTabParamList } from './src/navigationTypes';
import { commonStyles } from './src/styles/commonStyles'; 
import { theme } from './src/styles/theme'; // Import the theme object

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const themeType = useAppSelector(state => state.theme.theme); // Access theme from Redux
  const selectedTheme = theme[themeType]; // Get the light or dark theme directly from your theme file
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initializeApp = async () => {
      await dispatch(loadThemeFromStorage());
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    initializeApp();
  }, [dispatch]);

  const commonStyle = commonStyles(themeType);

  const MainTabs = () => (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Marketplace') {
            iconName = focused ? 'storefront' : 'storefront-outline';
          } else if (route.name === 'MyProducts') {
            iconName = focused ? 'cube' : 'cube-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'Transactions') {
            iconName = focused ? 'receipt' : 'receipt-outline';
          }

          return <Icon name={iconName as string} size={size} color={color} />;
        },
        tabBarActiveTintColor: selectedTheme.iconColor,
        tabBarInactiveTintColor: selectedTheme.iconColor,
        tabBarStyle: commonStyle.tabBarStyle, // Moved to commonStyles
        tabBarLabelStyle: commonStyle.tabBarLabelStyle,
        // Add the custom header for the Dashboard screen
        headerTitle: route.name === 'Dashboard' ? () => (
          <View style={commonStyle.headerContainer}>
            <Image
              source={require('./assets/logo.png')} // Replace with your logo path
              style={commonStyle.headerLogo} // Moved to commonStyles
            />
            <Text style={commonStyle.screenHeaderTitle}>Dashboard</Text>
          </View>
        ) : route.name,
        headerRight: () => (
          <View style={commonStyle.headerRightContainer}>
            <Icon
              name="cart-outline"
              size={25}
              color={selectedTheme.iconColor}
              onPress={() => navigation.navigate('CartScreen')}
              style={commonStyle.headerIcon} // Moved to commonStyles
            />
            <DropdownMenu navigation={navigation} />
          </View>
        ),
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Marketplace" component={MarketplaceScreen} />
      <Tab.Screen name="MyProducts" component={MyProductsScreen} />
      <Tab.Screen name="Chat" component={DummyScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer theme={themeType === 'light' ? DefaultTheme : DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{
            headerTitle: 'Register',
            headerStyle: { backgroundColor: selectedTheme.fullBackgrounColor },
            headerTintColor: selectedTheme.textPrimary,
          }}
        />
        <Stack.Screen
          name="DashboardScreen"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        {/* Add other Stack.Screen components here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const DummyScreen = () => <Text>This is a screen!</Text>;
