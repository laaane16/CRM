import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { userReducer } from '../../../../../entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from '../../../../../shared/api/api';
import { StateSchema } from '../types/StateSchema';
import { saveScrollReducer } from '../../../../../features/saveScrollPosition/model/slice/saveScrollSlice';
import { rtkApi } from '../../../../../shared/api/rtkApi';

export const createStore = () => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    saveScroll: saveScrollReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
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
      }).concat(rtkApi.middleware),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
};
