module.exports = {
  extends: [
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "prettier/vue",
  ],
  plugins: ["prettier"],
  env: {
    jest: true,
    jasmine: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  rules: {
    complexity: ["error", 12],
    "no-console": process.env.NODE_ENV !== "development" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV !== "development" ? "error" : "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        trailingComma: "all",
        endOfLine: "auto",
      },
    ],
  },
};
