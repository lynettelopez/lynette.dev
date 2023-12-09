import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";

import tsPlugin from "@typescript-eslint/eslint-plugin";
import sveltePlugin from "eslint-plugin-svelte";

import tsParser from "@typescript-eslint/parser";
import svelteParser from "svelte-eslint-parser";

// Replaces `.eslintignore` in globally excluding files
const ignoreConfig = {
  ignores: [".svelte-kit", ".vercel"],
};

const tsConfig = {
  files: ["src/**/*.ts"],
  ignores: ["src/**/app.d.ts"],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      extraFileExtensions: [".svelte"], // Required setting in `@typescript-eslint/parser` v4.24.0
    },
  },
  plugins: {
    "@typescript-eslint": tsPlugin,
  },
};

const svelteConfig = {
  files: ["src/**/*.svelte"],
  languageOptions: {
    parser: svelteParser,
    parserOptions: {
      parser: tsParser, // Parses the `<script>` in `.svelte` files as TypeScript
    },
  },
  plugins: {
    sveltePlugin,
  },
};

export default [ignoreConfig, eslint.configs.recommended, tsConfig, svelteConfig, prettierConfig];
