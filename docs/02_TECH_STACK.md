# 02 — Tech Stack

## Runtime framework

| Tool | Version | Role |
|---|---|---|
| React Native | 0.75.4 | Mobile app framework (Android + iOS) |
| React | (bundled with RN) | UI rendering |
| react-native-web | 0.18.12 | Renders React Native components in a browser |
| TypeScript | 5.6.3 | Static typing |

---

## State management

| Tool | Version | Role |
|---|---|---|
| Redux Toolkit | 2.2.7 | Application state management |
| Redux | 5.0.1 | Core Redux library |
| react-redux | 9.1.2 | React bindings for Redux |

Redux manages three slices: `theme`, `auth`, and `products`.

Source: `src/store/`

---

## Data / API layer

| Tool | Version | Role |
|---|---|---|
| Apollo Client | 3.11.8 | GraphQL client |
| graphql | 16.9.0 | GraphQL query parsing |
| apollo3-cache-persist | 0.15.0 | Persists Apollo cache to AsyncStorage |

The app communicates with a GraphQL backend. Apollo Client is configured with `InMemoryCache` and cache persistence. Product mutations and queries are the only currently active backend operations.

Source: `src/graphql/`

---

## Navigation

| Tool | Version | Role |
|---|---|---|
| @react-navigation/native | (installed) | Navigation container |
| @react-navigation/stack | (installed) | Stack navigator |
| @react-navigation/bottom-tabs | (installed) | Bottom tab navigator |
| react-native-screens | (installed) | Native screen optimization |
| react-native-gesture-handler | (installed) | Gesture support for navigation |
| react-native-safe-area-context | (installed) | Safe area insets |

Source: `App.tsx`, `src/navigationTypes.ts`

---

## Styling

| Tool | Version | Role |
|---|---|---|
| Tailwind CSS | 3.4.15 | Utility class styling |
| react-native-css-transformer | (installed) | CSS transformation for Metro bundler |
| PostCSS | 8.4.49 | CSS processing pipeline |
| autoprefixer | (installed) | CSS vendor prefixes |
| react-native-linear-gradient | 2.8.3 | Gradient backgrounds |

Tailwind classes are used where supported. StyleSheet-based styles are used throughout via `src/styles/` and per-feature style files.

---

## Persistence / Storage

| Tool | Version | Role |
|---|---|---|
| @react-native-async-storage/async-storage | 2.0.0 | Key-value storage on device |

Used for: theme preference, language preference, Apollo cache persistence.

---

## Localization

| Tool | Version | Role |
|---|---|---|
| i18next | 23.15.2 | i18n framework |
| react-i18next | 15.0.2 | React bindings for i18next |
| react-native-localize | 3.2.1 | Device locale detection |

Source: `src/i18n/`

---

## UI components and icons

| Tool | Version | Role |
|---|---|---|
| react-native-vector-icons | 10.2.0 | Icon library (Ionicons, FontAwesome) |
| react-native-modal | 13.0.1 | Modal overlays |
| react-native-reanimated | 3.16.1 | Advanced animations |
| react-native-snap-carousel | (installed) | Carousel / swiper component |
| react-native-calendars | 1.1307.0 | Calendar date picker |
| react-native-image-picker | 7.1.2 | Device camera / image library access |

---

## Date / Time

| Tool | Version | Role |
|---|---|---|
| date-fns | 4.1.0 | Date utility functions |
| dayjs | 1.11.13 | Lightweight date library |

> Both are installed. Which one is used where is not fully audited.

---

## Build tooling

| Tool | Version | Role |
|---|---|---|
| Metro | (bundled with RN) | Native bundler (Android/iOS) |
| Webpack | 5.95.0 | Web bundler |
| webpack-dev-server | (installed) | Local dev server for web |
| Babel | (multiple @babel/* packages) | JS transpilation |
| ts-node | 10.9.2 | TypeScript execution for config files |

---

## Testing

| Tool | Version | Role |
|---|---|---|
| Jest | 29.6.3 | Test runner |
| babel-jest | (installed) | Babel transform for Jest |
| @react-test-renderer | (installed) | React component rendering in tests |

---

## Code quality

| Tool | Version | Role |
|---|---|---|
| ESLint | 8.19.0 | Linting |
| Prettier | 2.8.8 | Code formatting |

---

## Needs verification

- Actual Tailwind CSS usage vs. StyleSheet usage ratio across the codebase — both are present but the split is not audited.
- Whether `date-fns` or `dayjs` is the de facto standard in this project — both are installed.
- Whether all installed packages are actively used or if some are legacy leftovers.
- Package manager in use: both `package-lock.json` and `.yarnrc.yml` are present. Likely npm is active (has lock file), but yarn config is also present. Needs confirmation.
