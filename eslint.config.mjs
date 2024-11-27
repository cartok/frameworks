// @ts-check

import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import * as tsParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginImportX from "eslint-plugin-import-x";
// TODO: siehe unten
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
import pluginSolid from "eslint-plugin-solid";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import typescriptEslint, {
  configs as typescriptEslintConfigs,
} from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default typescriptEslint.config(
  includeIgnoreFile(gitignorePath),

  eslint.configs.recommended,
  ...typescriptEslintConfigs.strict,
  ...typescriptEslintConfigs.stylistic,
  pluginImportX.flatConfigs.recommended,
  pluginImportX.flatConfigs.typescript,

  /* Global */
  {
    files: ["**/*.{mjs,ts,tsx}"],
    ignores: ["eslint.config.mjs"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true,
      },
    },
    settings: {
      "import-x/extensions": [".ts", ".tsx"],
    },
    rules: {
      /* Import rules */
      "import-x/newline-after-import": "error",
      /**
       * Using `@typescript-eslint/consistent-type-imports` over
       * `import-x/no-consistent-type-specifier-style` as it's no longer required.
       * TODO: Not yet 100% decided about this.
       */
      // "import-x/no-consistent-type-specifier-style": "off",
      // "import-x/no-duplicates": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],

      /**
       * Array format on `import-x/no-unused-modules` somehow breaks the whole plugin.
       * Rule output from --print-config looks good.
       * Waiting for next version.
       * TODO: Create github issue, after reproducing it in a minimal repo.
       */
      // "import-x/no-unused-modules": [
      //   "warn",
      //   { unusedExports: true, missingExports: true },
      // ],

      /* Normal rules */
      eqeqeq: "error",
      "no-console": ["warn", { allow: ["debug", "error"] }],

      /* Typescript rules */
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },

  /* Component Scope */
  {
    files: ["**/components/**/*"],
    rules: {
      /* Import rules */
      // Enforce named exports wherever possible.
      "import-x/no-default-export": "error",
      "import-x/no-unassigned-import": ["error", { allow: ["**/*.css"] }],
    },
  },

  /* Vite App Scope */
  {
    // TODO: Wondering if it the global files rule goes together with these or if I should also
    //       define the file extensions.
    files: ["workspaces/apps/vite/**/*"],
    settings: {
      "import-x/resolver": {
        typescript: {
          // It's unable to deal with the `references` in tsconfig.json, hence use the app config.
          project: "./workspaces/apps/vite/*/tsconfig.app.json",
        },
      },
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
    // TODO: Linting schlägt fehl.
    // plugins: {
    //   "react-hooks": reactHooks,
    //   "react-refresh": reactRefresh,
    // },
    // rules: {
    //   ...reactHooks.configs.recommended.rules,
    //   "react-refresh/only-export-components": [
    //     "warn",
    //     { allowConstantExport: true },
    //   ],
    // },
  },

  /* Prettier Config */
  // TODO: Prettier for formatting despite https://prettier.io/docs/en/rationale.html#what-prettier-is-_not_-concerned-about.
  eslintConfigPrettier
);
