import { BuildOptions } from './types/config';
import { Configuration as DevServerCounfiguration } from 'webpack-dev-server';

export const buildDevServer = (options: BuildOptions): DevServerCounfiguration => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
};
