import { FC } from 'react';
import cn from 'classnames';

import * as styles from './SectionHeader.module.scss';
import { EmployeesCardView } from '../../../entities/Employee/ui/EmployeesCard/EmployeesCard';

interface Props {
  className?: string;
  currentView: EmployeesCardView;
  onChangeListView: (type: EmployeesCardView) => void;
}

const data: { title: string; count: number }[] = [
  { title: 'Штатные', count: 12 },
  { title: 'Сдельные', count: 5 },
  { title: 'Кандидаты', count: 6 },
  { title: 'Архив', count: 3 },
  { title: 'Партнеры', count: 19 },
  { title: 'Запросы', count: 10 },
];

const SectionHeader: FC<Props> = ({ className, currentView, onChangeListView }) => {
  return (
    <div className={styles.header}>
      <ul className={styles.list}>
        {data.map((item, index) => (
          <li className={styles.listItem} key={index}>
            <span className={cn(styles.itemTitle, 'secondary medium')}>{item.title}</span>
            <span className={cn(styles.itemCount, 'secondary medium')}>{item.count}</span>
          </li>
        ))}
      </ul>
      <div className={styles.viewToggle}>
        <span
          onClick={() => onChangeListView(EmployeesCardView.SMALL)}
          className={cn(styles.toggleItem, 'icon-list', { [styles.active]: EmployeesCardView.SMALL === currentView })}
        />
        <span
          onClick={() => onChangeListView(EmployeesCardView.LARGE)}
          className={cn(styles.toggleItem, 'icon-grid', { [styles.active]: EmployeesCardView.LARGE === currentView })}
        />
      </div>
    </div>
  );
};

export default SectionHeader;
