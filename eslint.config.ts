export default {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // 开启 TS 规则
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
    "no-console": "warn",
  },
};
