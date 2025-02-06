import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './AuthPage.module.scss';

import {
  getLoginUsername,
  getLoginPassword,
  loginReducer,
  getLoginError,
  loginActions,
  loginByUsername,
} from '../../../features/AuthByUsername';
import { Button, Input, Checkbox, ButtonTheme } from '../../../shared/ui';
import { DynamicModuleLoader, AppPaths, AppRoutes, useAppDispatch } from '../../../shared/lib';
import { ReducersList } from '../../../shared/lib/components/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

const reducersList: ReducersList = {
  login: loginReducer,
};

const AuthPage: FC<Props> = () => {
  const { t } = useTranslation('auth-page');
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);

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
          <h2 className={`alternative ${styles.subtitle}`}>{t('entry')}</h2>
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
              type="password"
            />
            {error ? <p className={styles.error}>{t('error')}</p> : null}
            <Checkbox className={styles.checkbox} label="Запомнить меня" />
            <Button onClick={onClickEntry} className={styles.loginBtn} theme={ButtonTheme.PRIMARY}>
              {t('login')}
            </Button>
            <Button theme={ButtonTheme.PRIMARY}>{t('forgot')}</Button>
          </form>
        </div>
      </main>
    </DynamicModuleLoader>
  );
};

export default AuthPage;
