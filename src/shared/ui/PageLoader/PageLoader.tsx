import { FC } from 'react';

import * as styles from './PageLoader.module.scss';

import Loader from '../Loader/Loader';

interface Props {
  className?: string;
}

const PageLoader: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <Loader />
    </div>
  );
};

export default PageLoader;
