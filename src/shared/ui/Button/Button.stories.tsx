import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Button, { Sizes, Theme } from './Button';
import '../../../app/styles/index.scss';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: '12',
    size: Sizes.LARGE,
    theme: Theme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: '12',
    size: Sizes.LARGE,
    theme: Theme.SECONDARY,
  },
};

export const Ghost: Story = {
  args: {
    children: '12',
    size: Sizes.LARGE,
    theme: Theme.GHOST,
  },
};

export const PrimarySmall: Story = {
  args: {
    children: '12',
    size: Sizes.SMALL,
    theme: Theme.PRIMARY,
  },
};

export const SecondarySmall: Story = {
  args: {
    children: '12',
    size: Sizes.SMALL,
    theme: Theme.SECONDARY,
  },
};

export const GhostSmall: Story = {
  args: {
    children: '12',
    size: Sizes.SMALL,
    theme: Theme.GHOST,
  },
};
