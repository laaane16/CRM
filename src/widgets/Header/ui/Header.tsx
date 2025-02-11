import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './Header.module.scss';

import { Button } from '../../../shared/ui';
import { ButtonSizes } from '../../../shared/ui';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { userActions } from '../../../entities/User';
import { AppPaths, AppRoutes } from '../../../shared/lib/router/routes';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

const Header: FC<Props> = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    dispatch(userActions.logout());
    navigate(AppPaths[AppRoutes.LOGIN]);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{t('header.title')}</h1>
      <Button size={ButtonSizes.SMALL}>{t('header.addEmployee')}</Button>
      <Button size={ButtonSizes.SMALL}>{t('header.getEmployee')}</Button>
      <span
        style={{ border: '1px solid black', borderRadius: '50%', width: '15px', height: '15px', display: 'block' }}
      ></span>
      <span
        style={{ border: '1px solid black', borderRadius: '50%', width: '15px', height: '15px', display: 'block' }}
      ></span>
      <Button onClick={onLogoutClick} size={ButtonSizes.SMALL}>
        {t('header.exit')}
      </Button>
    </header>
  );
};

export default Header;
