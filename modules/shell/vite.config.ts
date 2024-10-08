import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      shared: ["react", "react-dom", "react-router-dom"],
      remotes: {
        dummy: "dummy.js",
      },
    }),
  ],
  css: {
    modules: {
      generateScopedName: `${pkg.name}_[name]_[local]_[hash:base64:5]`,
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
