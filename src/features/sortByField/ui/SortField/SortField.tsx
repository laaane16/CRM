import { FC } from 'react';
import cn from 'classnames';

import * as styles from './SortField.module.scss';

import { OrderType } from '../../../../shared/types/OrderType';

interface Props {
  title: string;
  className?: string;
  value: OrderType;
}

const SortField: FC<Props> = ({ title, className, value }) => {
  const iconClasses = cn('icon-read-more', styles.icon, { [styles.top]: value === 'asc' });

  return (
    <div className={styles.sortField}>
      <h4 className={styles.title}>{title}</h4>
      <span className={iconClasses} />
    </div>
  );
};

export default SortField;
