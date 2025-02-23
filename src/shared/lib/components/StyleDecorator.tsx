import { ReactRenderer } from '@storybook/react/*';
import { PartialStoryFn } from 'storybook/internal/types';

const StyleDecorator = (Story: PartialStoryFn<ReactRenderer>) => {
  return (
    <div className="app-light-theme">
      <Story />
    </div>
  );
};

export default StyleDecorator;
