import { StateSchema } from '../../../../../app/providers';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileError.test', () => {
  test('work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toBe(state.profile?.isLoading);
  });

  test('work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema)).toBe(undefined);
  });
});
