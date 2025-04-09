import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IJsonSettings, UserSchema } from '../types/types';
import { USER_LOCALSTORAGE_KEY } from '../../../../shared/constants/localstorage';
import { setFeatureFlags } from '../../../../shared/lib/featureFlags/featureFlags';
import { setUserJsonSettings } from '../services/setUserJsonSettings';
import { getJsonSettingsQuery } from '../api/userJsonSettingsApi';
import { initAuthState } from '../services/initAuthState';

const initialState: UserSchema = {
  id: null,
  username: '',
  avatar: '',
  roles: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<UserSchema>) => {
      const { id, username, avatar, roles, featureFlags, jsonSettings } = action.payload;
      state.id = id;
      state.username = username;
      state.avatar = avatar;
      state.roles = roles;
      featureFlags && setFeatureFlags(featureFlags);
      state.jsonSettings = jsonSettings;
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(id));
    },
    logout: (state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = { id: null, username: '', avatar: '', roles: [] };
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(setUserJsonSettings.fulfilled, (state, action: PayloadAction<IJsonSettings>) => {
        state.jsonSettings = action.payload;
      })
      .addCase(initAuthState.fulfilled, (state, { payload }: PayloadAction<UserSchema>) => {
        const { id, username, avatar, roles, featureFlags, jsonSettings } = payload;
        state.id = id;
        state.username = username;
        state.avatar = avatar;
        state.roles = roles;
        featureFlags && setFeatureFlags(featureFlags);
        state.jsonSettings = jsonSettings;
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(id));
      }),
});

export const { reducer: userReducer } = userSlice;
export const { actions: userActions } = userSlice;
