# 03 — Architecture Overview

## High-level structure

The app is a single React Native codebase that builds to Android, iOS, and Web. All application logic lives in `src/`. Entry points are `index.js` (native) and `index.web.tsx` (web).

```
index.js / index.web.tsx
  └── AppWrapper.tsx         ← Redux Provider + ApolloProvider + i18n init
        └── App.tsx          ← Navigation container + screen registration
              └── screens    ← Feature screens rendered by navigation
```

---

## Folder structure — `src/`

```
src/
├── components/         Shared UI components used across features
├── constants/          App-wide constant values (e.g. reaction emoji list)
├── features/           Feature modules — each has screens/ and styles/
├── graphql/            Apollo Client setup and GraphQL mutations
├── hooks/              Custom React hooks (Redux hooks, useTheme)
├── i18n/               i18next configuration and translation files
├── store/              Redux store and slices
├── styles/             Global theme, base styles, and common styles
├── utils/              Utility functions (responsive sizing)
├── navigationTypes.ts  Navigation route and param type definitions
└── types.ts            Shared TypeScript types (Product, Store, etc.)
```

---

## Entry points

| File | Platform | Role |
|---|---|---|
| `index.js` | Android, iOS | Registers `AppWrapper` as the root component |
| `index.web.tsx` | Web | Webpack entry — renders `AppWrapper` into DOM |

---

## App wrapper — `AppWrapper.tsx`

Wraps the entire app with three providers:
1. **Redux `<Provider>`** — makes the Redux store available everywhere
2. **`<ApolloProvider>`** — makes Apollo Client available for GraphQL hooks
3. **i18n initialization** — calls `i18n.ts` setup at startup

---

## Navigation — `App.tsx`

Two navigators are used, nested:

### Stack Navigator (outer)
Handles full-screen navigation. Registered screens:

| Screen name | Component |
|---|---|
| `SplashScreen` | `SplashScreen` — shown on startup |
| `LoginScreen` | `LoginScreen` |
| `RegistrationScreen` | `RegistrationScreen` |
| `DashboardScreen` | `MainTabs` (bottom tab navigator) |
| `DetailsScreen` | `DetailsScreen` — product detail |
| `FrontStoreScreen` | `FrontStoreScreen` — vendor storefront |
| `CategoryDetailScreen` | `CategoryDetailScreen` |
| `ProductsScreen` | `ProductsScreen` — products in a category |
| `CartScreen` | `CartScreen` |
| `CheckoutScreen` | `CheckoutScreen` |
| `AccountScreen` | `AccountScreen` |
| `UpsertProductScreen` | `UpsertProductScreen` — create/edit product |

### Bottom Tab Navigator (inner — `MainTabs`)
Shown when the user reaches `DashboardScreen`:

| Tab | Component |
|---|---|
| Dashboard | `DashboardScreen` |
| Marketplace | `MarketplaceScreen` |
| Chat | `ChatScreen` |
| Transactions | `TransactionsScreen` |
| My Products | `MyProductsScreen` |

---

## Feature modules — `src/features/`

Each feature is a self-contained folder. The structure inside each feature:

```
features/<feature>/
├── screens/     Screen components
└── styles/      Feature-specific StyleSheet styles
```

Some features also have a `components/` subfolder for local-only UI pieces.

### All feature modules

| Feature folder | Main screen(s) |
|---|---|
| `account/` | Login, Register, Account, EditProfile, ViewProfile, ChangePassword, ManageAddresses, PaymentMethods, Logout |
| `campaigns/` | MarketingCampaigns |
| `cart/` | Cart, Checkout |
| `categories/` | ProductCategories |
| `chat/` | Chat |
| `dashboard/` | Dashboard |
| `favorites/` | Favorites |
| `followers/` | Followers |
| `frontStore/` | FrontStore |
| `helpCenter/` | HelpCenter |
| `marketplace/` | Marketplace, CategoryDetail, Products, Details |
| `myProducts/` | MyProducts, UpsertProduct |
| `orders/` | Orders |
| `ratings/` | RatingsReviews |
| `reactions/` | Reactions |
| `settings/` | Settings |
| `shows/` | LiveShows, OfflineShows |
| `socialAccounts/` | SocialAccounts |
| `transactions/` | Transactions |
| `vendors/` | ManageVendors |
| `wishes/` | Wishes |

