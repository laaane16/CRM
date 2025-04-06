import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { getMainRoutePath } from '../../../shared/lib/router/routes';

import * as styles from './ForbiddenPage.module.scss';

interface Props {
  className?: string;
}

const ForbiddenPage: FC<Props> = (props) => {
  const { t } = useTranslation('forbidden-page');

  return (
    <main data-testid="forbidden-page" className={styles.container}>
      <h1>{t('forbidden')}</h1>
      <Link className={cn(styles.link, 'secondary medium')} to={getMainRoutePath()}>
        {t('nav-to-main-page')}
      </Link>
    </main>
  );
};

export default ForbiddenPage;
