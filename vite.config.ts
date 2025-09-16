import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    // Configure MIME types for XML files
    middlewareMode: false,
    fs: {
      strict: false
    }
  },
  plugins: [
    react(),
    // Plugin to handle XML files with correct MIME type
    {
      name: 'xml-mime-type',
      configureServer(server) {
        server.middlewares.use('/sitemap.xml', (req, res, next) => {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          next();
        });
        server.middlewares.use('/robots.txt', (req, res, next) => {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use('/sitemap.xml', (req, res, next) => {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          next();
        });
        server.middlewares.use('/robots.txt', (req, res, next) => {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          next();
        });
      }
    }
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
  },
  preview: {
    // Handle SPA routing for local preview
    port: 4173,
    strictPort: true,
    open: true,
  },
}));
