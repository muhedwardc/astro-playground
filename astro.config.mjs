import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://ed-astro-playground.netlify.app",
  output: "server",
  adapter: vercel(),
  integrations: [vue(), tailwind(), solidJs()],
});
