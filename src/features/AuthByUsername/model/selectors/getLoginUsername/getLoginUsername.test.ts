import { StateSchema } from '../../../../../app/providers';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: '1234',
        password: '123',
        isLoading: false,
      },
    };

    expect(getLoginUsername(state as StateSchema)).toEqual(state.login?.username);
  });

  test('should work with empty', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toEqual(undefined);
  });
});
