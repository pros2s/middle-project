import { Configuration as DevServerCounfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (
  options: BuildOptions,
): DevServerCounfiguration => ({
  port: options.port,
  open: true,
  historyApiFallback: true,
  hot: true,
});
