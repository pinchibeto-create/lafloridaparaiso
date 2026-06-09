import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
  // Force the Netlify Nitro preset when building outside the Lovable sandbox
  // (e.g. on Netlify CI). Inside the Lovable sandbox this is ignored and
  // Cloudflare is used automatically.
  nitro: {
    preset: "netlify",
  },

  vite: {
    plugins: [
      netlify(),
    ],
  },
});
