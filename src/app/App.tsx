import { FC } from 'react';

import { Header } from '../widgets/Header';
import { Sidebar } from '../widgets/Sidebar';
import { MainLayout } from '../shared/ui';
import { AppRouter } from '../shared/lib';
import { AppPaths, AppRoutes } from '../shared/lib/router/routes';
import { AuthPage } from '../pages/Auth';

interface Props {
  className?: string;
}

const App: FC<Props> = (props) => {
  console.log(location);
  return (
    <div className="app-default-theme">
      {location.pathname === AppPaths[AppRoutes.LOGIN] ? (
        <AuthPage />
      ) : (
        1
        // <MainLayout>
        //   <Header />
        //   <Sidebar />
        //   <AppRouter />
        // </MainLayout>
      )}
    </div>
  );
};

export default App;
