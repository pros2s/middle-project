import webpack from 'webpack';

export const buildSvgLoader = (): webpack.RuleSetRule => ({
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        svgoConfig: {
          plugins: [
            'preset-default',
            'removeDimensions',
            {
              name: 'convertColors',
              params: {
                currentColor: true,
              },
            },
          ],
        },
      },
    },
  ],
});
