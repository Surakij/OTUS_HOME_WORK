module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,

  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['jest'],
  rules: {
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'max-len': ['error', { ignoreComments: true }],
    'import/prefer-default-export': 'off',
  },
};
