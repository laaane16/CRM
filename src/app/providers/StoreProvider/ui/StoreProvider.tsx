import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createStore } from '../config/store/store';
import { StateSchema } from '../config/types/StateSchema';

interface Props {
  children: ReactNode;
  initialState?: StateSchema;
}

const StoreProvider: FC<Props> = ({ children, initialState }) => {
  const store = createStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
