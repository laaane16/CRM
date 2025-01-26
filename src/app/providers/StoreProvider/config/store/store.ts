import { configureStore } from '@reduxjs/toolkit';

import { StateSchema } from '../types/StateSchema';
import { userReducer } from '../../../../../entities/User';
import { createReducerManager } from './reducerManager';

export const createStore = () => {
  const rootReducers = {
    user: userReducer,
  };
  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
};
