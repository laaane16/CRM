import { StateSchema } from '../../../../../app/providers';
import { getUsername } from './getUsername';

describe('getUsername.test', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        username: 'test',
      },
    };

    expect(getUsername(state as StateSchema)).toEqual(state.user?.username);
  });

  test('should work with empty', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getUsername(state as StateSchema)).toEqual(undefined);
  });
});
