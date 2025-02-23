import { Meta, StoryObj } from '@storybook/react/*';
import Avatar, { AvatarSizes } from './Avatar';
import image from '../../lib/assets/images.png';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'shared/Avatar',
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const LargeAvatar: Story = {
  args: { avatar: image, size: AvatarSizes.LARGE },
};

export const MediumAvatar: Story = {
  args: { avatar: image, size: AvatarSizes.MEDIUM },
};

export const SmallAvatar: Story = {
  args: { avatar: image, size: AvatarSizes.SMALL },
};

export const LargeDefaultAvatar: Story = {
  args: { avatar: '', size: AvatarSizes.LARGE },
};

export const MediumDefaultAvatar: Story = {
  args: { avatar: '', size: AvatarSizes.MEDIUM },
};

export const SmallDefaultAvatar: Story = {
  args: { avatar: '', size: AvatarSizes.SMALL },
};
