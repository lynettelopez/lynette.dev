import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: adapter(),
  },
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors for more information about preprocessors
  preprocess: [vitePreprocess()],
};
