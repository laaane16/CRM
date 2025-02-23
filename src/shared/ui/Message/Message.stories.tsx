import { Meta, StoryObj } from '@storybook/react/*';
import Message from './Message';

const meta: Meta<typeof Message> = {
  component: Message,
  title: 'shared/Message',
};

export default meta;

type Story = StoryObj<typeof Message>;

export const Primary: Story = {
  args: {
    description: 'Test Message',
  },
};
