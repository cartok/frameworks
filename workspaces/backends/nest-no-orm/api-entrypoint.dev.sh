#!/usr/bin/env zsh

setopt errexit
setopt pipefail

pnpm install

nodemon --watch package.json --exec "sh -c 'pnpm install && pnpm run start:dev'"
