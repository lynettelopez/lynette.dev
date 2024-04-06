import eslint from "@eslint/js";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import sveltePlugin from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";

/** @type {import('eslint').Linter.FlatConfig[]} */
const ESLINT = [
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      "capitalized-comments": ["error", "always"],
      "no-inline-comments": ["error"],
      "sort-keys": ["error", "asc", { natural: true }],
    },
  },
];

/** @type {import('eslint').Linter.FlatConfig[]} */
const TYPESCRIPT = [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        // Required setting in `@typescript-eslint/parser` v4.24.0
        extraFileExtensions: [".svelte"],
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.strict.rules,
      ...typescriptPlugin.configs.stylistic.rules,
    },
  },
];

/** @type {import('eslint').Linter.FlatConfig[]} */
const SVELTE = [
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        // Parses the `<script>` in `.svelte` files as TypeScript
        parser: typescriptParser,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      svelte: sveltePlugin,
    },
    rules: {
      ...sveltePlugin.configs.recommended.rules,
    },
  },
];

/** @type {import('eslint').Linter.FlatConfig[]} */
const IMPORT = [
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      "import/order": [
        "error",
        {
          alphabetize: { caseInsensitive: true, order: "asc" },
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          pathGroupsExcludedImportTypes: ["react"],
        },
      ],
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  },
];

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    // Replaces `.eslintignore` in globally excluding files
    ignores: [".svelte-kit", ".vercel", "**/*.d.ts"],
  },
  ...ESLINT,
  ...TYPESCRIPT,
  ...SVELTE,
  ...IMPORT,
];
