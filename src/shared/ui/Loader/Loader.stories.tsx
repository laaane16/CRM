import type { Meta, StoryObj } from '@storybook/react';
import Loader, { LoaderSize, LoaderView } from './Loader';

const meta: Meta<typeof Loader> = {
  component: Loader,
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const SpinLoaderLarge: Story = {
  args: {
    view: LoaderView.SPIN,
    size: LoaderSize.LARGE,
  },
};

export const SpinLoaderSmall: Story = {
  args: {
    view: LoaderView.SPIN,
    size: LoaderSize.SMALL,
  },
};

export const BarLoaderLarge: Story = {
  args: {
    view: LoaderView.BAR,
    size: LoaderSize.LARGE,
  },
};

export const BarLoaderSmall: Story = {
  args: {
    view: LoaderView.BAR,
    size: LoaderSize.SMALL,
  },
};
