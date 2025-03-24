import { profileFetchData } from '../services/profileFetchData/profileFetchData';
import updateProfileData from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/ProfileSchema';
import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice.test', () => {
  const state = { data: undefined, isLoading: false, error: undefined, readonly: true };

  test('test updateProfile reducer', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        name: '123',
      },
    };

    const result = profileReducer(state as ProfileSchema, profileActions.updateProfile({ name: 'asd' }));

    expect(result).toEqual({ form: { name: 'asd' } });
  });

  test('test onEditorMode reducer', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: true,
    };

    const result = profileReducer(state as ProfileSchema, profileActions.onEditorMode());

    expect(result).toEqual({ readonly: false });
  });

  test('test cancelEdit reducer', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        name: 'nameFromForm',
      },
      data: {
        name: 'nameFromData',
      },
      readonly: false,
    };

    const result = profileReducer(state as ProfileSchema, profileActions.cancelEdit());

    expect(result).toEqual({ form: state.data, data: state.data, readonly: true });
  });

  // async reducers
  test('profileFetchData pending', () => {
    const newState = profileReducer({ ...state, error: 'error' } as ProfileSchema, {
      type: profileFetchData.pending.type,
    });

    expect(newState).toEqual({ data: undefined, isLoading: true, error: undefined, readonly: true });
  });

  test('profileFetchData fulfilled', () => {
    const newState = profileReducer(state as ProfileSchema, { type: profileFetchData.fulfilled.type, payload: {} });

    expect(newState).toEqual({ data: {}, form: {}, isLoading: false, error: undefined, readonly: true });
  });

  test('profileFetchData rejected', () => {
    const newState = profileReducer(state as ProfileSchema, {
      type: profileFetchData.rejected.type,
      error: { message: 'error' },
      payload: {},
    });

    expect(newState).toEqual({ data: undefined, isLoading: false, error: 'error', readonly: true });
  });

  test('updateProfileData pending', () => {
    const newState = profileReducer({ ...state, error: 'error' } as ProfileSchema, {
      type: updateProfileData.pending.type,
    });

    expect(newState).toEqual({ data: undefined, isLoading: true, error: undefined, readonly: true });
  });

  test('updateProfileData fulfilled', () => {
    const newState = profileReducer(state as ProfileSchema, { type: updateProfileData.fulfilled.type, payload: {} });

    expect(newState).toEqual({ data: {}, form: {}, isLoading: false, error: undefined, readonly: true });
  });

  test('updateProfileData rejected', () => {
    const newState = profileReducer(state as ProfileSchema, {
      type: updateProfileData.rejected.type,
      error: { message: 'error' },
      payload: {},
    });

    expect(newState).toEqual({ data: undefined, form: undefined, isLoading: false, error: 'error', readonly: true });
  });
});
