import { FC, lazy, useEffect, useState } from 'react';

import { useAppDispatch } from '../shared/lib/hooks/useAppDispatch';
import { getUserId, userActions } from '../entities/User';
import AppRouter from './providers/router/ui/AppRouter';
import { Navigate } from 'react-router-dom';
import { PageLoader } from '../shared/ui';

interface Props {
  className?: string;
}

const App: FC<Props> = (props) => {
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
