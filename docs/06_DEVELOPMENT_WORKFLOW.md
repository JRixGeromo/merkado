# 06 — Development Workflow

## Prerequisites

- Node.js >= 18
- npm (package-lock.json is present — use npm, not yarn)
- Android Studio + Android SDK (for Android builds)
- Xcode (for iOS builds — macOS only)
- A running backend GraphQL server at `http://localhost:5000/` (will be `10.0.2.2:5000` from the Android emulator)

---

## Install dependencies

```bash
npm install
```

---

## Run on Android (emulator or device)

Start Metro bundler:
```bash
npm start
```

In a second terminal, run the Android app:
```bash
npm run android
```

Or in a single step (Metro starts automatically):
```bash
npm run android
```

> The backend must be running at `localhost:5000` on your host machine. The Android emulator reaches it via `10.0.2.2:5000`, which is hardcoded in `src/graphql/apolloClient.ts`.

---

## Run on iOS

```bash
npm run ios
```

> Requires macOS and Xcode. iOS testing status is not confirmed.

---

## Run on Web

Start webpack dev server:
```bash
npm run start-web
```

Opens on `http://localhost:9000/` (port set in `webpack.config.ts`).

> The web build uses `react-native-web` to render React Native components in a browser. The Apollo Client backend URL (`http://10.0.2.2:5000/`) will not work in a browser — web testing of GraphQL features requires either a different URL or a local proxy.

---

## Build Android APK

Clean build (recommended):
```bash
npm run clean-build-android
```

Build APK only:
```bash
npm run build-apk
```

Build Android release:
```bash
npm run build-android
```

Clean Android build artifacts:
```bash
npm run clean-android
```

---

## Format code

```bash
npm run format
```

Uses Prettier with configuration from `.prettierrc` / `.prettierrc.js`.

---

## Lint

No explicit lint script in `package.json`. ESLint is configured via `.eslintrc.js`. To run manually:

```bash
npx eslint src/
```

---

## Run tests

```bash
npm test
```

Uses Jest with `react-native` preset. Test files are in `__tests__/`.

> The current state of tests is not confirmed — the `__tests__/` folder may only contain scaffolding.

---

## Key configuration files

| File | What to change here |
|---|---|
| `src/graphql/apolloClient.ts` | Backend URL (`uri` field) |
| `tailwind.config.js` | Tailwind content paths and theme extensions |
| `tsconfig.json` | TypeScript compiler options |
| `webpack.config.ts` | Web build entry, output, dev server port |
| `metro.config.js` | Metro bundler options (native) |
| `babel.config.js` | Babel plugins and presets |
| `app.json` | App name, bundle ID, display name |

---

## Adding a new screen

1. Create the screen component in the appropriate `src/features/<feature>/screens/` folder.
2. Add the route name and params to `src/navigationTypes.ts` (`RootStackParamList` or `RootTabParamList`).
3. Register the screen in `App.tsx` inside either the `Stack.Navigator` or `Tab.Navigator`.
4. Add any translations to all locale files under `src/i18n/locales/`.

---

## Adding a new Redux slice

1. Create a slice file in `src/store/slices/`.
2. Register the reducer in `src/store/store.ts`.
3. Use `useAppSelector` and `useAppDispatch` (from `src/hooks/reduxHooks.ts`) in components.

---

## Adding a new GraphQL operation

1. Define the `gql` query or mutation in `src/graphql/` (or inline in the slice if it is closely tied to a specific thunk).
2. Call it via `client.query()` or `client.mutate()` inside a Redux async thunk, or via Apollo hooks directly in a component.

---

## Theme changes

- Color values live in `src/styles/theme.ts`.
- Add new theme keys there for all three themes (`light`, `dark`, `femme`).
- Access theme values via `useTheme()` hook — do not import from `theme.ts` directly in screens.

---

## Localization

- Translation keys go in all five locale files: `src/i18n/locales/en.json`, `tl.json`, `bs.json`, `il.json`, `mb.json`.
- Use `useTranslation()` and `t('key')` in components.

---

## Needs verification

- Whether `npm run android` starts Metro automatically or requires a separate `npm start` first.
- Whether the web build (`npm run start-web`) is actively maintained alongside native builds.
- Whether any environment variable injection exists for the backend URL (`.env` file is present but appears empty).
- Test coverage — whether the `__tests__/` folder has real test cases or just boilerplate.
