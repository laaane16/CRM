import { Meta, StoryObj } from '@storybook/react/*';
import Select from './Select';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'shared/Select',
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    defaultValue: 'Default Value',
    options: [
      { value: 'first', label: 'first' },
      { value: 'second', label: 'second' },
      { value: 'third', label: 'third' },
    ],
  },
};
