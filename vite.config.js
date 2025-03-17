import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Update the `base` path to ensure correct routing
export default defineConfig({
  plugins: [react()],
  base: "/", // Change this if deploying under a subpath
  build: {
    outDir: "dist", // Ensure this is set correctly
    assetsDir: "assets", // Stores assets inside `dist/assets`
  },
});
