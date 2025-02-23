import { StateSchema } from '../../../../../app/providers';
import { getProfileForm } from './getProfileForm';

describe('getProfileError.test', () => {
  test('work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {},
      },
    };
    expect(getProfileForm(state as StateSchema)).toBe(state.profile?.form);
  });

  test('work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toBe(undefined);
  });
});
