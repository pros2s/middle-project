module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:i18next/recommended',
    'airbnb',
    'prettier',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      files: ['webpack.dev.js', 'webpack.prod.js'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['webpack.dev.js', 'webpack.prod.js'],
          },
        ],
      },
    },
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
  plugins: ['react', 'react-hooks', 'i18next', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid', 'to', 'size', 'name'],
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__IS_DEV__', '__API__'],
      },
    ],
    'no-else-return': 2,
    'no-lonely-if': 2,
    // typescript
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': 'error',
    // react
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    // off
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'object-curly-newline': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
  },
};
