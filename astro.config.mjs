import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://airdb.vc",
  output: "static",
  publicDir: "static",
  integrations: [sitemap()],
});
