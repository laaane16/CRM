import { FC, memo, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';

import { ReduxStoreWithManager } from '../../../app/providers';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchema } from '../../../app/providers/StoreProvider/config/types/StateSchema';
import { useAppDispatch } from '../hooks/useAppDispatch';

export type ReducersList = {
  [name in keyof StateSchema]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface Props {
  reducers: ReducersList;
  children: ReactNode;
  removeAfterUnmount?: boolean;
}

const DynamicModuleLoader: FC<Props> = ({ children, reducers, removeAfterUnmount = true }) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();
  const mountedReducers = store.reducerManager.getReducerMap();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      const typedName = name as keyof StateSchema;
      if (!mountedReducers[typedName]) {
        store.reducerManager.add(name as keyof StateSchema, reducer);
        // for debug
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as keyof StateSchema);
          // for debug
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, []);

  return <>{children}</>;
};

export default memo(DynamicModuleLoader);
