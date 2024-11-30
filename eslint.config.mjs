// @ts-check

import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginSolid from "eslint-plugin-solid";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import typescriptEslint, {
  configs as typescriptEslintConfigs,
} from "typescript-eslint";

export default typescriptEslint.config(
  eslint.configs.recommended,
  ...typescriptEslintConfigs.strict,
  ...typescriptEslintConfigs.stylistic,

  /* Global */
  {
    files: ["**/*.{mjs,ts,tsx}"],
    ignores: ["eslint.config.mjs"],
    rules: {
      /* Normal rules */
      eqeqeq: "error",
      "no-console": ["warn", { allow: ["debug", "error"] }],

      /* Typescript rules */
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],
    },
  },

  /* Component Scope */
  {
    files: ["**/components/**/*"],
    rules: {
      "no-restricted-exports": [
        "error",
        { restrictDefaultExports: { direct: true } },
      ],
    },
  },

  /* App Scope */
  {
    files: ["workspaces/apps/**/*"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ["workspaces/apps/vite/solid/**/*"],
    ...pluginSolid.configs["flat/recommended"],
    ...pluginSolid.configs["flat/typescript"],
  },
  {
    files: ["workspaces/apps/vite/vue/**/*"],
    ...pluginVue.configs["flat/recommended"],
  },
  {
    files: ["workspaces/apps/vite/react/**/*"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },

  /* Prettier Config */
  // TODO: Prettier for formatting despite https://prettier.io/docs/en/rationale.html#what-prettier-is-_not_-concerned-about.
  eslintConfigPrettier
);
