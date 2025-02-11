import { StateSchema } from '../../../../../app/providers';
import { getLoginError } from '../getLoginError/getLoginError';

describe('getLoginError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: '213',
        password: '123',
        isLoading: false,
        error: {
          message: '123',
        },
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual(state.login?.error);
  });

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: '213',
        password: '123',
        isLoading: false,
        error: undefined,
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual(state.login?.error);
  });
});
