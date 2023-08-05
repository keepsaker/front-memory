module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
    createDefaultProgram: true,
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
  },
  ignorePatterns: [".eslintrc.cjs", "vite.config.ts"],
};
