import { profileFetchData } from '../services/profileFetchData/profileFetchData';
import updateProfileData from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/ProfileSchema';
import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice.test', () => {
  const state = { data: undefined, isLoading: false, error: undefined, readonly: false };

  test('test updateProfile reducer', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        name: '123',
      },
    };

    const result = profileReducer(state as ProfileSchema, profileActions.updateProfile({ name: 'asd' }));

    expect(result).toEqual({ form: { name: 'asd' } });
  });

  // async reducers
  test('profileFetchData pending', () => {
    const newState = profileReducer({ ...state, error: 'error' } as ProfileSchema, {
      type: profileFetchData.pending.type,
    });

    expect(newState).toEqual({ data: undefined, isLoading: true, error: undefined, readonly: false });
  });

  test('profileFetchData fulfilled', () => {
    const newState = profileReducer(state as ProfileSchema, { type: profileFetchData.fulfilled.type, payload: {} });

    expect(newState).toEqual({ data: {}, form: {}, isLoading: false, error: undefined, readonly: false });
  });

  test('profileFetchData rejected', () => {
    const newState = profileReducer(state as ProfileSchema, {
      type: profileFetchData.rejected.type,
      error: { message: 'error' },
      payload: {},
    });

    expect(newState).toEqual({ data: undefined, isLoading: false, error: 'error', readonly: false });
  });

  test('updateProfileData pending', () => {
    const newState = profileReducer({ ...state, error: 'error' } as ProfileSchema, {
      type: updateProfileData.pending.type,
    });

    expect(newState).toEqual({ data: undefined, isLoading: true, error: undefined, readonly: false });
  });

  test('updateProfileData fulfilled', () => {
    const newState = profileReducer(state as ProfileSchema, { type: updateProfileData.fulfilled.type, payload: {} });

    expect(newState).toEqual({ data: {}, form: {}, isLoading: false, error: undefined, readonly: false });
  });

  test('updateProfileData rejected', () => {
    const newState = profileReducer(state as ProfileSchema, {
      type: updateProfileData.rejected.type,
      error: { message: 'error' },
      payload: {},
    });

    expect(newState).toEqual({ data: undefined, form: undefined, isLoading: false, error: 'error', readonly: false });
  });
});
