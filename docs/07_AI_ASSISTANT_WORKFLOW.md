# 07 — AI Assistant Workflow

## Purpose

This document defines how to work with Claude Code (or any AI assistant) on this project efficiently. It is a complement to `AGENTS.md` at the repo root, with more detail on context, patterns, and pitfalls specific to this codebase.

---

## Core principle

Preserve behavior unless a behavior change is explicitly requested. This project is in active development. Changes that look like improvements may break something elsewhere. The bar for touching code that is not in scope is high.

---

## Before starting any task

1. Read `docs/00_PROJECT_BASELINE.md` for project orientation.
2. Read `docs/03_ARCHITECTURE_OVERVIEW.md` to understand where things live.
3. Read `docs/05_DATA_AND_API_FLOW.md` if the task involves data, backend, or state.
4. Read the relevant feature folder in `src/features/` before touching it.
5. Check `AGENTS.md` at the repo root for project-level rules.

---

## How sessions should be structured

Work in small, clearly defined slices. Each session should:

1. Have one clearly stated goal ("add field X to the product form", "fix theme flickering on login screen")
2. Touch only files relevant to that goal
3. Leave unrelated code unchanged
4. Report what was changed and what was not touched

Do not widen scope without stating the reason first.

---

## Workflow pattern

```
State the goal clearly
  └── Read relevant files first
        └── Implement the change
              └── Report: files changed, what changed, what is incomplete, risks
```

---

## What is safe to touch

| Area | Safety level | Notes |
|---|---|---|
| Feature screens (`src/features/`) | Moderate | Changes are local to a screen; check that navigation still works |
| Shared components (`src/components/`) | Lower | Used across many screens; changes can have wide visual impact |
| Redux slices (`src/store/slices/`) | Lower | State shape changes affect every screen that reads from that slice |
| Apollo Client (`src/graphql/apolloClient.ts`) | Caution | Affects all backend communication |
| Navigation (`App.tsx`) | Caution | Wrong changes break all routing |
| Styles / theme (`src/styles/`) | Moderate | Visual changes; use useTheme hook as the interface |
| i18n (`src/i18n/`) | Lower risk | Adding keys is safe; renaming existing keys breaks all usages |
| `AppWrapper.tsx` | Caution | Touches providers that wrap the entire app |

---

## Patterns used in this codebase

### Theme access
Always use the `useTheme()` hook (`src/hooks/useTheme.ts`) in screens. Do not import from `src/styles/theme.ts` directly.

```ts
const { themeType, commonStyle, baseStyle, myTheme } = useTheme();
```

### Redux dispatch
Use the typed hooks from `src/hooks/reduxHooks.ts`:

```ts
const dispatch = useAppDispatch();
const products = useAppSelector(state => state.products.products);
```

### Async data operations
Product CRUD uses Redux async thunks. After any mutation, the thunk refetches the full product list. Do not add optimistic updates without understanding this pattern first.

### Navigation
Route names and param types are in `src/navigationTypes.ts`. Always update this file when adding a new screen. Use typed navigation:

```ts
navigation.navigate('UpsertProductScreen', { product });
```

### Styling
Feature-specific styles live in `src/features/<feature>/styles/`. Common styles are in `src/styles/commonStyles.ts` and `src/styles/baseStyles.ts`. Both StyleSheet and Tailwind classes are used in this project — follow the pattern already in the file you are editing.

### Localization
Add new UI strings to all 5 locale files (`en`, `tl`, `bs`, `il`, `mb`). Missing keys will fall back to the key name.

---

## Things to avoid

- Do not refactor code that is not in scope for the current task.
- Do not rename exported types or functions without checking all usages.
- Do not change the Redux state shape without understanding which screens depend on it.
- Do not change `apolloClient.ts` without understanding the cache persistence implications.
- Do not add new dependencies without checking if an existing dependency already covers the need.
- Do not introduce async patterns (like optimistic updates) where the current code uses full refetch — it changes the data consistency contract.
- Do not add comments that describe what the code does — only add them when there is a non-obvious constraint or workaround.

---

## Reporting after a task

After completing any task, report:

1. **Files changed** — list every file modified
2. **What changed** — brief description per file
3. **What is incomplete** — anything deferred or not addressed
4. **Risks** — any side effects or concerns introduced
5. **Validation steps** — how to verify the change works

---

## Useful file locations at a glance

| What | Where |
|---|---|
| Navigation routes | `App.tsx`, `src/navigationTypes.ts` |
| Redux state | `src/store/store.ts`, `src/store/slices/` |
| Backend URL | `src/graphql/apolloClient.ts` line 37 |
| GraphQL mutations | `src/graphql/productMutations.ts` |
| Products query | `src/store/slices/productSlice.ts` (inline gql) |
| Theme colors | `src/styles/theme.ts` |
| Theme hook | `src/hooks/useTheme.ts` |
| Translation files | `src/i18n/locales/` |
| Shared components | `src/components/` |
| Icon library | `src/components/IconLib.tsx` |
| Global types | `src/types.ts` |
| Responsive utilities | `src/utils/responsive.ts` |

---

## Needs verification sections

Each doc in this `docs/` folder has a "Needs verification" section. These mark gaps in understanding that should be resolved by reading the code directly rather than assumed. When a gap is resolved, update the relevant doc.
