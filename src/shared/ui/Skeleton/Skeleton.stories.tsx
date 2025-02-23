import { Meta, StoryObj } from '@storybook/react/*';
import Skeleton from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'shared/Skeleton',
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
  args: {
    width: '100px',
    height: '100px',
  },
};
