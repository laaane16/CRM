import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppPaths, AppRoutes } from './routes';

const AppRoutesConfig = {
  [AppRoutes.MAIN]: {
    path: AppPaths[AppRoutes.MAIN],
    element: <></>,
  },
  [AppRoutes.PEOPLE]: {
    path: AppPaths[AppRoutes.PEOPLE],
    element: <></>,
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
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
