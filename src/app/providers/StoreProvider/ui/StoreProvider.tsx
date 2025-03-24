import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createStore } from '../config/store/store';
import { StateSchema } from '../config/types/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface Props {
  children: ReactNode;
  initialState?: StateSchema;
  asyncReducers?: ReducersMapObject<StateSchema>;
}

const StoreProvider: FC<Props> = ({ children, initialState, asyncReducers }) => {
  const store = createStore(initialState, asyncReducers);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
