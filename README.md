# Framework tests

Just started this to try out some web frameworks.

## Installation

```shell
corepack enable
corepack pnpm i
```

## Tipps

### ESLint configuration helper

During eslint configuration there were often problems with plugins not being well prepared for flat config. To know if eslint aborts with an error I ran `eslint --print-config <file>` manually on some file to check if it breaks and afterwards I filtered out rules using a search string.

The commands must be run directly through `npm`, the other package managers do not support the `variables` feature.

Programs required:

- goqj
- bat

```shell
# See if eslint breaks on some file.
npm run eslint-check --file=./workspaces/apps/vite/react/src/components/TodoList.tsx

# Get all rules that start with "react" for a file.
npm run eslint-rules --file=./workspaces/apps/vite/react/src/components/TodoList.tsx --search=react
# > bunx eslint --print-config ./src/components/TodoList.tsx | gojq '.rules | with_entries(select(.key | startswith("react")))
```

## What's currently in development?

[Link to TODO.md](./TODO.md)

## Documentation

[Link to DOCUMENTATION.md](./DOCUMENTATION.md)

## Framework benchmarks

- js-framework-benchmark: https://krausest.github.io/js-framework-benchmark/current.html
- https://www.techempower.com/benchmarks/#section=data-r23

### Frontend Frameworks

Checkmarks here only reference if "Stage 1" is done for those atm. Can't find time and energy for side projects... I'm all-in for good.

- [x] Solid
  - [ ] +SSR
- [x] React
  - [ ] +SSR
  - [ ] Next
  - [ ] Remix
- [ ] Vue
  - [ ] +SSR
  - [ ] Nuxt
- [ ] Angular
  - [ ] +@angular/ssr +@angular/dev-kit
- [ ] Svelte
  - [ ] - SSR
  - [ ] Svelte Kit
- [ ] Lit
  - [ ] +SSR

## Failures

- react + stream ssr (`renderToPipeableStream`) requires nodejs streams, so elysia & bun does not work
- react + vike does not yet fully support server components

## Stages

### Stage 1: Entry

- [x] Create a basic TODO List example for at least one framework
  - [x] Start with **local state** to learn the basics
  - [x] Create a **global state / store** solution as a better replacement
- [x] Create a reusable CSS reset that I can use everwhere
- [x] Create a package for all the CSS using latest CSS features
- [x] Create a package to share the types of the datastructures the apps will use

_No need to implement every framework from in order to work on Stage 2 and 3._

### Stage 2: Features

- [ ] Use [`mockend`](https://mockend.com/) to work with a mock backend
- [ ] Performance
  - [ ] Add SSR using elysia (does not work)
    - [ ] if possible with HTML streaming
    - [ ] with lazy / partial hydration
  - [ ] Image loading
    - [ ] Add an image to the start page which will function as LCP and ensure it is prefetched
    - [ ] Add an image outside of the initial viewport and ensure it is lazy loaded.
- [ ] TODO List UI features
  - [ ] Add a text filter for todo items including label, input, button.
  - [ ] Add a checkbox (incl. rendering of checked items)
  - [ ] Performance: Try out lazy loading of components by adding a component which can display the full todo item text when clicking on an entry (enlarge the area, exchange, no modal).
- [ ] Routing & Syncing
  - [ ] create start page with search input and search button, which redirects to todo page with search param set. make sure that the param is updated via the filter input on the todo page (there are 2 inputs)
  - [ ] create a page which does some simulated computation (setTimeout) and ensure that navigation change will not be blocked by rendering

### Stage 3: Explorations

- [ ] Implement different CSS solutions
  - [ ] vanilla-css-extract
  - [ ] tailwind
  - [ ] unocss
- [ ] HTMX
      Render via SSR and realize simple CRUD using the fastest backend frameworks. Use Couchbase or Scylla if possible, otherwise Postgres or MongoDB.

#### Backend Frameworks

- [ ] ts: elyisa
- [ ] rust: actix
- [ ] go: chi/herz/echo/gin
- [ ] kotlin: vertex-web/http4k

_I did not check on template libraries for those frameworks yet._

### Stage 4: Backend with Database

- [ ] Add persistance to the TODO List

#### Backend Frameworks

- [ ] Appwrite
- [ ] Supabase
- Custom
  - [ ] ts: elyisa
  - [ ] go: chi/herz/echo/gin
  - [ ] kotlin: vertex-web/http4k

### Stage 5: UI/UX

- [ ] Create a minimal design system for everything in Figma
- [ ] Refactor: Update whole CSS and Components according to the design system
- [ ] Work on great a11y support

### Stage 6: Testing

- [ ] unit tests
- [ ] e2e tests
- [ ] integration tests
- [ ] build pipelines
- [ ] deployment

### Stage 7: Benchmark

Benchmarks under network & cpu throttling & real usage emulation.
