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

Programms required:

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

## Framework selection

The Framework selection was made checking trends via influencers like Theo and Primeagen + personal preferences + benchmark results.

- Frontend: https://krausest.github.io/js-framework-benchmark/current.html
- Backend: https://www.techempower.com/benchmarks/#hw=ph&test=composite&section=data-r22&l=wqkxdr-cn1&c=d

  The backend frameworks comparison has a filter set to only include languages I would like to use at this point in time, I don't want to learn `rust` right now, I know and like `dart`, `go` is easy to learn, `kotlin` is superior to `java` and has the best performing libraries (`rust` also) and `typescript` is what I know well already. Unfortunately, without searching further, there seem to be no good `dart` frameworks. The best `kotlin`, `java`, and `rust` frameworks leave everything behind. I can't believe how people can still use spring when looking at the benchmarks. For `typescript` there is only one good choice: `elysia`. The best `go` frameworks seem to be slower than `elysia` but might still be a good choice (especially if SSG is a requirement, but this is just an assumption). On the `java` / `kotlin` side `vertx-web` delivers most extreme performance. I still need to choose one `go` and `kotlin` framework out of `chi/herz/echo/gin` and `vertex-web/http4k` later.

### Frontend Frameworks

- [ ] Solid + SSR
  - [ ] Vike
- [ ] React + SSR
  - [ ] Vike
  - [ ] Next
  - [ ] Remix
- [ ] Vue + SSR
  - [ ] Nuxt
  - [ ] Vike
- [ ] Angular + @angular/ssr + @angular/dev-kit
- [ ] Svelte + SSR
  - [ ] Svelte Kit
  - [ ] Vike
- [ ] Lit + SSR

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
  - [ ] Add SSR using elysia
    - [ ] if possible with HTML streaming
    - [ ] with lazy / partial hydration
  - [ ] Image loading
    - [ ] Add an image to the start page which will function as LCP and ensure it is prefetched
    - [ ] Add an image outside of the initial viewport and ensure it is lazy loaded.
- [ ] TODO List UI features
  - [ ] Add a text filter for todo items including a `<label>` element (label, input, button)
  - [ ] Add a checkbox (incl. rendering of checked items)
  - [ ] Performance: Try out lazy loading of components by adding a component which can display the full todo item text when clicking on an entry (enlarge the area, exchange, no modal).
- [ ] Routing & Syncing
  - [ ] create start page with search input and search button, which redirects to todo page with search param set. make sure that the param is updated via the filter input on the todo page (there are 2 inputs)
  - [ ] create a page which does some simulated computation (setTimeout) and ensure that navigation change will not be blocked by rendering

### Stage 3: Explorations

- [ ] Try out or update on CSS solutions
  - [ ] vanilla-css-extract
  - [ ] unocss
  - [ ] tailwind
- [ ] HTMX
      Render via SSR and realize simple CRUD using the fastest backend frameworks.
      If framework is rather a lib and choice of database is up to me i'd want to try out Couchbase or Scylla.

#### Backend Frameworks

- [ ] ts: elyisa
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

Path:

- render home page
- navigate to todo list page, which has a lot of todos stored already
- add a few entries
- delete a few entries
