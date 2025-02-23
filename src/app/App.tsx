import { FC, useContext, useEffect, useState } from 'react';

import { useAppDispatch } from '../shared/lib/hooks/useAppDispatch';
import { userActions } from '../entities/User';
import AppRouter from './providers/router/ui/AppRouter';
import { PageLoader } from '../shared/ui';
import { ThemeContext } from '../shared/theme';

interface Props {
  className?: string;
}

const App: FC<Props> = () => {
  // need to show the ui only after we have found out the user authorization information!!!
  const [isInit, setIsInit] = useState(false);

  const dispatch = useAppDispatch();

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    dispatch(userActions.initAuthState());
    setIsInit(true);
  }, []);

  return isInit ? (
    <div className={`app-${theme}-theme container`}>
      <AppRouter />
    </div>
  ) : (
    <PageLoader />
  );
};

export default App;
