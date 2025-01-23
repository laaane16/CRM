import type { Preview } from '@storybook/react';
import React from 'react';

import { StyleDecorator } from '../src/shared/lib';

import '../src/app/styles/index.scss';

const preview: Preview = {
  decorators: [StyleDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
