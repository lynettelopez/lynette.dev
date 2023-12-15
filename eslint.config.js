import eslint from "@eslint/js";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import sveltePlugin from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";

export default [
  {
    // Replaces `.eslintignore` in globally excluding files
    ignores: ["**/*.d.ts", ".svelte-kit", ".vercel"],
  },
  {
    ...eslint.configs.recommended,
  },
  {
    ...prettierConfig,
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        // Required setting in `@typescript-eslint/parser` v4.24.0
        extraFileExtensions: [".svelte"],
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        // Parses the `<script>` in `.svelte` files as TypeScript
        parser: typescriptParser,
      },
    },
    plugins: {
      svelte: sveltePlugin,
    },
    rules: {
      ...sveltePlugin.configs.recommended.rules,
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      "capitalized-comments": ["error", "always"],
      "import/order": [
        "error",
        {
          alphabetize: { caseInsensitive: true, order: "asc" },
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          pathGroupsExcludedImportTypes: ["react"],
        },
      ],
      "no-duplicate-imports": ["error", { includeExports: true }],
      "no-inline-comments": ["error"],
      "sort-keys": ["error", "asc", { natural: true }],
    },
  },
];
