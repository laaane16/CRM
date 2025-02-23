import { StateSchema } from '../../../../../app/providers';
import { getTasksIsLoading } from './getTasksIsLoading';

describe('getTasksIsLoading.test', () => {
  test('work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      tasks: {
        isLoading: false,
      },
    };
    expect(getTasksIsLoading(state as StateSchema)).toBe(state.tasks?.isLoading);
  });

  test('work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getTasksIsLoading(state as StateSchema)).toBe(undefined);
  });
});
