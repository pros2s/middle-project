module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['webpack.dev.js', 'webpack.prod.js'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: ['webpack.dev.js', 'webpack.prod.js'] },
        ],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'i18next', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'i18next/no-literal-string': [
      'error',
      { markupOnly: true, onlyAttribute: [''] },
    ],
    'no-underscore-dangle': ['error', { allow: ['__IS_DEV__'] }],
    'jsx-quotes': [2, 'prefer-single'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': 'error',
    'no-else-return': 2,
    'no-lonely-if': 2,

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
  },
  globals: { __IS_DEV__: true },
};
