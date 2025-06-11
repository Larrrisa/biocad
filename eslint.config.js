import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    eslintPluginPrettierRecommended,
    ...pluginQuery.configs["flat/recommended"],
  ],
  files: ["**/*.{ts,tsx}"],
  ignores: ["dist"],
  languageOptions: {
    ecmaVersion: "latest",
    globals: globals.browser,
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
    "simple-import-sort": simpleImportSort,
    eslintPluginPrettierRecommended: eslintPluginPrettierRecommended,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^react", "^@?\\w"],
          ["^@(([\\/.]?\\w)|assets|test-utils)"],
          ["^\\u0000"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^.+\\.s?css$"],
        ],
      },
    ],
  },
});
