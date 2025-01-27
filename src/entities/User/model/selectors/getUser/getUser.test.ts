import { StateSchema } from '../../../../../app/providers';
import { getUser } from './getUser';

describe('getUser.test', () => {
  test('should return user', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        id: 1,
        username: 'test',
      },
    };

    expect(getUser(state as StateSchema)).toBe(state.user);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getUser(state as StateSchema)).toBe(undefined);
  });
});
