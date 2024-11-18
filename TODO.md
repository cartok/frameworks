# 1. continue (solid csr)

- get rid of todos & misc stuff / tests + refactor the whole solidjs code
- finish solid cleanup & css refactoring (element selector rule) + move css out to a separate package
- do more for a11y, might become be a small package so that i can use it for all apps
- finish context provider example
- fix css autocompletion extension

# 2. finish prettier & eslint configuration

- prettier
- more custom eslint rules
  - no default export
  - space around statements
  - boolean expression formatting: always mutliline & operator on start
  - falls möglich linten, dass man keine types in tsx files exportieren darf
    `ComponentProps` sollte immer zwischen components verwendet werden.
  - ...
- vite-plugin-eslint testen. ggf. die vite config dafür im vite ordner als base config
  anlegen usw.
- fix these `style` object member autocompletions

# 3. next framework

- add one other app implementation, one of: vue, svelte, angular, lit, elysia & htmx

---

# later: project improvements

- turbo tasks
  - lint
  - format
- git hooks
  - wenn möglich scopen so dass nichts unnötig ausgeführt wird. nur die workspaces die geändert wurden sollten laufen, das könnte durch durch turborepo caching abgefangen werden?
    - ansonsten gucken ob ein hook tool das her gibt, vermutlich pre-commit, aber vielleicht auch husky? ggf. erstmal was minimalistischeres verwenden, wenn turborepo das caching gut macht.
  - hooks
    - pre-commit: lint, format
    - pre-push: pre-commit + tests
- vscode tasks
