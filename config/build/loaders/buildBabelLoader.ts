import webpack from 'webpack';

export const buildBabelLoader = (isDev: boolean): webpack.RuleSetRule => ({
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        [
          'i18next-extract',
          {
            locales: ['ru', 'en'],
          },
        ],
        isDev && require.resolve('react-refresh/babel'),
      ].filter(Boolean),
    },
  },
});
