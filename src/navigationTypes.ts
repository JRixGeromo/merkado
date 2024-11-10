import {
  Product,
  Store,
} from '../src/features/dashboard/screens/DashboardScreen';
// Define reusable types for categories and subcategories
type Subcategory = {
  name: string;
  description: string;
};

type Category = {
  name: string;
  description: string;
  subcategories: Subcategory[];
};

// Stack Navigator Params
export type RootStackParamList = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  RegistrationScreen: undefined;
  DashboardScreen: undefined;
  FrontStoreScreen: { vendorId: number }; // Vendor-specific screen
  AccountScreen: undefined;
  ChangePasswordScreen: undefined;
  ManageAddressesScreen: undefined;
  PaymentMethodsScreen: undefined;
  ProductCategoriesScreen: undefined;
  MyProductsScreen: undefined;
  UpsertProductScreen: undefined; // For adding/updating products
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
  DetailsScreen: { item: Store | Product; type: 'store' | 'product' }; // Details for store or product
  CartScreen: undefined;
  CheckoutScreen: undefined; // Add Checkout functionality

  // Marketplace Screens
  MarketplaceScreen: undefined;
  CategoryDetailScreen: { category: Category };
  ProductsScreen: { subcategory: Subcategory };
};

// Tab Navigator Params
export type RootTabParamList = {
  Dashboard: undefined;
  Marketplace: undefined;
  'My Products': undefined;
  Chat: undefined;
  Transactions: undefined;
};
