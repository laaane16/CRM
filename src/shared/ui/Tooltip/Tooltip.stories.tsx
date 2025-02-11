import { Meta, StoryObj } from '@storybook/react/*';
import Tooltip, { ArrowPosition } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const TopPositionTooltip: Story = {
  args: {
    style: { marginTop: '100px', marginLeft: '100px' },
    children: <p>Random text</p>,
    title: 'Random text',
    arrowPosition: ArrowPosition.TOP,
  },
};

export const RightPositionTooltip: Story = {
  args: {
    style: { marginTop: '100px', marginLeft: '100px' },
    children: <p>Random text</p>,
    title: 'Random text',
    arrowPosition: ArrowPosition.RIGHT,
  },
};

export const BottomPositionTooltip: Story = {
  args: {
    style: { marginTop: '100px', marginLeft: '100px' },
    children: <p>Random text</p>,
    title: 'Random text',
    arrowPosition: ArrowPosition.BOTTOM,
  },
};

export const LeftPositionTooltip: Story = {
  args: {
    style: { marginTop: '100px', marginLeft: '100px' },
    children: <p>Random text</p>,
    title: 'Random text',
    arrowPosition: ArrowPosition.LEFT,
  },
};
