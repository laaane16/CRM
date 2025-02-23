import { Meta, StoryObj } from '@storybook/react/*';
import Accordeon from './Accordeon';

const meta: Meta<typeof Accordeon> = {
  component: Accordeon,
  title: 'shared/Accordeon',
};

export default meta;

type Story = StoryObj<typeof Accordeon>;

export const Primary: Story = {
  args: {
    title: 'test',
    items: [
      { Component: () => <span>testItem</span> },
      { Component: () => <span>testItem</span> },
      { Component: () => <span>testItem</span> },
    ],
  },
};
