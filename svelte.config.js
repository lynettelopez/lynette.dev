import vercelAdapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: vercelAdapter(),
  },
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors for more information about preprocessors
  preprocess: [vitePreprocess()],
};
