import { StateSchema } from '../../../../../app/providers';
import { getUserId } from './getUserId';

describe('getUserId.test', () => {
  test('should return userId', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        id: 1,
      },
    };

    expect(getUserId(state as StateSchema)).toEqual(state.user?.id);
  });

  test('should work with empty', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getUserId(state as StateSchema)).toEqual(undefined);
  });
});
