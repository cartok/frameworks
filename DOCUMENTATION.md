# Documentation

## Project Setup

## Why this folder structure?

## Why `turborepo`?

- (WIP) For linting & testing via git hooks
  - should be usable with any hook system.
  - should have no need to configure which workspaces to run the tasks in as turborepo is made for that, which should result in fast hooks: https://chatgpt.com/c/673738e3-6fec-8002-853d-3be0a49eacfb (link is not published)
- (not used yet) To start related packages together like a backend combined with some frontend
- (not used yet) To automatically build packages that changed, when required by another workspace

## Why `pnpm`?

## Why this engine setup?

- .node-version
- .npmrc
- package.json

## Why this `tsconfig` setup and how does it work?

## Why this formatting & linting setup?

### Prettier

- https://prettier.io/docs/en/rationale.html#what-prettier-is-_not_-concerned-about

### Basic Rules

### Custom Rules

### How does it compose?

## Code Style

TODO: Try to lint whatever goes into here instead.

## Why organize code "top-down"?

## Frameworks

Maybe whats below should be in each workspace.

## SolidJS

### Why should `props` not be destructured?

### Why write components as functions and not as `const` variables?
