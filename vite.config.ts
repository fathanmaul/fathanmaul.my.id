import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tanstackStart(),
    nitro({
      routeRules: {
        "/assets/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
        "/*.pdf": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
        "/*.png": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
        "/*.jpg": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
        "/*.ico": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
        "/*.webp": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
      },
    }),
    tailwindcss(),
    tsconfigPaths(),
    viteReact(),
  ],
});

