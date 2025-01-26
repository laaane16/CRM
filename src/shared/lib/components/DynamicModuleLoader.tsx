import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';

import { ReduxStoreWithManager } from '../../../app/providers';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey } from '../../../app/providers/StoreProvider/config/types/StateSchema';
import { useAppDispatch } from '../hooks/useAppDispatch';

interface Props {
  name: StateSchemaKey;
  reducer: Reducer;
  children: ReactNode;
}

const DynamicModuleLoader: FC<Props> = ({ children, reducer, name }) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    store.reducerManager.add(name, reducer);
    // for debug
    dispatch({ type: `@INIT ${name} reducer` });

    return () => {
      store.reducerManager.remove(name);
      // for debug
      dispatch({ type: `@DESTROY ${name} reducer` });
    };
  }, []);
  return <>{children}</>;
};

export default DynamicModuleLoader;
