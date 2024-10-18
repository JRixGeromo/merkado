// src/navigationTypes.ts
import { Product, Store } from '../src/features/dashboard/screens/DashboardScreen';
// Stack Navigator Params
export type RootStackParamList = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  RegistrationScreen: undefined;
  DashboardScreen: undefined;
  AccountScreen: undefined;
  ChangePasswordScreen: undefined;
  ManageAddressesScreen: undefined;
  PaymentMethodsScreen: undefined;
  ProductCategoriesScreen: undefined;
  MyProductsScreen: undefined;
  OrdersScreen: undefined;
  FavoritesScreen: undefined;
  LiveShowsScreen: undefined;
  OfflineShowsScreen: undefined;
  MarketingCampaignsScreen: undefined;
  ManageVendorsScreen: undefined;
  WishesScreen: undefined;
  RatingsReviewsScreen: undefined;
  ReactionsScreen: undefined;
  FollowersScreen: undefined;
  SocialAccountsScreen: undefined;
  HelpCenterScreen: undefined;
  DetailsScreen: { item: Store | Product; type: 'store' | 'product' };  // Updated line
  LogoutScreen: undefined;
  
};


// Tab Navigator Params
export type RootTabParamList = {
  Dashboard: undefined;
  Marketplace: undefined;
  MyProducts: undefined;
  Chat: undefined;
  Transactions: undefined;
};
