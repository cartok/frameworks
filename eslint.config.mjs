import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // "@typescript-eslint/consistent-type-imports": [
      //   "error",
      //   {
      //     prefer: "type-imports",
      //     disallowTypeAnnotations: false,
      //   },
      // ],
      eqeqeq: "error",
      semi: "error",
    },
  },
];

// export const baseConfigs = [
// export default baseConfigs;
