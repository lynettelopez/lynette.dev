/** @type {import("prettier").Options} */
export default {
  overrides: [
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
      },
    },
  ],
  plugins: ["prettier-plugin-svelte"],
  pluginSearchDirs: ["."],
  printWidth: 100,
};
