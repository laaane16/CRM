import { FC, lazy, ReactNode, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppPaths, AppRoutes } from '../../../../shared/lib';
import { MainLayout, PageLoader } from '../../../../shared/ui';
import { Header } from '../../../../widgets/Header';
import { Sidebar } from '../../../../widgets/Sidebar';
import { getUserId, IRole } from '../../../../entities/User';
import { getUserRoles } from '../../../../entities/User/model/selectors/getUserRoles/getUserRoles';

const AdminPage = lazy(() => import('../../../../pages/AdminPage'));
const ForbiddenPage = lazy(() => import('../../../../pages/ForbiddenPage'));
const NotFoundPage = lazy(() => import('../../../../pages/NotFoundPage'));
const AuthPage = lazy(() => import('../../../../pages/AuthPage'));
const PeoplePage = lazy(() => import('../../../../pages/PeoplePage'));
const ProfilePage = lazy(() => import('../../../../pages/ProfilePage'));

interface IAppRouteConfig {
  path: string;
  layout: 'main' | null;
  element: ReactNode;
  public?: boolean | undefined;
  roles?: IRole[];
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
    path: AppPaths[AppRoutes.PROFILE] + '/:id',
    element: <ProfilePage />,
    layout: null,
  },
  [AppRoutes.ADMIN]: {
    path: AppPaths[AppRoutes.ADMIN],
    element: <AdminPage />,
    layout: 'main',
    roles: ['admin'],
  },
  [AppRoutes.FORBIDDEN]: {
    path: AppPaths[AppRoutes.FORBIDDEN],
    element: <ForbiddenPage />,
    layout: null,
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppPaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
    layout: null,
  },
};

export const checkAvailable = (userRoles: IRole[], roles: IRole[]) => {
  const isAvailable = userRoles.some((i) => {
    const isAvailable = roles.includes(i);
    if (isAvailable) {
      return true;
    }
  });
  return isAvailable;
};

const getRouteElement = (route: IAppRouteConfig, userId: number | null, userRoles: IRole[]) => {
  let content = null;
  if (userId) {
    if (route.roles && !checkAvailable(userRoles, route.roles)) {
      content = <Navigate to="/forbidden" />;
    } else if (route.layout === 'main') {
      content = (
        <MainLayout>
          <Header />
          <Sidebar />
          {route.element}
        </MainLayout>
      );
    } else {
      content = route.element;
    }
  } else {
    if (route.public === true || route.path === AppPaths[AppRoutes.NOT_FOUND]) {
      content = route.element;
    } else {
      content = <Navigate to="/login" />;
    }
  }
  return content;
};

const AppRouter: FC = () => {
  const userId = useSelector(getUserId);
  const userRoles = useSelector(getUserRoles);

  return (
    <Routes>
      {Object.values(AppRoutesConfig).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<Suspense fallback={<PageLoader />}>{getRouteElement(route, userId, userRoles)}</Suspense>}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
