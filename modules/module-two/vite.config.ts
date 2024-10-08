import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    react(),
    federation({
      shared: ["react", "react-dom", "react-router-dom"],
      name: "moduleTwo",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
    }),
  ],
  css: {
    modules: {
      generateScopedName: `${pkg.name}_[name]_[local]_[hash:base64:5]`,
    },
  },
  server: {
    port: 3002,
  },
  preview: {
    port: 3002,
  },
  build: {
    target: "esnext",
  },
});
