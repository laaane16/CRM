import { UserSchema } from '../types/types';
import { userActions, userReducer } from './userSlice';

describe('userSlice.test', () => {
  const state: DeepPartial<UserSchema> = {
    id: null,
    username: '',
  };

  test('test initAuthData reducer', () => {
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');

    mockGetItem.mockReturnValue(JSON.stringify({ id: 1, username: 'test' }));
    const result = userReducer(state as UserSchema, userActions.initAuthState());

    expect(result).toEqual({ id: 1, username: 'test' });
  });

  test('test initAuthData reducer while no data in localstorage', () => {
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');

    mockGetItem.mockReturnValue(null);
    const result = userReducer(state as UserSchema, userActions.initAuthState());

    expect(result).toEqual(state);
  });

  test('test setAuthData reducer', () => {
    const result = userReducer(state as UserSchema, userActions.setAuthData({ id: 1, username: 'test' }));

    expect(result).toEqual({ id: 1, username: 'test' });
  });

  test('test logout reducer', () => {
    const mockedRemoveItem = jest.spyOn(Storage.prototype, 'removeItem');

    const result = userReducer(state as UserSchema, userActions.logout());

    expect(mockedRemoveItem).toHaveBeenCalled();
    expect(result).toEqual({ id: null, username: '' });
  });
});
