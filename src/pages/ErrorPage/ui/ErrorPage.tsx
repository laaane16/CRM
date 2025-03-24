import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../../../shared/ui';

import * as styles from './ErrorPage.module.scss';

interface Props {
  className?: string;
}

const ErrorPage: FC<Props> = () => {
  const { t } = useTranslation();

  return (
    <main className={styles.container}>
      <h1>{t('error')}</h1>
      <Button
        className={styles.btn}
        onClick={() => {
          location.reload();
        }}
        type="button"
      >
        {t('reloadPage')}
      </Button>
    </main>
  );
};

export default ErrorPage;
