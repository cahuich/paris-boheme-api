import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "src/server.ts",
      output: {
        format: "cjs"
      }
    }
  }
});
