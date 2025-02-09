import { FC } from 'react';

import * as styles from './DocsCard.module.scss';

interface Props {
  className?: string;
}

const DocsCard: FC<Props> = (props) => {
  return (
    <div className={styles.docs}>
      <div className={styles.doc}></div>
      <div className={styles.doc}></div>
      <div className={styles.doc}></div>
      <div className={styles.doc}></div>
      <div className={styles.doc}></div>
      <div className={styles.doc}></div>
    </div>
  );
};

export default DocsCard;
