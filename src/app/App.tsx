import { FC, useEffect, useState } from 'react';

import { useAppDispatch } from '../shared/lib/hooks/useAppDispatch';
import { userActions } from '../entities/User';
import AppRouter from './providers/router/ui/AppRouter';
import { PageLoader } from '../shared/ui';

interface Props {
  className?: string;
}

const App: FC<Props> = () => {
  const [isInit, setIsInit] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthState());
    setIsInit(true);
  }, []);

  return isInit ? (
    <div className="app-default-theme container">
      <AppRouter />
    </div>
  ) : (
    <PageLoader />
  );
};

export default App;
