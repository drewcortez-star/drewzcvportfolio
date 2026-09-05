// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Public (publishable) Supabase client config. These are safe to ship to the
// browser and act as fallbacks when .env is not present in the build
// environment (e.g. published builds, where .env is git-ignored).
const SUPABASE_PUBLIC_URL =
  process.env["VITE_SUPABASE_URL"] ?? "https://ehltpsenpbtppptvgzgc.supabase.co";
const SUPABASE_PUBLIC_KEY =
  process.env["VITE_SUPABASE_PUBLISHABLE_KEY"] ??
  "sb_publishable_43bCYozGW5hqxOoxIqz9lQ_b7tK1uQc";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    define: {
      "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(SUPABASE_PUBLIC_URL),
      "import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY": JSON.stringify(SUPABASE_PUBLIC_KEY),
    },
  },
});
