import { Configuration } from 'webpack';

import { buildLoaders } from './buildLoaders';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildResolve } from './buildResolve';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfiguration: (options: BuildOptions) => Configuration = ({ mode, isDev, paths, port }) => ({
  mode,
  entry: paths.entry,
  output: {
    filename: '[name].[contenthash].js',
    path: paths.output,
    clean: true,
  },
  resolve: buildResolve(paths),
  plugins: buildPlugins(paths, isDev),
  module: {
    rules: buildLoaders(isDev),
  },
  devtool: isDev ? 'inline-source-map' : undefined,
  devServer: isDev ? buildDevServer(port) : undefined,
});
