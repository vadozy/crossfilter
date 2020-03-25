module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    "ecmaVersion": 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true
  },
  rules: {
    quotes: ["error", "single", { avoidEscape: true }],
    "comma-dangle": ["error", "always-multiline"]
  },
  overrides: [
    // makes sure eslint-plugin-jest runs for tests only
    Object.assign(
      {
        files: ["**/*test.js", "**/*spec.js"],
        env: { jest: true },
        plugins: ["jest"]
      },
      require("eslint-plugin-jest").configs.recommended
    )
  ]
};
