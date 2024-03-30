import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://onchainbrno.com',
  integrations: [tailwind(), mdx()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "cs"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});