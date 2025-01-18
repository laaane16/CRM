import { RuleSetRule } from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';

export const buildLoaders = (isDev: boolean): RuleSetRule[] => {
  // const babelLoader = {
  //   test: /\.tsx?$/,
  //   use: 'babel-loader',
  //   exclude: /node_modules/,
  // };
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const cssLoader = buildCssLoader(isDev);
  const svgLoader = {
    test: /\.svg$/,
    use: '@svgr/webpack',
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: 'file-loader',
  };

  return [cssLoader, tsLoader, svgLoader, fileLoader];
};
