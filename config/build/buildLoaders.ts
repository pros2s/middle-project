import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildScssLoader } from './loaders/buildScssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;
  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoader = buildScssLoader(isDev);

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const typescriptBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  // const tsLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // };

  return [
    svgLoader,
    fileLoader,
    codeBabelLoader,
    typescriptBabelLoader,
    cssLoader,
  ];
};
