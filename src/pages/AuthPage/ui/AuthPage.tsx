import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './AuthPage.module.scss';

import { getLoginUsername, getLoginPassword, loginReducer } from '../../../features/AuthByUsername';
import { Button, Input } from '../../../shared/ui';
import { ButtonTheme } from '../../../shared/ui';
import { loginActions } from '../../../features/AuthByUsername';
import { loginByUsername } from '../../../features/AuthByUsername/model/services/loginByUsername';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { AppPaths, AppRoutes } from '../../../shared/lib/router/routes';
import { DynamicModuleLoader } from '../../../shared/lib';
import { ReducersList } from '../../../shared/lib/components/DynamicModuleLoader';
import { useSelector } from 'react-redux';

interface Props {
  className?: string;
}

const reducersList: ReducersList = {
  login: loginReducer,
};

const AuthPage: FC<Props> = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);

  const onChangeUsername = (value: string) => {
    dispatch(loginActions.setUsername(value));
  };

  const onChangePassword = (value: string) => {
    dispatch(loginActions.setPassword(value));
  };

  const onClickEntry = async () => {
    const response = await dispatch(loginByUsername({ username, password }));
    if (response.meta.requestStatus === 'fulfilled') {
      navigate(AppPaths[AppRoutes.MAIN]);
    }
  };

  return (
    <DynamicModuleLoader reducers={reducersList}>
      <main className={styles.layout}>
        <div className={styles.content}>
          <h1 className={styles.title}>LOGOTYPE</h1>
          <h2 className={`alternative ${styles.subtitle}`}>Вход</h2>
          <form className={styles.form} action="get">
            <Input
              placeholder="Введите имя пользователя"
              className={styles.login}
              title="Логин"
              value={username}
              onChange={onChangeUsername}
            />
            <Input
              placeholder="Введите пароль"
              className={styles.password}
              title="Пароль"
              value={password}
              onChange={onChangePassword}
            />
            <label className={styles.checkboxWrap}>
              Запомнить меня
              <input type="checkbox" />
            </label>
            <Button onClick={onClickEntry} className={styles.loginBtn} theme={ButtonTheme.PRIMARY}>
              Войти
            </Button>
            <Button theme={ButtonTheme.PRIMARY}>Запомнить меня</Button>
          </form>
        </div>
      </main>
    </DynamicModuleLoader>
  );
};

export default AuthPage;
