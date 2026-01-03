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

      // 2. Remover APENAS os bundles JS/CSS gerados pelo Vite (preserva /assets com imagens do public/)
      if (fs.existsSync(distAssets)) {
        const extsToDelete = new Set([".js", ".css", ".map"]);

        const deleteViteBundles = (dir: string) => {
          for (const item of fs.readdirSync(dir)) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
              deleteViteBundles(fullPath);
              // Remove diretórios vazios após limpeza
              if (fs.readdirSync(fullPath).length === 0) fs.rmdirSync(fullPath);
              continue;
            }

            const ext = path.extname(item).toLowerCase();
            if (extsToDelete.has(ext)) {
              fs.rmSync(fullPath, { force: true });
            }
          }
        };

        deleteViteBundles(distAssets);
        console.log("✓ bundles Vite (.js/.css/.map) removidos de dist/assets/ (imagens preservadas)");
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
