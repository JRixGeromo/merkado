# Merkado Frontend — Complete Windsurf Refactor Workflow

## Purpose

This document defines the full Windsurf workflow for reviewing and refactoring the Merkado frontend using a low-cost, high-control approach.

This project workflow is designed to:
- preserve current behavior
- avoid broad risky rewrites
- reduce token usage and cost
- use the free model effectively
- use the stronger model only where needed
- keep work structured in small safe slices

This is the standard workflow for this project.

---

# Project Context

Merkado frontend is a large React Native codebase with:
- central app setup in `App.tsx` 
- Redux store in `src/store` 
- Apollo client in `src/graphql` 
- shared types in `src/types.ts` and `src/navigationTypes.ts` 
- feature folders under `src/features` 
- shared UI in `src/components` 
- shared styles in `src/styles` 

Because this codebase is large, refactoring should **not** begin with a broad rewrite.

The correct approach is:

**review → plan → implement one slice → audit → fix leftovers → next slice**

---

# Core Rules for This Project

1. Preserve behavior unless a behavior change is explicitly requested.
2. Do not refactor the whole frontend in one pass.
3. Work in small slices only.
4. Keep prompts short, scoped, and repeatable.
5. Use the free model for understanding, planning, and audits.
6. Use the stronger model only for actual code changes and difficult fixes.
7. Audit every slice before moving to the next one.
8. Never trust "done" without a strict audit.
9. Do not widen scope unless there is a clear reason.
10. Avoid speculative cleanup outside the current slice.

---

# Standard Workflow for This Project

## Stage 1 — Review only
Ask Windsurf to inspect the repo and produce a phased plan.

## Stage 2 — Pick one small first slice
Do not start coding until the first slice is clearly defined.

## Stage 3 — Implement one slice only
Keep the scope tight.

## Stage 4 — Audit the slice
Check what is actually complete.

## Stage 5 — Fix leftovers
Only fix what remains.

## Stage 6 — Move to next slice
Repeat.

## Standard pattern
**review → plan → implement slice 1 → audit → fix leftovers → slice 2**

---

# Workspace Rule

Create this file in the repo:

## File
`.windsurf/rules/refactor-rule.md` 

## Content
```md
---
trigger: always_on
---

You are working on a behavior-preserving refactor of the Merkado frontend.

Rules:
- Preserve existing behavior unless explicitly told otherwise.
- Prefer small, incremental refactor slices over broad rewrites.
- Touch only files relevant to the approved slice.
- Do not widen scope without stating the reason first.
- Keep naming, folder structure, and code style consistent with the project.
- Avoid speculative cleanup outside the current slice.
- If the task becomes too large, stop and break it into smaller steps.
- If blocked, report the blocker clearly instead of guessing.

After each implementation, always provide:
1. Files changed
2. What changed
3. Anything incomplete
4. Risks introduced, if any
5. Validation steps
```
