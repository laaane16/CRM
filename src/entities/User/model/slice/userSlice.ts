import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from '../types/types';
import { USER_LOCALSTORAGE_KEY } from '../../../../shared/constants/localstorage';

const initialState: UserSchema = {
  id: null,
  username: '',
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
      } else {
        console.log('ПОЛЬЗОВАТЕЛЬ НЕ АВТОРИЗОВАН');
      }
    },
    setAuthData: (state, action: PayloadAction<UserSchema>) => {
      const { id, username } = action.payload;
      state.id = id;
      state.username = username;
    },
    logout: (state) => {
      state = { id: null, username: '' };
      localStorage.deleteItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { reducer: userReducer } = userSlice;
export const { actions: userActions } = userSlice;
