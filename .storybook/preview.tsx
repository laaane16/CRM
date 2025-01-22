import type { Preview } from '@storybook/react';
import React from 'react';

import '../src/app/styles/index.scss';

const preview: Preview = {
  decorators: [
    (Story, { parameters }) => {
      return (
        <div className="app-default-theme">
          <Story />
        </div>
      );
    },
  ],
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
