import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAppDispatch, useAppSelector } from './src/hooks/reduxHooks';
import { loadThemeFromStorage } from './src/store/slices/themeSlice';  // Correct path to your theme slice
import SplashScreen from './src/features/splash/screens/SplashScreen';
import LoginScreen from './src/features/account/screens/LoginScreen';
import RegistrationScreen from './src/features/account/screens/RegistrationScreen';
import DashboardScreen from './src/features/dashboard/screens/DashboardScreen';
import MarketplaceScreen from './src/features/marketplace/screens/MarketplaceScreen';
import MyProductsScreen from './src/features/myProducts/screens/MyProductsScreen';
import TransactionsScreen from './src/features/transactions/screens/TransactionsScreen';

import OrdersScreen from './src/features/orders/screens/OrdersScreen';
import LogoutScreen from './src/features/account/screens/LogoutScreen';
import ViewProfileScreen from './src/features/account/screens/ViewProfileScreen';
import EditProfileScreen from './src/features/account/screens/EditProfileScreen';
import ChangePasswordScreen from './src/features/account/screens/ChangePasswordScreen';
import ManageAddressesScreen from './src/features/account/screens/ManageAddressesScreen';
import PaymentMethodsScreen from './src/features/account/screens/PaymentMethodsScreen';
import ProductCategoriesScreen from './src/features/categories/screens/ProductCategoriesScreen';
import FavoritesScreen from './src/features/favorites/screens/FavoritesScreen';
import LiveShowsScreen from './src/features/shows/screens/LiveShowsScreen';
import OfflineShowsScreen from './src/features/shows/screens/OfflineShowsScreen';
import MarketingCampaignsScreen from './src/features/campaigns/screens/MarketingCampaignsScreen';
import ManageVendorsScreen from './src/features/vendors/screens/ManageVendorsScreen';
import WishesScreen from './src/features/wishes/screens/WishesScreen';
import RatingsReviewsScreen from './src/features/ratings/screens/RatingsReviewsScreen';
import ReactionsScreen from './src/features/reactions/screens/ReactionsScreen';
import FollowersScreen from './src/features/followers/screens/FollowersScreen';
import SocialAccountsScreen from './src/features/socialAccounts/screens/SocialAccountsScreen';
import HelpCenterScreen from './src/features/helpCenter/screens/HelpCenterScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import DropdownMenu from './src/components/DropdownMenu'; // Import DropdownMenu here
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
        tabBarStyle: {
          backgroundColor: selectedTheme.backgroundColor,
        },
        headerRight: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
            {/* Cart Icon */}
            <Icon
              name="cart-outline"
              size={25}
              color={selectedTheme.iconColor}
              onPress={() => navigation.navigate('CartScreen')}
              style={{ marginRight: 20 }}  // Add space between cart and dropdown menu
            />
            {/* Dropdown Menu */}
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
              headerStyle: { backgroundColor: selectedTheme.backgroundColor },
              headerTintColor: selectedTheme.textColor,
            }}
          />
          <Stack.Screen
            name="DashboardScreen"
            component={MainTabs}
            options={{ headerShown: false }}
          />
        <Stack.Screen name="ViewProfileScreen" component={ViewProfileScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
        <Stack.Screen name="ManageAddressesScreen" component={ManageAddressesScreen} />
        <Stack.Screen name="PaymentMethodsScreen" component={PaymentMethodsScreen} />
        <Stack.Screen name="ProductCategoriesScreen" component={ProductCategoriesScreen} />
        <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
        <Stack.Screen name="LiveShowsScreen" component={LiveShowsScreen} />
        <Stack.Screen name="OfflineShowsScreen" component={OfflineShowsScreen} />
        <Stack.Screen name="MarketingCampaignsScreen" component={MarketingCampaignsScreen} />
        <Stack.Screen name="ManageVendorsScreen" component={ManageVendorsScreen} />
        <Stack.Screen name="WishesScreen" component={WishesScreen} />
        <Stack.Screen name="RatingsReviewsScreen" component={RatingsReviewsScreen} />
        <Stack.Screen name="ReactionsScreen" component={ReactionsScreen} />
        <Stack.Screen name="FollowersScreen" component={FollowersScreen} />
        <Stack.Screen name="SocialAccountsScreen" component={SocialAccountsScreen} />
        <Stack.Screen name="HelpCenterScreen" component={HelpCenterScreen} />
        <Stack.Screen name="LogoutScreen" component={LogoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const DummyScreen = () => <Text>This is a screen!</Text>;
