import { FC } from 'react';

import EmployeesCard, { EmployeesCardView, IEmployee } from '../EmployeesCard/EmployeesCard';

import * as styles from './EmployeesList.module.scss';
import cn from 'classnames';

interface Props {
  className?: string;
  view: EmployeesCardView;
  items: IEmployee[];
}

const EmployeesList: FC<Props> = ({ items, view, className }) => {
  const listClasses = cn(styles.list, className, styles[view]);

  return (
    <ul className={listClasses}>
      {items.map((item) => (
        <EmployeesCard className={styles.card} key={item.id} data={item} view={view} />
      ))}
    </ul>
  );
};

export default EmployeesList;
