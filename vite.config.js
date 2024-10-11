// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        includePaths: ["./src/styles"],
      },
    },
  },
});
