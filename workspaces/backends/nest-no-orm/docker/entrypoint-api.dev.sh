#!/usr/bin/env zsh

setopt errexit
setopt pipefail

# Use --force to allow pnpm to run non-interactively in the container
pnpm install --force

# TODO: How about [docker file watch](https://docs.docker.com/compose/how-tos/file-watch/)?
pnpm --filter framework-tests-backend-nest-no-orm exec nodemon \
  --watch ./workspaces/backends/nest-no-orm/package.json \
  --exec "sh -c 'pnpm install --force && pnpm run --filter framework-tests-backend-nest-no-orm start:dev'"
