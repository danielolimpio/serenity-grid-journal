import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// Plugin para substituir index.html pelo estático após o build
function useStaticIndex() {
  return {
    name: "use-static-index",
    closeBundle() {
      const staticIndex = path.resolve(__dirname, "public/index.html");
      const distIndex = path.resolve(__dirname, "dist/index.html");
      if (fs.existsSync(staticIndex)) {
        fs.copyFileSync(staticIndex, distIndex);
        console.log("✓ index.html substituído pelo estático");
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && useStaticIndex(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
