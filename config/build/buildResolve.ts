import { ResolveOptions } from 'webpack';
import { BuildPaths } from './types/config';

export const buildResolve = (paths: BuildPaths): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js', '.jsx'],
  modules: [paths.src, 'node_modules'],
  mainFiles: ['index'],
});
