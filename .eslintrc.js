module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["jest"],
  rules: {
    "no-plusplus": "off",
    "max-len": "off",
    "import/prefer-default-export": "off",
    "eslint no-console": "off",
  },
};
