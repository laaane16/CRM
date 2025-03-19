import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from '../types/types';
import { USER_LOCALSTORAGE_KEY } from '../../../../shared/constants/localstorage';

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
    initAuthState: (state) => {
      const data = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (data) {
        const parseData = JSON.parse(data);
        state.id = parseData.id;
        state.username = parseData.username;
        state.avatar = parseData.avatar;
        state.roles = parseData.roles;
      } else {
        console.log('ПОЛЬЗОВАТЕЛЬ НЕ АВТОРИЗОВАН');
      }
    },
    setAuthData: (state, action: PayloadAction<UserSchema>) => {
      const { id, username, avatar, roles } = action.payload;
      state.id = id;
      state.username = username;
      state.avatar = avatar;
      state.roles = roles;
    },
    logout: (state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = { id: null, username: '', avatar: '', roles: [] };
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { reducer: userReducer } = userSlice;
export const { actions: userActions } = userSlice;
