import { FC, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppPaths, AppRoutes } from '../../../../shared/lib/router/routes';
import { MainLayout, PageLoader } from '../../../../shared/ui';
import { Header } from '../../../../widgets/Header';
import { Sidebar } from '../../../../widgets/Sidebar';

const NotFoundPage = lazy(() => import('../../../../pages/NotFound/ui/NotFoundPage'));
const AuthPage = lazy(() => import('../../../../pages/AuthPage'));
const PeoplePage = lazy(() => import('../../../../pages/PeoplePage'));

const AppRoutesConfig = {
  [AppRoutes.MAIN]: {
    path: AppPaths[AppRoutes.MAIN],
    layout: 'main',
    element: <PeoplePage />,
  },
  [AppRoutes.PEOPLE]: {
    path: AppPaths[AppRoutes.PEOPLE],
    element: <PeoplePage />,
    layout: 'main',
  },
  [AppRoutes.LOGIN]: {
    path: AppPaths[AppRoutes.LOGIN],
    element: <AuthPage />,
    layout: null,
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppPaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
    layout: null,
  },
};
const AppRouter: FC = () => {
  return (
    <Routes>
      {Object.values(AppRoutesConfig).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<PageLoader />}>
              {route.layout === 'main' ? (
                <MainLayout>
                  <Header />
                  <Sidebar />
                  {route.element}
                </MainLayout>
              ) : (
                route.element
              )}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
