// generated with `npm init @eslint/config`
// see https://eslint.org/docs/latest/use/getting-started#quick-start

const variableRules = {
  /**
   * @description Warn for unused vars
   * @see https://typescript-eslint.io/rules/no-unused-vars/#how-to-use
   */
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'warn',
};

const functionRules = {
  /**
   * @description Prefer function declaration over arrow functions
   * @see https://eslint.org/docs/latest/rules/func-style
   */
  'func-style': [2, 'declaration', { allowArrowFunctions: false }],
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
    'prettier', // Prettier must be last
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'unicorn', 'prettier'],
  rules: {
    ...variableRules,
    ...functionRules,

    'prettier/prettier': 'warn',
  },
};
