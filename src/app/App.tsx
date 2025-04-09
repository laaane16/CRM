import { FC, use, useContext, useEffect, useState } from 'react';

import { useAppDispatch } from '../shared/lib/hooks/useAppDispatch';
import AppRouter from './providers/router/ui/AppRouter';
import { PageLoader } from '../shared/ui';
import { ThemeContext, Themes } from '../shared/theme';
import { initAuthState } from '../entities/User/model/services/initAuthState';
import { useSelector } from 'react-redux';
import { StateSchema } from './providers';
import { ThemeContextProps } from '../shared/theme/types';

interface Props {
  className?: string;
}

const App: FC<Props> = () => {
  // need to show the ui only after we have found out the user authorization information!!!
  const [isInit, setIsInit] = useState(false);
  const userId = useSelector((state: StateSchema) => state.user.id);
  const userTheme = useSelector((state: StateSchema) => state.user.jsonSettings?.theme);
  const { theme, setTheme } = useContext(ThemeContext) as Required<ThemeContextProps>;

  useEffect(() => {
    dispatch(initAuthState());
  }, []);

  useEffect(() => {
    if (userId) {
      setIsInit(true);
      setTheme(userTheme || theme);
    }
  }, [userId]);

  const dispatch = useAppDispatch();

  isInit && console.log('INITED');

  return isInit ? (
    <div className={`app-${theme}-theme container`}>
      <AppRouter />
    </div>
  ) : (
    <PageLoader />
  );
};

export default App;
