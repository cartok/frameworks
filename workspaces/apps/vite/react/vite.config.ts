import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": "/src",
    },
  },
  build: {
    rollupOptions: {
      input: {
        redux: "indexRedux.html",
      },
    },
  },
});
