import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    // Ensure static assets from public/ are copied to dist/
    copyPublicDir: true,
  },
  preview: {
    // Handle SPA routing for local preview
    port: 4173,
    strictPort: true,
    open: true,
  },
}));
