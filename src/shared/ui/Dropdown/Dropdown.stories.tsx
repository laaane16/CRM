import { Meta, StoryObj } from '@storybook/react/*';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'shared/Dropdown',
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {
    menu: [
      { value: 'first', label: 'first' },
      { value: 'second', label: 'second' },
    ],
  },
};
