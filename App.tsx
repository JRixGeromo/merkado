import React, { useEffect, useState } from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAppDispatch, useAppSelector } from './src/hooks/reduxHooks';
import { loadThemeFromStorage } from './src/store/slices/themeSlice';
import SplashScreen from './src/components/SplashScreen';
import LoginScreen from './src/features/account/screens/LoginScreen';
import RegistrationScreen from './src/features/account/screens/RegistrationScreen';
import DashboardScreen from './src/features/dashboard/screens/DashboardScreen';
import FrontStoreScreen from './src/features/frontStore/screens/FrontStoreScreen';
import MarketplaceScreen from './src/features/marketplace/screens/MarketplaceScreen';
import CategoryDetailScreen from './src/features/marketplace/screens/CategoryDetailScreen';
import ProductsScreen from './src/features/marketplace/screens/ProductsScreen';

import DetailsScreen from './src/features/marketplace/screens/DetailsScreen';
import MyProductsScreen from './src/features/myProducts/screens/MyProductsScreen';
import UpsertProductScreen from './src/features/myProducts/screens/UpsertProductScreen';
import ChatScreen from './src/features/chat/screens/ChatScreen';
import CartScreen from './src/features/cart/screens/CartScreen';
import CheckoutScreen from './src/features/cart/screens/CheckoutScreen';
import TransactionsScreen from './src/features/transactions/screens/TransactionsScreen';
import AccountScreen from './src/features/account/screens/AccountScreen';
import IconLib from './src/components/IconLib';
import { HeaderTitle, HeaderRight } from './src/components/navigation/TabHeader';
import { RootStackParamList, RootTabParamList } from './src/navigationTypes';
import { commonStyles } from './src/styles/commonStyles';
import { theme as appTheme } from './src/styles/theme';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType);
  const selectedTheme = appTheme[themeType];
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

  const MainTabs = () => (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => {
        return {
          tabBarIcon: ({ focused, color }) => {
            const iconSize = 22; // Set your desired icon size here

            if (route.name === 'Dashboard') {
              return focused ? (
                <IconLib.Dashboard size={iconSize} color={color} />
              ) : (
                <IconLib.Dashboard_O size={iconSize} color={color} />
              );
            } else if (route.name === 'Marketplace') {
              return focused ? (
                <IconLib.Marketplace size={iconSize} color={color} />
              ) : (
                <IconLib.Marketplace_O size={iconSize} color={color} />
              );
            } else if (route.name === 'My Products') {
              return focused ? (
                <IconLib.Products size={iconSize} color={color} />
              ) : (
                <IconLib.Products_O size={iconSize} color={color} />
              );
            } else if (route.name === 'Chat') {
              return focused ? (
                <IconLib.Chat size={iconSize} color={color} />
              ) : (
                <IconLib.Chat_O size={iconSize} color={color} />
              );
            } else if (route.name === 'Transactions') {
              return focused ? (
                <IconLib.Transactions size={iconSize} color={color} />
              ) : (
                <IconLib.Transactions_O size={iconSize} color={color} />
              );
            }
            return null;
          },
          tabBarActiveTintColor: selectedTheme.iconColor1st,
          tabBarInactiveTintColor: selectedTheme.iconColor2nd,
          tabBarStyle: [
            commonStyle.tabBarStyle,
            {
              borderTopWidth: 1,
              borderTopColor: selectedTheme.headerBorderColor,
            },
          ],
          tabBarLabelStyle: commonStyle.tabBarLabelStyle,
          headerStyle: {
            backgroundColor: selectedTheme.tabHeaderBGColor,
            borderBottomWidth: 0.3,
            borderBottomColor: selectedTheme.headerBorderColor,
          },
          //headerTitleStyle: commonStyle.screenHeaderTitle,
          headerTitle: () => <HeaderTitle route={route} />,
          headerRight: () => <HeaderRight navigation={navigation} />,
        };
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Marketplace" component={MarketplaceScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="My Products" component={MyProductsScreen} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'transparent', // Transparent NavigationContainer background
        },
      }}
    >
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
            headerStyle: {
              backgroundColor: selectedTheme.tabHeaderBGColor,
            },
            headerTintColor: selectedTheme.text1st,
          }}
        />
        <Stack.Screen
          name="DashboardScreen"
          component={MainTabs}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: selectedTheme.tabHeaderBGColor,
            },
          }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{
            headerTitle: 'Details',
            headerStyle: {
              backgroundColor: selectedTheme.tabHeaderBGColor,
            },
            headerTintColor: selectedTheme.text1st,
          }}
        />
        <Stack.Screen
          name="FrontStoreScreen"
          component={FrontStoreScreen}
          options={{
            headerTitle: 'FrontStore',
            headerStyle: {
              backgroundColor: selectedTheme.tabHeaderBGColor,
            },
            headerTintColor: selectedTheme.text1st,
          }}
        />
        <Stack.Screen
          name="CategoryDetailScreen"
          component={CategoryDetailScreen}
          options={{
            headerTitle: 'Category Details',
            headerStyle: {
              backgroundColor: selectedTheme.tabHeaderBGColor,
            },
            headerTintColor: selectedTheme.text1st,
          }}
        />
        <Stack.Screen
          name="ProductsScreen"
          component={ProductsScreen}
          options={{
            headerTitle: 'Products',
            headerStyle: {
              backgroundColor: selectedTheme.tabHeaderBGColor,
            },
            headerTintColor: selectedTheme.text1st,
          }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            headerTitle: 'Cart',
            headerStyle: {
              backgroundColor: selectedTheme.tabHeaderBGColor,
            },
            headerTintColor: selectedTheme.text1st,
          }}
        />
        <Stack.Screen
          name="CheckoutScreen"
          component={CheckoutScreen}
          options={{
            headerTitle: 'Checkout',
            headerStyle: {
              backgroundColor: selectedTheme.tabHeaderBGColor,
            },
            headerTintColor: selectedTheme.text1st,
          }}
        />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen
          name="UpsertProductScreen"
          component={UpsertProductScreen}
          options={{
            headerTitle: 'Product',
            headerStyle: {
              backgroundColor: selectedTheme.tabHeaderBGColor,
            },
            headerTintColor: selectedTheme.text1st,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
