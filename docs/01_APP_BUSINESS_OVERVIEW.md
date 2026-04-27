# 01 — App Business Overview

## What is Merkado?

Merkado is a mobile marketplace application. In Filipino, "merkado" means "market" or "marketplace." The app allows users to browse products, manage their own product listings, interact with other sellers, and conduct commerce.

The app is aimed at a Philippine audience — it supports Filipino regional languages and uses Philippine-context terminology.

---

## Who uses the app?

The app appears designed to support at least two types of users:

### Buyers
- Browse the marketplace
- View product details
- Add products to a cart
- Proceed to checkout
- Track orders and transactions
- React to and comment on listings

### Sellers / Vendors
- List their own products (My Products)
- Manage product inventory, pricing, and visibility
- Run live selling shows
- View followers and ratings
- Manage their front store (storefront page)
- Run marketing campaigns

> The same app serves both roles. A single user may be both a buyer and a seller. The current codebase does not show explicit role-switching UI.

---

## Core features

| Feature | Status |
|---|---|
| Login / Registration | Connected to backend (GraphQL) |
| My Products (CRUD) | Connected to backend (GraphQL) |
| Marketplace browse | UI exists, data is local/hardcoded |
| Product detail view | UI exists, data is passed via navigation props |
| Shopping cart | UI exists, local state only |
| Checkout | UI exists, not connected to backend |
| Orders / Transactions | UI exists, not connected to backend |
| Chat / Messaging | UI exists, not connected to backend |
| Live shows | UI exists, not connected to backend |
| Ratings & reviews | UI exists, not connected to backend |
| Followers | UI exists, not connected to backend |
| Favorites / Wishes | UI exists, not connected to backend |
| Campaigns | UI exists, not connected to backend |
| Social accounts | UI exists, not connected to backend |
| Help center | UI exists, not connected to backend |
| Settings | UI exists (theme toggle), partial backend connection |

---

## Languages supported

The app supports 5 languages, all Philippine-regional:

| Code | Language |
|---|---|
| `en` | English |
| `tl` | Tagalog |
| `bs` | Bisaya / Cebuano |
| `il` | Hiligaynon / Ilonggo |
| `mb` | Masbateño |

Language detection is automatic based on device locale, with fallback to AsyncStorage preference.

Source: `src/i18n/`

---

## Themes

The app has three visual themes, selectable by the user:

| Theme | Description |
|---|---|
| `light` | Standard light mode |
| `dark` | Dark mode |
| `femme` | A distinct color palette (likely pink/feminine tones) |

Theme preference is persisted to AsyncStorage and loaded on app startup.

Source: `src/styles/theme.ts`, `src/store/slices/themeSlice.ts`

---

## Known assumptions

- The app is intended for the Philippine market based on language support and naming.
- Vendor and buyer roles are not explicitly separated at the UI level; a single user account may cover both.
- "Live selling" (live video commerce) is a planned or in-progress feature.

## Needs verification

- Whether there is a role/permission system on the backend that restricts seller features.
- What "Front Store" represents — it appears to be a public-facing storefront page for a vendor, but the screen is mostly placeholder.
- Whether the "femme" theme has a specific business reason or is just a style option.
- What "Campaigns" covers — marketing campaigns, promotions, or something else.
