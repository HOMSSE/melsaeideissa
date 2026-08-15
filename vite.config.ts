import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // When a custom domain is configured via public/CNAME, serve from root.
  // Otherwise, use the GitHub repository name for GitHub project pages.
  const hasCustomDomain = fs.existsSync(path.resolve(__dirname, "public/CNAME"));
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const base = hasCustomDomain ? '/' : (repo ? `/${repo}/` : '/');

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
