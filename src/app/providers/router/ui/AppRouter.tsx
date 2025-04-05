import { FC, lazy, ReactNode, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppRoutes } from '../../../../shared/lib';
import { MainLayout, PageLoader } from '../../../../shared/ui';
import { Header } from '../../../../widgets/Header';
import { Sidebar } from '../../../../widgets/Sidebar';
import { getUserId, IRole } from '../../../../entities/User';
import { getUserRoles } from '../../../../entities/User';
import { checkAvailableByRole } from '../../../../shared/utils';
import {
  getAdminRoutePath,
  getForbiddenRoutePath,
  getLoginRoutePath,
  getMainRoutePath,
  getNotFoundRoutePath,
  getPeopleRoutePath,
  getProfileRoutePath,
} from '../../../../shared/lib/router/routes';

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
    path: getMainRoutePath(),
    layout: 'main',
    element: <PeoplePage />,
  },
  [AppRoutes.PEOPLE]: {
    path: getPeopleRoutePath(),
    element: <PeoplePage />,
    layout: 'main',
  },
  [AppRoutes.LOGIN]: {
    path: getLoginRoutePath(),
    element: <AuthPage />,
    layout: null,
    public: true,
  },
  [AppRoutes.PROFILE]: {
    path: getProfileRoutePath(':id'),
    element: <ProfilePage />,
    layout: null,
  },
  [AppRoutes.ADMIN]: {
    path: getAdminRoutePath(),
    element: <AdminPage />,
    layout: 'main',
    roles: ['admin'],
  },
  [AppRoutes.FORBIDDEN]: {
    path: getForbiddenRoutePath(),
    element: <ForbiddenPage />,
    layout: null,
  },
  [AppRoutes.NOT_FOUND]: {
    path: getNotFoundRoutePath(),
    element: <NotFoundPage />,
    layout: null,
  },
};

const getRouteElement = (route: IAppRouteConfig, userId: number | null, userRoles: IRole[]) => {
  let content = null;
  if (userId) {
    if (route.roles && !checkAvailableByRole(userRoles, route.roles)) {
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
    if (route.public === true || route.path === getNotFoundRoutePath()) {
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
