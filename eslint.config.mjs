import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginSolid from "eslint-plugin-solid";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import typescriptEslint from "typescript-eslint";

export default typescriptEslint.config(
  /* Basics */
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  eslint.configs.recommended,
  ...typescriptEslint.configs.strict,
  ...typescriptEslint.configs.stylistic,

  /* Apps */
  {
    files: ["workspaces/apps/vite/solid/**/*"],
    ...pluginSolid.configs["flat/recommended"],
    ...pluginSolid.configs["flat/typescript"],
  },
  {
    files: ["workspaces/apps/vite/vue/**/*"],
    ...pluginVue.configs["flat/recommended"],
  },

  /* Custom */
  {
    rules: {
      /* Normal rules */
      eqeqeq: "error",
      "no-console": "warn",

      /* Typescript rules */
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: false,
        },
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },

  /* Prettier (needs to be last) */
  eslintConfigPrettier
);
