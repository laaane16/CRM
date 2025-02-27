import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from '../../../../../entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from '../../../../../shared/api/api';
import { StateSchema } from '../types/StateSchema';
import { saveScrollReducer } from '../../../../../features/saveScrollPosition/model/slice/saveScrollSlice';

export const createStore = () => {
  const rootReducers = {
    user: userReducer,
    saveScroll: saveScrollReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
          },
        },
      }),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
};
