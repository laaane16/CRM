import { FC, lazy, useEffect } from 'react';

import { useAppDispatch } from '../shared/lib/hooks/useAppDispatch';
import { getUserId, userActions } from '../entities/User';
import { AppRouter } from '../shared/lib';
import { MainLayout } from '../shared/ui';
import { Header } from '../widgets/Header';
import { Sidebar } from '../widgets/Sidebar';
import { Navigate, useNavigate } from 'react-router-dom';
const AuthPage = lazy(() => import('../pages/AuthPage'));

interface Props {
  className?: string;
}

const App: FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const userId = getUserId();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userActions.initAuthState());
  }, []);

  return (
    <div className="app-default-theme">
      {userId ? (
        <MainLayout>
          <Header />
          <Sidebar />
          <AppRouter />
        </MainLayout>
      ) : (
        <AuthPage />
      )}
    </div>
  );
};

export default App;
