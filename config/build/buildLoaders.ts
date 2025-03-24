import { RuleSetRule } from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { babelLoader } from './loaders/buildBabelLoader';

export const buildLoaders = (isDev: boolean): RuleSetRule[] => {
  const codeBabelLoader = babelLoader(isDev, false);
  const tsxCodeBabelLoader = babelLoader(isDev, true);
  const cssLoader = buildCssLoader(isDev);
  const svgLoader = {
    test: /\.svg$/,
    use: '@svgr/webpack',
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: 'file-loader',
  };

  return [fileLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoader];
};
