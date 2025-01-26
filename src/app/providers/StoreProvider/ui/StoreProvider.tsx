import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createStore } from '../config/store/store';

interface Props {
  children: ReactNode;
}

const StoreProvider: FC<Props> = ({ children }) => {
  const store = createStore();

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
