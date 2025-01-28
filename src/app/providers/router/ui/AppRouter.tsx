import { FC, lazy, ReactNode, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppPaths, AppRoutes } from '../../../../shared/lib/router/routes';
import { MainLayout, PageLoader } from '../../../../shared/ui';
import { Header } from '../../../../widgets/Header';
import { Sidebar } from '../../../../widgets/Sidebar';
import { getUserId } from '../../../../entities/User';
import { useSelector } from 'react-redux';

const NotFoundPage = lazy(() => import('../../../../pages/NotFoundPage'));
const AuthPage = lazy(() => import('../../../../pages/AuthPage'));
const PeoplePage = lazy(() => import('../../../../pages/PeoplePage'));
const ProfilePage = lazy(() => import('../../../../pages/ProfilePage'));

interface IAppRouteConfig {
  path: string;
  layout: 'main' | null;
  element: ReactNode;
  public?: boolean | undefined;
}

const AppRoutesConfig: Record<AppRoutes, IAppRouteConfig> = {
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
    public: true,
  },
  [AppRoutes.PROFILE]: {
    path: AppPaths[AppRoutes.PROFILE],
    element: <ProfilePage />,
    layout: null,
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppPaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
    layout: null,
  },
};
const AppRouter: FC = () => {
  const userId = useSelector(getUserId);

  return (
    <Routes>
      {Object.values(AppRoutesConfig).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<PageLoader />}>
              {userId ? (
                route.layout === 'main' ? (
                  <MainLayout>
                    <Header />
                    <Sidebar />
                    {route.element}
                  </MainLayout>
                ) : (
                  route.element
                )
              ) : route.public === true ? (
                route.element
              ) : (
                <Navigate to="/login" />
              )}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
