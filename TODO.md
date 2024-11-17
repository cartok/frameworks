# 1. continue (solid csr)

- get rid of todos & misc stuff / tests
- finish solid cleanup & css refactoring (element selector rule)
- create a text input component
- move css out to a separate package

# 2. finish prettier & eslint configuration

- prettier
- more custom eslint rules
- vite-plugin-eslint testen. ggf. die vite config dafür im vite ordner als base config
  anlegen usw.

# 3. next framework

- add one other basic implementation

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
