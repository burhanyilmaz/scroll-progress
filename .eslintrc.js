module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  'rules': {
    '@typescript-eslint/no-shadow': ['error'],
    'no-shadow': 'off',
    'no-undef': 'off',
    
    'indent': [ 'error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error','always'],
    'no-console': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-use-before-define': 'off',
    'newline-before-return': 1,
    'react-hooks/exhaustive-deps': 0,
    'react/function-component-definition': 0,
    'arrow-body-style': [1, 'as-needed'],
    'object-curly-spacing': ['error', 'always']
  },
};
