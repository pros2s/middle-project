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
  plugins: ['react', 'react-hooks', 'i18next', 'prettier', 'pross-plugin'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'color',
          'target',
          'rel',
          'borderRadius',
          'data-testid',
          'to',
          'size',
          'name',
          'align',
          'justify',
          'gap',
          'direction',
          'as',
        ],
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__IS_DEV__', '__API__', '__PROJECT__', '_inited'],
      },
    ],
    'no-else-return': 2,
    'no-lonely-if': 2,
    // typescript
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // react
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    // pross
    'pross-plugin/path-watcher': ['error', { alias: '@' }],
    'pross-plugin/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: [
          '**/*.test.*',
          '**/*.stories.*',
          '**/StoreDecorator.tsx',
        ],
      },
    ],
    'pross-plugin/fsd-layer-imports': [
      'error',
      {
        alias: '@',
        // My rude mistake about articlesPage :(
        ignoreFilesPatterns: ['**/StoreProvider/**', '**/pages/articlesPage'],
      },
    ],
    // off
    'react/no-array-index-key': 'off',
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
    'no-undef': 'off',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
};
