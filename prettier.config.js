/** @type {import('prettier').Config} */
export default {
  overrides: [
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
      },
    },
  ],
  plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
  printWidth: 100,
};
