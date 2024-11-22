import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tsResolver from "eslint-import-resolver-typescript";
import pluginImportX from "eslint-plugin-import-x";
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

  // TODO: Finish eslint configuration to allow resolving workspace packages.
  // - https://github.com/un-ts/eslint-plugin-import-x
  // - or https://www.npmjs.com/package/eslint-import-resolver-typescript
  ...pluginImportX.flatConfigs.recommended,
  ...pluginImportX.flatConfigs.typescript,
  {
    settings: {
      "import-x/resolver": {
        "@cartok/todo-list-styles": {
          name: "package-resolver",
          someConfig: value,
          resolver: tsResolver,
        },
      },
    },
  },

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
