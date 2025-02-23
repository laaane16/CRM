import { Meta, StoryObj } from '@storybook/react/*';
import PageLoader from './PageLoader';

const meta: Meta<typeof PageLoader> = {
  component: PageLoader,
  title: 'shared/PageLoader',
};

export default meta;

type Story = StoryObj<typeof PageLoader>;

export const Primary: Story = {
  args: {},
};
