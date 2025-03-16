import { StateSchema } from '../../../../../app/providers';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: '1234',
        password: '123',
        isLoading: false,
      },
    };

    expect(getLoginIsLoading(state as StateSchema)).toEqual(state.login?.isLoading);
  });

  test('should work with empty', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
