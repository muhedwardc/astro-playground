import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/edge-functions";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://ed-astro-playground.netlify.app",
  output: "server",
  adapter: netlify(),
  integrations: [vue(), tailwind(), solidJs()],
});
