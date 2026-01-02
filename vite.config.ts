import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

/**
 * Plugin para garantir que o site estático seja publicado corretamente:
 * 1. Substitui o index.html gerado pelo Vite pelo index.html estático
 * 2. Remove arquivos JS/CSS com hash que não são usados pelo HTML estático
 */
function useStaticSite() {
  return {
    name: "use-static-site",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const staticIndex = path.resolve(__dirname, "public/index.html");
      const distIndex = path.resolve(distDir, "index.html");
      const distAssets = path.resolve(distDir, "assets");

      // 1. Substituir index.html pelo estático
      if (fs.existsSync(staticIndex)) {
        fs.copyFileSync(staticIndex, distIndex);
        console.log("✓ dist/index.html substituído pelo estático de public/");
      } else {
        console.warn("⚠ public/index.html não encontrado!");
      }

      // 2. Remover pasta assets/ gerada pelo Vite (contém JS/CSS com hash não usados)
      if (fs.existsSync(distAssets)) {
        fs.rmSync(distAssets, { recursive: true, force: true });
        console.log("✓ dist/assets/ removido (bundles JS/CSS não utilizados)");
      }

      // 3. Listar arquivos finais em dist/
      console.log("\n📁 Arquivos em dist/:");
      listDir(distDir, "  ");

      function listDir(dir: string, indent: string) {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            console.log(`${indent}📂 ${item}/`);
            listDir(fullPath, indent + "  ");
          } else {
            const size = (stat.size / 1024).toFixed(1);
            console.log(`${indent}📄 ${item} (${size} KB)`);
          }
        }
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
    mode === "production" && useStaticSite(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
