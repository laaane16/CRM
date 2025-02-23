import { StateSchema } from '../../../../../app/providers';
import { getUserAvatar } from './getUserAvatar';

describe('getUserId.test', () => {
  test('should return userAvatar', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        avatar: '123',
      },
    };

    expect(getUserAvatar(state as StateSchema)).toEqual(state.user?.avatar);
  });

  test('should work with empty', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getUserAvatar(state as StateSchema)).toEqual(undefined);
  });
});
