import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { AppPaths, AppRoutes } from '../../../shared/lib';

import * as styles from './ForbiddenPage.module.scss';

interface Props {
  className?: string;
}

const ForbiddenPage: FC<Props> = (props) => {
  const { t } = useTranslation('forbidden-page');

  return (
    <main className={styles.container}>
      <h1>{t('forbidden')}</h1>
      <Link className={cn(styles.link, 'secondary medium')} to={AppPaths[AppRoutes.MAIN]}>
        {t('nav-to-main-page')}
      </Link>
    </main>
  );
};

export default ForbiddenPage;
