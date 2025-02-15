import { StateSchema } from '../../../../../app/providers';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
  test('work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: { message: 'error' },
      },
    };
    expect(getProfileError(state as StateSchema)).toBe(state.profile?.error);
  });

  test('work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toBe(undefined);
  });
});
