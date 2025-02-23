import { StateSchema } from '../../../../../app/providers';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileError.test', () => {
  test('work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toBe(state.profile?.readonly);
  });

  test('work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toBe(undefined);
  });
});
