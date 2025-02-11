import { FC } from 'react';
import cn from 'classnames';

import * as styles from './Ellipsis.module.scss';

interface Props {
  className?: string;
}

const Ellipsis: FC<Props> = ({ className }) => {
  const wrapClasses = cn(styles.wrap, className);

  return (
    <span className={wrapClasses}>
      <span className={styles.ellipsis}></span>
    </span>
  );
};

export default Ellipsis;
