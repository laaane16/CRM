import { FC, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppPaths, AppRoutes } from './routes';
import { PageLoader } from '../../ui';
import { AuthPage } from '../../../pages/Auth';

const PeoplePage = lazy(() => import('../../../pages/PeoplePage'));

const AppRoutesConfig = {
  [AppRoutes.MAIN]: {
    path: AppPaths[AppRoutes.MAIN],
    element: <></>,
  },
  [AppRoutes.PEOPLE]: {
    path: AppPaths[AppRoutes.PEOPLE],
    element: <PeoplePage />,
  },
  [AppRoutes.LOGIN]: {
    path: AppPaths[AppRoutes.LOGIN],
    element: <AuthPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppPaths[AppRoutes.NOT_FOUND],
    element: <></>,
  },
};
const AppRouter: FC = () => {
  return (
    <Routes>
      {Object.values(AppRoutesConfig).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<Suspense fallback={<PageLoader />}>{route.element}</Suspense>}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
