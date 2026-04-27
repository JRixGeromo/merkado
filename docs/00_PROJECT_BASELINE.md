# 00 — Project Baseline

## What this document is

A top-level reference for the Merkado frontend project. It summarises what the project is, what exists in the repository, and how the documentation set is organized. Use this as a starting point for any new Claude Code session.

---

## Project name

`merkado`

## Project type

React Native mobile application with optional web build via react-native-web.

## Primary platforms

- Android (main target)
- iOS (secondary target)
- Web (via react-native-web + webpack, development use)

## Current stage

Active development. The app has a working product CRUD flow connected to a real backend. Many other screens (cart, orders, chat, campaigns) exist but use local/hardcoded data — they are not yet wired to a backend.

---

## Repository root

`C:\Projects(Old)\Personal\merkado\`

### Top-level folders

| Folder | Purpose |
|---|---|
| `src/` | All application source code |
| `android/` | Android native project (Gradle, Java/Kotlin shell) |
| `ios/` | iOS native project (Xcode, Obj-C/Swift shell) |
| `assets/` | Static assets (images, fonts) |
| `dist/` | Web build output (generated, not committed) |
| `docs/` | Project documentation (this folder) |
| `public/` | Web HTML template |
| `__tests__/` | Jest test files |
| `node_modules/` | npm dependencies (generated) |

### Top-level files

| File | Purpose |
|---|---|
| `App.tsx` | Root React component, navigation setup |
| `AppWrapper.tsx` | Redux Provider + ApolloProvider wrapper |
| `index.js` | Native entry point (Android/iOS) |
| `index.web.tsx` | Web entry point |
| `package.json` | Dependencies and npm scripts |
| `tsconfig.json` | TypeScript configuration |
| `tailwind.config.js` | Tailwind CSS configuration |
| `webpack.config.ts` | Web build configuration |
| `metro.config.js` | Metro bundler configuration (native builds) |
| `babel.config.js` | Babel transpilation settings |
| `jest.config.js` | Jest test runner configuration |
| `app.json` | React Native app metadata (name, display name) |
| `react-native.config.js` | React Native CLI configuration |
| `AGENTS.md` | AI assistant guidance for this project |

---

## Documentation map

| File | Contents |
|---|---|
| `docs/00_PROJECT_BASELINE.md` | This file — top-level project overview |
| `docs/01_APP_BUSINESS_OVERVIEW.md` | What the app does and who it is for |
| `docs/02_TECH_STACK.md` | All libraries, tools, and versions |
| `docs/03_ARCHITECTURE_OVERVIEW.md` | Folder structure, modules, key files |
| `docs/04_APP_FLOWS.md` | User-facing screens and navigation flows |
| `docs/05_DATA_AND_API_FLOW.md` | How data moves between UI, Redux, Apollo, and backend |
| `docs/06_DEVELOPMENT_WORKFLOW.md` | How to run, build, and test locally |
| `docs/07_AI_ASSISTANT_WORKFLOW.md` | Guidelines for working with Claude Code on this project |

---

## Known assumptions

- The backend is a separate GraphQL API running at `http://10.0.2.2:5000/` (Android emulator localhost).
- The backend source is not in this repository.
- The iOS project exists but its testing status is unknown.
- Web build is available but is likely used for development convenience, not production.

## Needs verification

- Whether a production backend URL exists and how it is injected at build time.
- Whether iOS builds are maintained or only Android is active.
- Whether `__tests__/` contains meaningful tests or just scaffolding.
- Current backend schema (no schema file is in this repo).
