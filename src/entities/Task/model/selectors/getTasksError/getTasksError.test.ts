import { StateSchema } from '../../../../../app/providers';
import { getTasksError } from './getTasksError';

describe('getTasksError.test', () => {
  test('work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      tasks: {
        error: { message: '' },
      },
    };
    expect(getTasksError(state as StateSchema)).toBe(state.tasks?.error);
  });

  test('work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getTasksError(state as StateSchema)).toBe(undefined);
  });
});
