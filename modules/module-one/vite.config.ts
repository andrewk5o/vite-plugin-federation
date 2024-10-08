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
      name: "moduleOne",
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
    port: 3001,
  },
  preview: {
    port: 3001,
  },
  build: {
    target: "esnext",
  },
});
