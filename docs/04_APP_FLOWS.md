# 04 — App Flows

## Startup flow

```
App launch
  └── SplashScreen (3 second delay)
        └── Loads theme from AsyncStorage
              └── [Currently] navigates directly to LoginScreen
```

The splash screen shows for approximately 3 seconds while the theme is loaded from AsyncStorage. After that, the app navigates to `LoginScreen`.

> Note: There is no automatic session restore. Even if a user was previously logged in, they see the login screen on relaunch. Needs verification — auth token persistence is not shown in the code.

Source: `App.tsx:44-53`, `src/components/SplashScreen.tsx`

---

## Authentication flow

### Login

```
LoginScreen
  └── User enters email + password
        └── GraphQL mutation: LOGIN_USER
              ├── Success → dispatch setUser (Redux auth slice)
              │             → navigate to DashboardScreen
              └── Failure → show error
```

Source: `src/features/account/screens/LoginScreen.tsx`

### Registration

```
LoginScreen
  └── "Register" link
        └── RegistrationScreen
              └── [Form submission flow — needs verification: no backend call confirmed]
```

### Logout

```
AccountScreen or LogoutScreen
  └── [Needs verification: how logout clears Redux auth state and navigates back to Login]
```

---

## Main app structure (after login)

After login, the user sees the bottom tab navigator with 5 tabs:

```
DashboardScreen (tab)
Marketplace (tab)
Chat (tab)
Transactions (tab)
My Products (tab)
```

From any tab, the tab header right button (HeaderRight component) provides access to additional screens — exact targets need verification.

---

## Dashboard

```
DashboardScreen
  └── Summary widgets / overview content
        └── [Needs verification: what data is shown and from where]
```

Source: `src/features/dashboard/screens/DashboardScreen.tsx`

---

## Marketplace flow

```
MarketplaceScreen (tab)
  ├── Browse featured products and recently posted
  ├── Search and category toggle (SearchBarWithToggle)
  ├── Tap category card
  │     └── CategoryDetailScreen → ProductsScreen
  │                                   └── DetailsScreen (product detail)
  └── Tap product card
        └── DetailsScreen (product detail)
              └── [Cart button — navigates to CartScreen]
```

Source:
- `src/features/marketplace/screens/MarketplaceScreen.tsx`
- `src/features/marketplace/screens/CategoryDetailScreen.tsx`
- `src/features/marketplace/screens/ProductsScreen.tsx`
- `src/features/marketplace/screens/DetailsScreen.tsx`

> Current data: Marketplace screen uses local/hardcoded data defined in `src/features/marketplace/data.ts`. Not connected to backend.

---

## Cart and checkout flow

```
DetailsScreen
  └── Add to Cart
        └── CartScreen
              ├── View items, adjust quantities
              ├── See running total
              └── Checkout button
                    └── CheckoutScreen
                          └── [Order placement — needs verification, not connected to backend]
```

Source:
- `src/features/cart/screens/CartScreen.tsx`
- `src/features/cart/screens/CheckoutScreen.tsx`

> Cart state is managed locally within CartScreen. There is no Redux or backend cart persistence.

---

## My Products flow (seller)

```
My Products (tab) → MyProductsScreen
  ├── Lists user's products (fetched via Redux/Apollo → GET_PRODUCTS)
  ├── Tap "Add product" button
  │     └── UpsertProductScreen (create mode)
  │           └── Fill form → createProduct thunk → backend mutation → refetch list
  ├── Tap existing product
  │     └── UpsertProductScreen (edit mode)
  │           └── Edit form → updateProduct thunk → backend mutation → refetch list
  └── Delete product
        └── deleteProduct thunk → backend mutation → refetch list
```

Source:
- `src/features/myProducts/screens/MyProductsScreen.tsx`
- `src/features/myProducts/screens/UpsertProductScreen.tsx`
- `src/store/slices/productSlice.ts`
- `src/graphql/productMutations.ts`

> This is the only fully backend-connected CRUD flow in the app.

> Known limitation: `categoryId`, `vendorId`, and `unitId` are currently hardcoded to `1` in the create/edit form. These should eventually come from dropdowns populated by backend data.

---

## Account flow

```
AccountScreen (accessible from tab header or stack)
  ├── EditProfileScreen
  ├── ViewProfileScreen
  ├── ChangePasswordScreen
  ├── ManageAddressesScreen
  ├── PaymentMethodsScreen
  ├── SocialAccountsScreen
  └── LogoutScreen
```

Source: `src/features/account/screens/`

> Most sub-screens are UI only and not connected to the backend.

---

## Chat flow

```
Chat (tab) → ChatScreen
  └── [UI only — messaging interface, not connected to backend or real-time service]
```

Source: `src/features/chat/screens/ChatScreen.tsx`

---

## Transactions flow

```
Transactions (tab) → TransactionsScreen
  └── [UI only — list of transactions, local/hardcoded data]
```

Source: `src/features/transactions/screens/TransactionsScreen.tsx`

---

## Other screens (reachable but less prominent)

These screens exist but are not directly in the main navigation tabs. How they are reached is not fully confirmed:

| Screen | Likely entry point |
|---|---|
| FrontStoreScreen | Marketplace or Account area |
| FollowersScreen | Account area |
| FavoritesScreen | Dashboard or product detail |
| WishesScreen | Dashboard or product detail |
| RatingsReviewsScreen | Account or product detail |
| ReactionsScreen | Social/content interaction |
| OrdersScreen | Account or Transactions |
| ManageVendorsScreen | Account area (seller) |
| MarketingCampaignsScreen | Account area (seller) |
| HelpCenterScreen | Settings or Account |
| SettingsScreen | Account or tab header |
| LiveShowsScreen | Marketplace or Dashboard |
| OfflineShowsScreen | Shows section |

---

## Needs verification

- How the tab header right button (HeaderRight) navigates — which screen does it open?
- Whether there is a route guard that redirects unauthenticated users to LoginScreen.
- How LogoutScreen clears state and returns to LoginScreen.
- Whether RegistrationScreen submits to the backend.
- How FrontStoreScreen, FollowersScreen, and other secondary screens are reached from the main navigation.
