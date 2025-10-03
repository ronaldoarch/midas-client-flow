import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import legacy from '@vitejs/plugin-legacy';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  preview: {
    host: "::",
    port: 3000,
    allowedHosts: [
      "localhost",
      "midas-client-flow-production.up.railway.app",
      ".railway.app",
      ".up.railway.app"
    ]
  },
  build: {
    target: ['es5', 'safari9', 'safari8'],
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: false,
      },
      mangle: false,
      format: {
        comments: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
        format: 'iife',
      },
    },
  },
  plugins: [
    react(), 
    legacy({
      targets: ['defaults', 'not IE 11', 'safari >= 8', 'ios_saf >= 8'],
      modernPolyfills: true,
      renderLegacyChunks: true,
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
