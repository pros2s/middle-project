import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { buildScssLoader } from '../build/loaders/buildScssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.plugins.push(new webpack.DefinePlugin({ __IS_DEV__: true }));
  config.resolve.modules = [paths.src, 'node_modules'];
  config.resolve.extensions.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg/ };
    }

    return rule;
  });

  config.module.rules.push(buildSvgLoader());
  config.module.rules.push(buildScssLoader(true));

  return config;
};