---

## State management — `src/store/`

Redux Toolkit is used. Three slices:

| Slice | File | What it manages |
|---|---|---|
| `theme` | `slices/themeSlice.ts` | Active theme (`light`/`dark`/`femme`), loaded from AsyncStorage on startup |
| `auth` | `slices/authSlice.ts` | Current user object, token, `isAuthenticated` flag |
| `products` | `slices/productSlice.ts` | Product list, loading status, error; exposes async thunks for CRUD |

---

## GraphQL layer — `src/graphql/`

| File | Role |
|---|---|
| `apolloClient.ts` | Creates and exports the Apollo Client singleton; sets up InMemoryCache with cache persistence to AsyncStorage |
| `productMutations.ts` | `CREATE_PRODUCT`, `UPDATE_PRODUCT`, `DELETE_PRODUCT` mutation definitions |

`GET_PRODUCTS` query is defined inline inside `productSlice.ts`.

The Apollo Client is used directly (imported as `client`) inside Redux async thunks. It is also provided via `<ApolloProvider>` for any component that uses Apollo hooks directly.

---

## Shared components — `src/components/`

Reusable UI components not tied to any single feature. Includes:

- `IconLib.tsx` — centralized icon wrapper (Ionicons + FontAwesome)
- `CustomButton.tsx` — styled button
- `TextInputWithIcon.tsx` — text input with icon
- `ContentCard.tsx` / `ContentCardWide.tsx` — product/listing card layouts
- `GradientBG.tsx` — gradient background
- `ReactionBar.tsx` — emoji reaction selector
- `SplashScreen.tsx` — loading/splash screen
- `ConfirmationModal.tsx` — reusable confirmation dialog
- `SlideContentModal.tsx` — slide-in modal
- `Floating*.tsx` — animated overlay elements (hearts, dollars, stars, bubbles)
- `navigation/TabHeader.tsx` — custom header title and right-side header buttons

---

## Styling architecture — `src/styles/`

| File | Role |
|---|---|
| `theme.ts` | Color definitions per theme (`light`, `dark`, `femme`). Exports `theme` object and `ThemeType` interface |
| `commonStyles.ts` | Common StyleSheet styles used across multiple screens |
| `baseStyles.ts` | Base-level StyleSheet definitions |

Each feature also has a local `styles/` folder for screen-specific styles.

The `useTheme` hook (`src/hooks/useTheme.ts`) centralizes theme access — it returns `themeType`, `commonStyle`, `baseStyle`, and `myTheme` so screens do not directly import from multiple style files.

---

## Responsive sizing — `src/utils/responsive.ts`

Exports `normalizeFontSize`, `normalizeHeight`, `normalizeWidth`. These functions scale values relative to a reference screen size. Web builds use a separate scaling path.

---

## Known assumptions

- The Apollo Client singleton is shared between the Redux layer (direct import) and the React component tree (via ApolloProvider). This is an unusual pattern — the same client instance is used in both places.
- There is no authentication guard on navigation. After login, the app navigates to `DashboardScreen` manually. There is no automatic redirect based on `isAuthenticated` state from Redux.

## Needs verification

- Whether `AccountScreen` (which is registered in the stack but not in the bottom tabs) is accessible via the tab header right button or another entry point.
- Whether any screens outside `myProducts/` and `account/` are connected to the backend.
- Whether the `auth` Redux slice is actually populated after login (the login screen dispatches `setUser`, but this needs confirmation against the actual mutation response shape).
