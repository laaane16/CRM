import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'shared/Input',
};

export default meta;
type Story = StoryObj<typeof Input>;

export const PrimaryWithTitle: Story = {
  args: {
    type: 'text',
    title: 'Span',
    placeholder: 'Default label',
  },
};

export const PrimaryWithoutTitle: Story = {
  args: {
    type: 'text',
    placeholder: 'Default label',
  },
};
