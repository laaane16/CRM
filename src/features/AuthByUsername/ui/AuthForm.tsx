import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AppPaths, AppRoutes, DynamicModuleLoader, ReducersList, useAppDispatch } from '../../../shared/lib';
import { loginActions, loginReducer } from '../model/slice/loginSlice';
import { Input, Checkbox, Button, ButtonTheme } from '../../../shared/ui';
import { getLoginError } from '../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginIsLoading } from '../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUsername } from '../model/services/loginByUsername';

import * as styles from './AuthForm.module.scss';

interface Props {
  className?: string;
}

const reducersList: ReducersList = {
  login: loginReducer,
};

const AuthForm: FC<Props> = (props) => {
  const { t } = useTranslation('auth-page');
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

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
          <Button isLoading={isLoading} onClick={onClickEntry} className={styles.loginBtn} theme={ButtonTheme.PRIMARY}>
            {t('login')}
          </Button>
          <Button theme={ButtonTheme.PRIMARY}>{t('forgot')}</Button>
        </form>
      </div>
    </DynamicModuleLoader>
  );
};

export default AuthForm;
