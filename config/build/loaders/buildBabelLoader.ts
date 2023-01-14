import webpack from 'webpack';

interface BuildBabelLoader {
  isTsx?: boolean;
  isDev?: boolean;
}

export const buildBabelLoader = ({
  isDev,
  isTsx,
}: BuildBabelLoader): webpack.RuleSetRule => ({
  test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
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
        [
          '@babel/plugin-transform-typescript',
          {
            isTsx,
          },
        ],
        '@babel/plugin-transform-runtime',
        isDev && require.resolve('react-refresh/babel'),
      ].filter(Boolean),
    },
  },
});
