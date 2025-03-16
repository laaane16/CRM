import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import * as styles from './NotFoundPage.module.scss';

import { useTranslation } from 'react-i18next';
import { AppPaths, AppRoutes } from '../../../shared/lib/router/routes';

const NotFoundPage: FC = () => {
  const { t } = useTranslation('not-found');

  return (
    <main className={styles.container}>
      <h1>{t('not-found')}</h1>
      <Link className={cn(styles.link, 'secondary medium')} to={AppPaths[AppRoutes.MAIN]}>
        {t('nav-to-main-page')}
      </Link>
    </main>
  );
};

export default NotFoundPage;
