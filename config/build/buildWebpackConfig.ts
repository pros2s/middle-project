import webpack from 'webpack';

import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';

import { BuildOptions } from './types/config';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { paths } = options;

  return {
    mode: 'production',
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },

    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(),
    },

    resolve: buildResolvers(),
  };
};
