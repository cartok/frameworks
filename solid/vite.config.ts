import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "path";

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      // TODO: Not fully working (path auto completion).
      "@": path.resolve("./src/"),
    },
  },
});
