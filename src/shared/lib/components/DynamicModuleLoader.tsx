import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';

import { ReduxStoreWithManager } from '../../../app/providers';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey } from '../../../app/providers/StoreProvider/config/types/StateSchema';
import { useAppDispatch } from '../hooks/useAppDispatch';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface Props {
  reducers: ReducersList;
  children: ReactNode;
}

const DynamicModuleLoader: FC<Props> = ({ children, reducers }) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      // for debug
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      Object.entries(reducers).forEach(([name]) => {
        store.reducerManager.remove(name as StateSchemaKey);
        // for debug
        dispatch({ type: `@DESTROY ${name} reducer` });
      });
    };
  }, []);

  return <>{children}</>;
};

export default DynamicModuleLoader;
