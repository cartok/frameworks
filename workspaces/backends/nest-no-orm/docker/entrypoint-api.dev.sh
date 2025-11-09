#!/usr/bin/env zsh

setopt errexit
setopt pipefail

# Use --force to allow pnpm to run non-interactively in the container.
pnpm install --force

# The `start:dev` script will use Nest's own watch mode for source code changes.
pnpm run --filter @cartok/frameworks-backend-nest-no-orm start:dev
