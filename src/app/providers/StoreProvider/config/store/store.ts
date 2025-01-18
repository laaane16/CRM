import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '../../../../../features/AuthByUsername';
import { StateSchema } from '../types/StateSchema';
import { userReducer } from '../../../../../entities/User';

export const store = configureStore<StateSchema>({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
});
