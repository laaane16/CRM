import { FC, useEffect } from 'react';

import * as styles from './AuthPage.module.scss';

import { getLoginUsername, getLoginPassword, loginReducer } from '../../../features/AuthByUsername';
import { Button, Input } from '../../../shared/ui';
import { ThemeButton } from '../../../shared/ui';
import { loginActions } from '../../../features/AuthByUsername';
import { loginByUsername } from '../../../features/AuthByUsername/model/services/loginByUsername';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from '../../../app/providers';
import { getUserId } from '../../../entities/User';
import { useNavigate } from 'react-router-dom';
import { AppPaths, AppRoutes } from '../../../shared/lib/router/routes';

interface Props {
  className?: string;
}

const AuthPage: FC<Props> = (props) => {
  const navigate = useNavigate();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    store.reducerManager.add('login', loginReducer);

    return () => {
      store.reducerManager.remove('login');
    };
  }, []);

  const dispatch = useAppDispatch();
  const username = getLoginUsername();
  const password = getLoginPassword();

  const onChangeUsername = (value: string) => {
    dispatch(loginActions.setUsername(value));
  };

  const onChangePassword = (value: string) => {
    dispatch(loginActions.setPassword(value));
  };

  const onClickEntry = async () => {
    const response = await dispatch(loginByUsername({ username, password }));
    if (response.type === loginByUsername.fulfilled.type) {
      navigate(AppPaths[AppRoutes.MAIN]);
    }
  };

  return (
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
          <Button onClick={onClickEntry} className={styles.loginBtn} theme={ThemeButton.PRIMARY}>
            Войти
          </Button>
          <Button theme={ThemeButton.PRIMARY}>Запомнить меня</Button>
        </form>
      </div>
    </main>
  );
};

export default AuthPage;
