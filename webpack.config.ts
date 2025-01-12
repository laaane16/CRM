import path from 'path';
import { Configuration } from 'webpack';

import { buildWebpackConfiguration } from './config/build/buildWebpackConfiguration';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const MODE = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = MODE === 'development';

  const paths: BuildPaths = {
    src: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src', 'app', 'appEntry.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const config: Configuration = buildWebpackConfiguration({ mode: MODE, port: PORT, isDev, paths });

  return config;
};
