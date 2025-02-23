import { Meta, StoryObj } from '@storybook/react/*';
import Ellipsis from './Ellipsis';

const meta: Meta<typeof Ellipsis> = {
  component: Ellipsis,
  title: 'shared/Ellipsis',
};

export default meta;

type Story = StoryObj<typeof Ellipsis>;

export const Primary: Story = {
  args: {},
};
