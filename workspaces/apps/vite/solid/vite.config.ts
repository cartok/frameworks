import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  // TODO: Do SSR using elysia
  // Docs: https://www.solidjs.com/guides/server
  // Basic `express` example: https://github.com/solidjs/solid/blob/main/packages/solid-ssr/examples/ssr/index.js
  // Vite `express` example: https://github.com/bluwy/create-vite-extra/blob/master/template-ssr-solid/server.js
  plugins: [solid({ ssr: false })],
  resolve: {
    alias: {
      "~": "/src",
    },
  },
});
