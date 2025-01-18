import { FC } from 'react';

import * as styles from './NotFoundPage.module.scss';

import { useTranslation } from 'react-i18next';

const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1>{t('notFound')}</h1>
    </div>
  );
};

export default NotFoundPage;
