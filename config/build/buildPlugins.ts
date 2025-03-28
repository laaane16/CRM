import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerPlugin from 'fork-ts-checker-webpack-plugin';

import { BuildPaths, ProjectOption } from './types/config';

export const buildPlugins = (
  paths: BuildPaths,
  isDev: boolean,
  project: ProjectOption,
): webpack.WebpackPluginInstance[] => {
  const plugins = [
    new webpack.ProgressPlugin(),

    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      // '__API__': undefined,
      __PROJECT__: JSON.stringify(project),
    }),

    new HtmlWebpackPlugin({
      template: paths.html,
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),

    new CopyPlugin({
      patterns: [{ from: paths.locales, to: paths.buildLocales }],
    }),

    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),

    new ForkTsCheckerPlugin(),
  ];

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());

    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    );
  }
  return plugins;
};
