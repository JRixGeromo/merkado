# 05 — Data and API Flow

## Overview

Data in this app flows through two parallel systems:

1. **Redux** — manages client-side application state (products, auth, theme)
2. **Apollo Client** — handles GraphQL communication with the backend

These two systems are connected: Redux async thunks call Apollo Client directly to make GraphQL requests, then store the results in Redux state. Apollo Client is also provided via `<ApolloProvider>` for any component that might use Apollo hooks directly.

---

## Backend connection

| Property | Value |
|---|---|
| Protocol | GraphQL over HTTP |
| Endpoint | `http://10.0.2.2:5000/` |
| Reason for IP | `10.0.2.2` is the Android emulator's alias for the host machine's localhost |
| Cache strategy | `InMemoryCache` with `network-only` fetch policy on all product queries |

Source: `src/graphql/apolloClient.ts`

> The backend URL is hardcoded. There is no environment variable or build-time injection visible in the frontend code. Needs verification for production builds.

---

## Apollo Client setup

File: `src/graphql/apolloClient.ts`

```
InMemoryCache
  └── typePolicies: Query.products → always replace with incoming (no merging)

Cache persistence
  └── apollo3-cache-persist → AsyncStorage key: "apollo-cache"
  └── Runs at module load time (async, before client is used)

ApolloClient
  └── uri: http://10.0.2.2:5000/
  └── errorPolicy: "all" on both watchQuery and query defaults
```

The Apollo Client is exported as a singleton from `apolloClient.ts` and imported wherever needed.

---

## Redux store

File: `src/store/store.ts`

Three slices:

| Slice | State shape |
|---|---|
| `theme` | `{ theme: 'light' \| 'dark' \| 'femme' }` |
| `auth` | `{ user: object \| null, token: string \| null, isAuthenticated: boolean }` |
| `products` | `{ products: Product[], status: 'idle' \| 'loading' \| 'succeeded' \| 'failed', error: string \| null }` |

---

## Product data flow (fully wired)

This is the only fully backend-connected data flow.

### Fetch products

```
MyProductsScreen mounts
  └── dispatch(fetchProducts())
        └── productSlice async thunk:
              1. client.clearStore()        ← clears Apollo cache entirely
              2. client.query(GET_PRODUCTS, { fetchPolicy: 'network-only' })
              3. Returns products array
        └── Redux state: products.products = [...], status = 'succeeded'
  └── MyProductsScreen reads state.products.products via useAppSelector
```

### Create product

```
UpsertProductScreen (create mode)
  └── User fills form → taps Save
        └── dispatch(createProduct(input))
              └── productSlice async thunk:
                    1. client.mutate(CREATE_PRODUCT, variables)
                    2. client.query(GET_PRODUCTS, { fetchPolicy: 'network-only' })
                    3. Returns refreshed products array
              └── Redux state: products.products = [...] (full refresh)
  └── Navigate back to MyProductsScreen
```

### Update product

```
UpsertProductScreen (edit mode, receives existing product via navigation props)
  └── User edits form → taps Save
        └── dispatch(updateProduct(input))
              └── productSlice async thunk:
                    1. client.mutate(UPDATE_PRODUCT, variables)
                    2. client.query(GET_PRODUCTS, { fetchPolicy: 'network-only' })
                    3. Returns refreshed products array
              └── Redux state: products.products = [...] (full refresh)
```

### Delete product

```
MyProductsScreen
  └── User taps Delete on a product
        └── dispatch(deleteProduct(id))
              └── productSlice async thunk:
                    1. client.mutate(DELETE_PRODUCT, { id })
                    2. client.query(GET_PRODUCTS, { fetchPolicy: 'network-only' })
                    3. Returns refreshed products array
              └── Redux state: products.products = [...] (full refresh)
```

> Pattern: Every mutation (create, update, delete) is followed by a full refetch of all products. This ensures the UI is always in sync with the backend but is not optimistic.

Source: `src/store/slices/productSlice.ts`

---

## GraphQL operations defined

### Queries

| Operation | Defined in | What it fetches |
|---|---|---|
| `GET_PRODUCTS` | `productSlice.ts` (inline) | All products with id, name, price, stock, salePrice, longDescription, isFeatured, isActive, vendor (id, businessName) |

### Mutations

| Operation | Defined in | Variables |
|---|---|---|
| `CREATE_PRODUCT` | `productMutations.ts` | name, price, stock, salePrice, longDescription, categoryId, vendorId, unitId, isFeatured, isActive |
| `UPDATE_PRODUCT` | `productMutations.ts` | id, name?, price?, stock?, salePrice?, longDescription?, isFeatured?, isActive? |
| `DELETE_PRODUCT` | `productMutations.ts` | id |
| `LOGIN_USER` | `LoginScreen.tsx` (inline) | email, password |

Source: `src/graphql/productMutations.ts`, `src/features/account/screens/LoginScreen.tsx`

---

## Authentication data flow

```
LoginScreen
  └── User submits email + password
        └── Apollo useMutation(LOGIN_USER)
              └── Backend returns: { token, user object }
        └── dispatch(setUser({ user, token }))
              └── authSlice sets: isAuthenticated = true, user = ..., token = ...
  └── navigate('DashboardScreen')
```

> The token is stored in Redux state only. It is not persisted to AsyncStorage or used as a header in subsequent GraphQL requests (at least not in the visible frontend code). Needs verification — if the backend requires auth headers, this is a gap.

---

## Theme data flow

```
App startup
  └── dispatch(loadThemeFromStorage())
        └── themeSlice async thunk reads AsyncStorage key "theme"
        └── Sets state.theme.theme to stored value (or default)

User changes theme (Settings screen)
  └── dispatch(toggleTheme())
        └── themeSlice cycles through themes
        └── Writes new theme value to AsyncStorage

Any screen
  └── useTheme() hook
        └── reads state.theme.theme via useAppSelector
        └── returns { themeType, commonStyle, baseStyle, myTheme }
```

Source: `src/store/slices/themeSlice.ts`, `src/hooks/useTheme.ts`

---

## Language / i18n data flow

```
App startup (AppWrapper.tsx)
  └── i18n.ts initializes i18next
        └── Detects device locale via react-native-localize
        └── Falls back to AsyncStorage-stored preference
        └── Loads translation JSON from src/i18n/locales/

Any component
  └── useTranslation() hook → t('key') returns translated string
```

Source: `src/i18n/i18n.ts`, `src/i18n/locales/`

---

## Local / hardcoded data

Several screens use data that is not fetched from the backend:

| Screen | Data source |
|---|---|
| MarketplaceScreen | `src/features/marketplace/data.ts` |
| CartScreen | Local component state, sample items |
| ChatScreen | Local component state or hardcoded messages |
| TransactionsScreen | Local state or hardcoded list |
| DashboardScreen | Needs verification |

---

## Needs verification

- Whether the auth token is attached to GraphQL requests as an `Authorization` header — no `authLink` or middleware is visible in `apolloClient.ts`.
- Whether the backend session persists between app restarts (token storage and rehydration).
- What the `LOGIN_USER` mutation response shape is (token field name, user object fields).
- Whether `client.clearStore()` in `fetchProducts` causes any side effects on other Apollo-cached queries outside of products.
- What happens when the backend is unreachable — the error is caught and stored in `products.error`, but the UI error display behavior is not confirmed.
