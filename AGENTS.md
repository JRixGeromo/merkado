# Merkado Frontend Agent Guide

## Project Goal
Refactor the Merkado frontend incrementally to improve maintainability, readability, and architectural clarity without changing existing behavior unless explicitly requested.

## Core Principles
- Preserve current behavior by default.
- Make small, safe, incremental changes.
- Do not refactor the whole app in one pass.
- Do not modify unrelated files.
- Keep naming and style consistent with the existing project.
- Prefer extraction and decomposition over rewrites.
- Stop and report blockers clearly instead of guessing.

## Refactor Workflow
Use this pattern:
1. Review the target area first
2. Define one small approved slice
3. Implement only that slice
4. Audit completion strictly
5. Fix leftovers only
6. Move to the next slice

## Current High-Priority Areas
1. App.tsx responsibility reduction
2. Navigation and header/tab extraction
3. Shared types and navigation typing cleanup
4. Redux / Apollo boundary review
5. Oversized screen decomposition
6. Shared UI standardization
7. Loading / error / empty-state consistency

## Important Boundaries
- Keep business logic out of presentational UI components.
- Avoid mixing server-state concerns and UI-state concerns without a clear reason.
- Keep navigation setup and tab/header configuration modular.
- Prefer shared types in central type files when reused across features.
- Avoid duplicating local types if a shared type is more appropriate.

## Risky Areas
- App.tsx route behavior and screen flow
- Navigation header behavior
- Redux slices that depend on Apollo client usage
- Theme/auth state interactions
- Cross-feature shared components

## Implementation Rules
- Touch only files required for the approved slice.
- Do not broaden scope without stating why.
- Avoid speculative cleanup outside the slice.
- If refactoring App.tsx, keep routes and behavior unchanged.
- If refactoring shared types, avoid business logic changes.
- If refactoring Redux/Apollo boundaries, keep the change incremental.

## Required Output After Each Implementation
Always provide:
1. Files changed
2. What changed
3. Anything incomplete
4. Risks introduced, if any
5. Validation steps
6. Suggested next slice

## What To Avoid
- Broad architecture rewrites
- Whole-project cleanup requests
- Multi-phase implementation in one step
- Unverified claims that the task is fully complete
- Changing behavior without clearly stating it
