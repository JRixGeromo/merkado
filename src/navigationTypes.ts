import { Product, Store } from './types'; // Import the shared types

type Subcategory = {
  name: string;
  description: string;
};

type Category = {
  name: string;
  description: string;
  subcategories: Subcategory[];
};

export type RootStackParamList = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  RegistrationScreen: undefined;
  DashboardScreen: undefined;
  FrontStoreScreen: { vendorId: number };
  AccountScreen: undefined;
  ChangePasswordScreen: undefined;
  ManageAddressesScreen: undefined;
  PaymentMethodsScreen: undefined;
  ProductCategoriesScreen: undefined;
  MyProductsScreen: undefined;
  UpsertProductScreen: undefined;
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
  DetailsScreen: { item: Store | Product; type: 'store' | 'product' };
  CartScreen: undefined;
  CheckoutScreen: undefined;
  MarketplaceScreen: undefined;
  CategoryDetailScreen: { category: Category };
  ProductsScreen: { subcategory: Subcategory };
};

export type RootTabParamList = {
  Dashboard: undefined;
  Marketplace: undefined;
  'My Products': undefined;
  Chat: undefined;
  Transactions: undefined;
};
