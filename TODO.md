Entegegen der `README.md`, wo auch grob Planung drin steht, ist das der Ort für den aktuellen WIP scope.

1. repo, linting etc.

- monorepo setup abschließen

  - fix aliased imports

  - reicht es aus "engines" in der root package.json zu definieren?

  - turbo
    - https://turbo.build/repo/docs/getting-started/add-to-existing-repository
    - wozu:
      - für linting & testing via git push hook
      - zum starten von setups aus mehreren apps, z.b. mit backend und frontend workspaces.
      - um packages für "apps" oder "backends" zu bauen.
    - sicher stellen dass die lokale `turbo` version verwendet wird. `bun run turbo` oder `npx turbo`?
      - nur dokumentieren oder enforcen über scripts (eine abstraktion die ich vlt. aber nicht haben will).

- eslint + prettier

  - allgemeines & globales eslint setup abschließen
    - sollte ich eine root config mit regeln anlegen und die dann innerhalb der workspaces verwenden (extend/import) und dann auf dessen files scopen, oder ist das unnötig?
  - prettier config
  - prettier eslint plugin

- git hooks
  - wenn möglich scopen so dass nichts unnötig ausgeführt wird. nur die workspaces die geändert wurden sollten laufen, das könnte durch durch turborepo caching abgefangen werden?
    - ansonsten gucken ob ein hook tool das her gibt, vermutlich pre-commit, aber vielleicht auch husky? ggf. erstmal was minimalistischeres verwenden, wenn turborepo das caching gut macht.
  - hooks
    - pre-commit: lint, format
    - pre-push: pre-commit + tests

2. continue (solid csr)

- finish solid cleanup & css refactoring (element selector rule)
- create a text input component

3. next framework

- move css out to a separate package
- add one other basic implementation
