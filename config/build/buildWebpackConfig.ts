import webpack from 'webpack';

import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

import { BuildOptions } from './types/config';

export const buildWebpackConfig = (
  options: BuildOptions,
): webpack.Configuration => {
  const { paths, isDev, mode } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: 'js/[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/',
    },

    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(options),
    },

    resolve: buildResolvers(options),

    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,

    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};
