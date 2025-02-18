import { StateSchema } from '../../../../../app/providers';
import { getAvatar } from './getAvatar';

describe('getAvatar.test', () => {
  test('should return avatar', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        avatar: 'test',
      },
    };

    expect(getAvatar(state as StateSchema)).toBe('test');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getAvatar(state as StateSchema)).toBe(undefined);
  });
});
