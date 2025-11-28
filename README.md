# Frameworks

A project I use to try out some web frameworks.

## Installation

```shell
corepack enable
corepack prepare pnpm@10.19.0 --activate
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
npm run eslint-check --file=./workspaces/frontends/vite/react/src/components/TodoList.tsx

# Get all rules that start with "react" for a file.
npm run eslint-rules --file=./workspaces/frontends/vite/react/src/components/TodoList.tsx --search=react
# > bunx eslint --print-config ./src/components/TodoList.tsx | gojq '.rules | with_entries(select(.key | startswith("react")))
```

## Backends

Only those which are commonly used and match my main languages. I would be interested in Vertex (Kotlin), Actix (Rust) and other modern technologies aswell.

- [ ] TS, NestJS
  1. [x] REST + SQL
  2. [x] Add OpenAPI / Swagger
  3. [ ] Eventually duplicate for JSON:API but rather try out ORM + GraphQL (after enhancing Frontend & Data)
  4. [ ] Dupliacte & use ORM instead of SQL
    1. [ ] Add GraphQL
- [ ] Java/Kotlin Spring Boot with WebFlux
  1. [ ] REST + ORM + GraphQL
- [ ] Python, Django or so
  1. [ ] REST + ORM 

### Benchmarks

- https://www.techempower.com/benchmarks/#section=data-r23

## Frontend

### Benchmarks

- js-framework-benchmark: https://krausest.github.io/js-framework-benchmark/current.html
- https://www.techempower.com/benchmarks/#section=data-r23

### Frameworks

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

#### Failures

- react + stream ssr (`renderToPipeableStream`) requires nodejs streams, so elysia & bun does not work
- react + vike does not yet fully support server components


