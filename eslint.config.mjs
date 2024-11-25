// @ts-check

import eslint from "@eslint/js";
import * as tsParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
// import pluginImportX from "eslint-plugin-import-x";
import pluginSolid from "eslint-plugin-solid";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import typescriptEslint, {
  configs as typescriptEslintConfigs,
} from "typescript-eslint";
import { flatConfigs as pluginImportConfigs } from "eslint-plugin-import";
import * as pluginImport from "eslint-plugin-import";

export default typescriptEslint.config(
  eslint.configs.recommended,
  ...typescriptEslintConfigs.strict,
  ...typescriptEslintConfigs.stylistic,
  // TODO: Ich sollte import-x und co. doch wieder los werden. Sollte auch ohne gehen.
  // Problem ist das mein alias nicht resolved wird... (~/)...
  // - https://eslint.org/docs/latest/rules/no-restricted-exports#restrictdefaultexports
  // - https://eslint.org/docs/latest/rules/no-use-before-define#allownamedexports
  // - https://eslint.org/docs/latest/rules/no-restricted-exports#restrictdefaultexports
  // TODO: https://www.npmjs.com/package/eslint-plugin-unused-imports noch mal checken, ging nicht. vlt wegen flat config.
  // pluginImportX.flatConfigs.recommended,
  // pluginImportX.flatConfigs.typescript,
  pluginImportConfigs.recommended,
  // pluginImportConfigs.typescript,
  // pluginUnusedImports,

  /* Resolution */
  {
    files: ["**/*.{mjs,ts,tsx}"],
    ignores: ["eslint.config.mjs"],
    languageOptions: {
      parser: tsParser,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      import: pluginImport,
    },
    settings: {
      // "import-x/resolver": {
      //   typescript: {
      //     project: "./workspaces/**/tsconfig.json",
      //     alwaysTryTypes: true,
      //   },
      // },
      "import/resolver": {
        // alias: {
        //   extensions: [".mjs", ".ts", ".tsx"],
        // },
        typescript: {
          project: "./workspaces/**/tsconfig.json",
          alwaysTryTypes: true,
        },
      },
    },
  },

  /* Global Rules */
  {
    rules: {
      /* Import rules */
      // "no-restricted-exports": [
      //   "error",
      //   { restrictDefaultExports: { direct: true } },
      // ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],

      /* Normal rules */
      eqeqeq: "error",
      "no-console": "warn",

      /* Typescript rules */
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },

  /* Component Rules */
  {
    files: ["**/components/**/*"],
    rules: {
      /* Import rules */
      // "import-x/no-default-export": "error",
      "import/no-default-export": "error",
      // "no-restricted-exports": [
      //   "error",
      //   { restrictDefaultExports: { direct: true } },
      // ],
    },
  },

  /* App Rules */
  {
    files: ["workspaces/apps/vite/solid/**/*"],
    ...pluginSolid.configs["flat/recommended"],
    ...pluginSolid.configs["flat/typescript"],
    // settings: {
    //   "import/resolver": {
    //     alias: {
    //       map: [["~", "./workspaces/apps/vite/solid/src"]],
    //     },
    //   },
    // },
  },
  {
    files: ["workspaces/apps/vite/vue/**/*"],
    ...pluginVue.configs["flat/recommended"],
  },

  /* Prettier Config */
  // TODO: Prettier for formatting despite https://prettier.io/docs/en/rationale.html#what-prettier-is-_not_-concerned-about.
  eslintConfigPrettier
);
