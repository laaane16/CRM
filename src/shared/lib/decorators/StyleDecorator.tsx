import { ReactRenderer } from '@storybook/react/*';
import { PartialStoryFn } from 'storybook/internal/types';

const StyleDecorator = (Story: PartialStoryFn<ReactRenderer>) => {
  return (
    <div className="app-default-theme">
      <Story />
    </div>
  );
};

export default StyleDecorator;
