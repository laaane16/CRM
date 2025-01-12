type BuildMode = 'development' | 'production';

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
export interface BuildPaths {
  html: string;
  src: string;
  entry: string;
  output: string;
}

export interface BuildOptions {
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  mode: BuildMode;
}
