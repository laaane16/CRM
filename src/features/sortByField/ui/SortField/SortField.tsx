import { FC } from 'react';
import cn from 'classnames';

import * as styles from './SortField.module.scss';

import { OrderType } from '../../../../shared/types/Order';

interface Props {
  title: string;
  className?: string;
  order: OrderType | '';
}

const SortField: FC<Props> = ({ title, className, order }) => {
  const iconClasses = cn('icon-read-more', styles.icon, { [styles.top]: order === 'asc' });

  return (
    <div className={styles.sortField}>
      <h4 className={styles.title}>{title}</h4>
      <span className={iconClasses} />
    </div>
  );
};

export default SortField;
