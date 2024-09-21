import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postcss from "rollup-plugin-postcss";

export default defineConfig({
  plugins: [
    vue(),
    {
      ...postcss({
        extract: true,
        sourceMap: true,
        extensions: [".css", ".scss"],
        minimize: false,
        use: [
          [
            "sass",
            {
              includePaths: ["./src/styles"],
            },
          ],
        ],
      }),
      enforce: "post",
    },
  ],
});
