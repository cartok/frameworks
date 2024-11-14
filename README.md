# Framework tests

Just started this to try out some web frameworks.

## Framework selection

The Framework selection was made checking trends via influencers like Theo and Primeagen + personal preferences + benchmark results.

- Frontend: https://krausest.github.io/js-framework-benchmark/current.html
- Backend: https://www.techempower.com/benchmarks/#hw=ph&test=composite&section=datelysiaa-r22&l=xak45b-cn1&c=c

  The backend frameworks comparison has a filter set to only include languages I would like to use at this point in time, I don't want to learn `rust` right now, I know and like `dart`, `go` is easy to learn, `kotlin` is superior to `java` and has the best performing libraries (`rust` also) and `typescript` is what I know well already. Unfortunately, without searching further, there seem to be no good `dart` frameworks. The best `kotlin`, `java`, and `rust` frameworks leave everything behind. I can't believe how people can still use spring when looking at the benchmarks. For `typescript` there is only one good choice: `elysia`. The best `go` frameworks seem to be slower than `elysia` but might still be a good choice (especially if SSG is a requirement, but this is just an assumption). On the `java` / `kotlin` side `vertx-web` delivers most extreme performance. I still need to choose one `go` and `kotlin` framework out of `chi/herz/echo/gin` and `vertex-web/http4k` later.

## Plan

### Extras

- Create a minimal design system, incl. figma
- try out vanilla-css-extract
- try out unocss
- try out latest tailwind

### Stage 1

- Create a CSR TODO List
  - Thereby create design system like set of components to explore the framework edges a bit.
- Test router by linking to the TODO List from the index page
- Test lazy loading of images and components on another page
- [x] Create a reusable CSS reset that I can use everwhere
- CSS: **Try to use latest CSS features (`@layer`, `@scope`, `@container`)**. And just try to find a good solution that I can use anywhere... When I would use inline styles, I could not reuse them but it would be most simplistic. When I would use CSS files, I could simply reuse them accross these frameworks...
  UPDATE: CSS nesting is already a thing in major browsers: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting - Class name concatenation like in preprocessors does not work though,
  It's not a preprocessor and not capable. But its propably not required. As everthing is scoped
  and flag generation is still possible, just not in a systematic style, which I would prefer but
  whatever. Propably still better to use the standard, than opening the SCSS crap-box.
  - Maybe there is a minimalistic and fast pre-processor like SASS but without any feature, just nesting. I would like to have nested class generation but I do not want to have all the other features and oppinons in the way.

#### Frameworks

- [ ] Solid (wip)
- [ ] Svelte
- [ ] Lit
- [ ] Angular
- [ ] Vue

### Stage 2

- Try out htmx, render via SSR and realize simple CRUD using the fastest backend frameworks.
- If framework is rather a lib and choice of database is up to me i'd want to try out Couchbase or Scylla.

#### Frameworks

- [ ] htmx
  - backends of choice:
    - [ ] ts: elyisa
    - [ ] go: chi/herz/echo/gin
    - [ ] kotlin: vertex-web/http4k

### Stage 3

- Add persistance to the frameworks tried out in **Stage 1**
- Add and experiment with SSR + Hydration and eventually SSG
- Eventually create an automated benchmark on top

#### Frameworks

- [ ] Appwrite
- [ ] Supabase
- htmx backends
  - [ ] ts: elyisa
  - [ ] go: chi/herz/echo/gin
  - [ ] kotlin: vertex-web/http4k

### Stage 4

Refactor the project
