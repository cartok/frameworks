# 1. continue (solid csr)

- ssr with elysia

# 2. next frameworks

- add vue
- add angular with signals

# 3. finish prettier & eslint configuration

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

---

# later: project improvements

- more work on a11y and html element attribute interfaces in general (in the solidjs app example)
- create a good reusable solution to enforce aria attributes for each implementation
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
