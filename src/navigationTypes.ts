import {
  Product,
  Store,
} from '../src/features/dashboard/screens/DashboardScreen';

// Stack Navigator Params
export type RootStackParamList = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  RegistrationScreen: undefined;
  DashboardScreen: undefined;
  FrontStoreScreen: { vendorId: number }; // Add vendorId as a required parameter
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
  DetailsScreen: { item: Store | Product; type: 'store' | 'product' }; // Updated line
  CartScreen: undefined;
  CheckoutScreen: undefined; // Add CheckoutScreen here

  // New Marketplace Screens
  MarketplaceScreen: undefined;
  CategoryDetailScreen: { 
    category: { 
      name: string; 
      description: string; 
      subcategories: { 
        name: string; 
        description: string; // Add description for subcategories
      }[]; // Include subcategories with descriptions here
    };
  };
  ProductsScreen: { 
    subcategory: { 
      name: string; 
      description: string; // Include subcategory description here for consistency
    };
  };
};

// Tab Navigator Params
export type RootTabParamList = {
  Dashboard: undefined;
  Marketplace: undefined;
  'My Products': undefined;
  Chat: undefined;
  Transactions: undefined;
};
