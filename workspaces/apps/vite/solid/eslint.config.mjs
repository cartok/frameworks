import pluginSolid from "eslint-plugin-solid";
import { baseConfigs } from "../../../../eslint.config.mjs";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...baseConfigs,
  pluginSolid.configs["flat/recommended"],
  pluginSolid.configs["flat/typescript"],
  // geht nix.
  { rules: { eqeqeq: "error", "no-console": "error" } },
];
