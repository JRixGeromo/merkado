# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Start Here

Before making any changes, read the baseline docs in `docs/`. They exist so you do not have to re-derive project context from scratch.

| Doc | Read when |
|---|---|
| `docs/00_PROJECT_BASELINE.md` | Starting any session — folder map, file index |
| `docs/01_APP_BUSINESS_OVERVIEW.md` | Unsure what a feature is for or who uses it |
| `docs/02_TECH_STACK.md` | Adding/changing a dependency or tool |
| `docs/03_ARCHITECTURE_OVERVIEW.md` | Working on navigation, providers, Redux, or shared components |
| `docs/04_APP_FLOWS.md` | Working on a user-facing screen or flow |
| `docs/05_DATA_AND_API_FLOW.md` | Working on GraphQL, Redux state, or backend communication |
| `docs/06_DEVELOPMENT_WORKFLOW.md` | Running, building, or configuring the app locally |
| `docs/07_AI_ASSISTANT_WORKFLOW.md` | Before implementing anything — patterns, safety levels, reporting format |

Detailed project knowledge lives in `docs/`. This file is a short operating guide only — do not expand it with information that belongs there.

## Commands

```bash
npm install              # install dependencies
npm start                # start Metro bundler (native)
npm run android          # run on Android emulator / device
npm run ios              # run on iOS (macOS only)
npm run start-web        # webpack dev server at localhost:9000
npm run format           # Prettier format all files
npm run clean-android    # clean Android build artifacts
npm run build-apk        # build release APK (Windows: gradlew.bat)
npx eslint src/          # lint (no npm script — run directly)
npm test                 # Jest
```

No single-test command is configured. To run one test file: `npx jest __tests__/SomeFile.test.ts`.

## Architecture

**Entry flow:** `index.js` (native) or `index.web.tsx` (web) → `AppWrapper.tsx` → `App.tsx`

`AppWrapper.tsx` mounts three providers in order: Redux `<Provider>`, `<ApolloProvider>`, and i18n initialization. Everything beneath it has access to all three.

`App.tsx` owns all navigation. A `Stack.Navigator` wraps a `Tab.Navigator` (named `MainTabs`) for the authenticated state. The tab navigator is registered as the `DashboardScreen` stack route, so `navigation.navigate('DashboardScreen')` is how login lands in the main app.

**Feature modules** live in `src/features/<name>/screens/` with co-located styles in `src/features/<name>/styles/`. There are ~20 feature folders. Only `account/` (login) and `myProducts/` (product CRUD) are connected to the backend. All other screens use local or hardcoded data.

**State split:** Redux manages three slices (`theme`, `auth`, `products`). Apollo Client is used *inside* Redux async thunks — the thunks call `client.query()` and `client.mutate()` directly. This means the Apollo client singleton from `src/graphql/apolloClient.ts` is imported into `src/store/slices/productSlice.ts`. Apollo is also provided via `<ApolloProvider>` for component-level hook usage.

**Product CRUD pattern:** Every mutation (create, update, delete) calls `client.clearStore()` then refetches the full product list with `fetchPolicy: 'network-only'`. There is no optimistic update. The Redux `products` slice stores the authoritative list for `MyProductsScreen`.

**Theme system:** Three themes (`light`, `dark`, `femme`) defined in `src/styles/theme.ts`. Theme is persisted to AsyncStorage and loaded at startup via a Redux async thunk. Access theme in any component exclusively through `useTheme()` (`src/hooks/useTheme.ts`) — do not import from `theme.ts` directly in screens.

**Backend URL:** Hardcoded as `http://10.0.2.2:5000/` in `src/graphql/apolloClient.ts:37`. `10.0.2.2` is the Android emulator's alias for host `localhost`. No auth header middleware is configured — the Apollo client has no `authLink`.

**Navigation types:** All route names and params are typed in `src/navigationTypes.ts`. Update this file whenever a screen is added or removed.

**Responsive sizing:** All px values in styles should go through `normalizeFontSize`, `normalizeHeight`, or `normalizeWidth` from `src/utils/responsive.ts`.

**Localization:** Five locale files under `src/i18n/locales/` (`en`, `tl`, `bs`, `il`, `mb`). Add new strings to all five.

## Working rules (from AGENTS.md)

- Preserve current behavior unless a behavior change is explicitly requested.
- Touch only files required for the approved task. Do not widen scope.
- After any implementation, report: files changed, what changed, anything incomplete, risks, validation steps.
- Risky areas: `App.tsx` route flow, `apolloClient.ts`, Redux slices that use Apollo, shared components used across many screens.
