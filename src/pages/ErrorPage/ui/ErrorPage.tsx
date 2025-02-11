import { FC } from 'react';

import { Button } from '../../../shared/ui';

import * as styles from './ErrorPage.module.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

const ErrorPage: FC<Props> = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default ErrorPage;
