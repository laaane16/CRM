import type { StorybookConfig } from '@storybook/react-webpack5';
import { buildCssLoader } from '../config/build/loaders/buildCssLoader';
import { DefinePlugin } from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    config.module?.rules?.push(buildCssLoader(true));

    config.plugins?.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        // __API__: '',
        __PROJECT__: JSON.stringify('storybook'),
      }),
    );
    return config;
  },
};
export default config;
