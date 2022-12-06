export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
}

export interface BuildEnv {
  port: number;
  mode: BuildMode;
  baseApiUrl: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  baseApiUrl: string;
  project: 'storybook' | 'jest' | 'frontend';
}
