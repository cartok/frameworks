# Framework tests

Just started this to try out some web frameworks.

## Installation

```shell
corepack enable
corepack pnpm i
```

## What's currently in development?

[Link to TODO.md](./TODO.md)

## Documentation

[Link to DOCUMENTATION.md](./DOCUMENTATION.md)

## Framework selection

The Framework selection was made checking trends via influencers like Theo and Primeagen + personal preferences + benchmark results.

- Frontend: https://krausest.github.io/js-framework-benchmark/current.html
- Backend: https://www.techempower.com/benchmarks/#hw=ph&test=composite&section=datelysiaa-r22&l=xak45b-cn1&c=c

  The backend frameworks comparison has a filter set to only include languages I would like to use at this point in time, I don't want to learn `rust` right now, I know and like `dart`, `go` is easy to learn, `kotlin` is superior to `java` and has the best performing libraries (`rust` also) and `typescript` is what I know well already. Unfortunately, without searching further, there seem to be no good `dart` frameworks. The best `kotlin`, `java`, and `rust` frameworks leave everything behind. I can't believe how people can still use spring when looking at the benchmarks. For `typescript` there is only one good choice: `elysia`. The best `go` frameworks seem to be slower than `elysia` but might still be a good choice (especially if SSG is a requirement, but this is just an assumption). On the `java` / `kotlin` side `vertx-web` delivers most extreme performance. I still need to choose one `go` and `kotlin` framework out of `chi/herz/echo/gin` and `vertex-web/http4k` later.

## Gross plan

### Stage 1

- Create a TODO List (CSR)
- [x] Create a reusable CSS reset that I can use everwhere
- [x] Create a package for all the CSS using latest CSS features

#### Frameworks

- [x] Solid
  - [ ] Vike
- [ ] React
  - [ ] Vike
  - [ ] Next
  - [ ] Remix
- [ ] Svelte
  - [ ] Svelte Kit
  - [ ] Vike
- [ ] Lit
  - [ ] Lit SSR
- [ ] Angular
  - [ ] @angular/ssr + @angular/dev-kit
- [ ] Vue
  - [ ] Nuxt
  - [ ] Vike

_No need to implement every framework from in order to work on Stage 2 and 3._

### Stage 2

- [ ] Test router
  - [ ] by linking to the TODO List from the index page
  - [ ] syncing state with URL
- [ ] Test lazy loading of images and components
- [ ] Test lazy hydration of components
- [ ] Try out or update on CSS solutions
  - [ ] vanilla-css-extract
  - [ ] unocss
  - [ ] tailwind
- [ ] Create a form example

### Stage 3

- [ ] HTMX
      Render via SSR and realize simple CRUD using the fastest backend frameworks.
      If framework is rather a lib and choice of database is up to me i'd want to try out Couchbase or Scylla.

#### Backend Frameworks

- [ ] ts: elyisa
- [ ] go: chi/herz/echo/gin
- [ ] kotlin: vertex-web/http4k

_I did not check on template libraries for those frameworks yet._

### Stage 4

- [ ] Add persistance to the TODO List

#### Frameworks

- [ ] Appwrite
- [ ] Supabase
- Custom
  - [ ] ts: elyisa
  - [ ] go: chi/herz/echo/gin
  - [ ] kotlin: vertex-web/http4k

### Stage 5

- [ ] Create a minimal design system for everything in Figma
- [ ] Refactor: Update whole CSS and Components according to the design system
- [ ] Work on great a11y support

### Stage 6

- [ ] unit tests
- [ ] e2e tests
- [ ] integration tests
- [ ] build pipelines
- [ ] deployment

### Stage 7

Benchmarks under network & cpu throttling & real usage emulation.

Path:

- render home page
- navigate to todo list page, which has a lot of todos stored already
- add a few entries
- delete a few entries
