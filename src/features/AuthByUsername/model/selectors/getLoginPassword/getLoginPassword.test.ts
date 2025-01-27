import { StateSchema } from '../../../../../app/providers';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: '1234',
        password: '123',
        isLoading: false,
      },
    };

    expect(getLoginPassword(state as StateSchema)).toEqual(state.login?.password);
  });

  test('should work with empty', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
